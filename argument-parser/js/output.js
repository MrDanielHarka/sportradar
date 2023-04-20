export default class Output {
  constructor(flags) {
    this.flags = flags;
  }

  getOutput() {
    const output = {};
    output.object = this.createObjectOutput(this.flags);
    output.string = this.createStringOutput(this.flags);
    return output;
  }

  createObjectOutput = flags => {
    const objectOutput = {};
    for (const flagName in flags) {
      const flag = flags[flagName];
      const value = flag.value;

      if (Array.isArray(value) && value.length === 1) {
        objectOutput[flagName] = value[0];
      } else {
        objectOutput[flagName] = value;
      }
    }
    return objectOutput;
  };

  createStringOutput(flags) {
    let stringOutput = '';
    for (const flagName in flags) {
      const flag = flags[flagName];

      stringOutput += `-${flagName}:\n`;

      if (Array.isArray(flag.value)) {
        flag.value.forEach(element => {
          stringOutput += `${element}\n`;
        });
      } else {
        stringOutput += `${flag.value}\n`;
      }
    }
    return stringOutput;
  }
}
