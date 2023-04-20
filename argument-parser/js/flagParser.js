import Flag from './flag.js';

export default class FlagParser {
  constructor(input) {
    this.flags = {};
    this.input = input;
    this.parseFlags(input);
  }

  parseFlags() {
    let currentFlag = null;

    for (let i = 0; i < this.input.length; i++) {
      const item = this.input[i];

      if (typeof item === 'string') {
        if (item.startsWith('--')) {
          const flagName = item.slice(2);
          currentFlag = this.createFlag(flagName);
          this.flags[flagName] = currentFlag;
        } else {
          this.setFlagValue(currentFlag, item);
        }
      } else if (Array.isArray(item)) {
        this.setFlagValue(currentFlag, item);
      } else {
        this.setFlagValue(currentFlag, true);
      }
    }

    this.parseFlagValues();

    return this.flags;
  }

  createFlag(flagName) {
    return new Flag(flagName);
  }

  setFlagValue(flag, value) {
    if (flag) {
      flag.value = value;
    }
  }

  parseFlagValues() {
    for (const flagName in this.flags) {
      const flag = this.flags[flagName];
      const value = flag.value;

      if (Array.isArray(value)) {
        flag.value = this.parseArrayValues(value);
      } else if (typeof value === 'string' && /^\d+$/.test(value)) {
        flag.value = this.parseNumberValue(value);
      }
    }
  }

  parseArrayValues(array) {
    return array.map(this.parseNumberValueIfPossible);
  }

  parseNumberValueIfPossible(val) {
    return /^\d+$/.test(val) ? parseInt(val, 10) : val;
  }

  parseNumberValue(val) {
    return parseInt(val, 10);
  }
}
