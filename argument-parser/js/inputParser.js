export default class InputParser {
  constructor(input) {
    this.input = input;
  }

  parse() {
    if (this.isStringArray(this.input)) {
      return this.parseStringArrayToArray(this.input);
    } else {
      return this.parseStringToArray(this.input);
    }
  }

  parseStringToArray(input) {
    const parts = input.split(/\s+/);
    const result = [];
    let currentOptionValues = [];

    const addOptionToArray = option => {
      if (currentOptionValues.length > 0) {
        result.push(currentOptionValues);
        currentOptionValues = [];
      }
      result.push(option);
    };

    for (let i = 0; i < parts.length; i++) {
      const currentPart = parts[i];

      if (currentPart.startsWith('--')) {
        addOptionToArray(currentPart);
      } else {
        currentOptionValues.push(currentPart);
      }
    }

    if (currentOptionValues.length > 0) {
      result.push(currentOptionValues);
    }

    return result;
  }

  isStringArray(input) {
    return input.charAt(0) === '[';
  }

  parseStringArrayToArray(string) {
    return JSON.parse(string);
  }

  convertStringToArray(string) {
    return JSON.parse(string);
  }
}
