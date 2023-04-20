import InputParser from './inputParser.js';
import FlagParser from './flagParser.js';
import Output from './output.js';

let input, output;

// input = '--foo';
input = '--number 222';
// input = `["--numbers", [1, 2, 3]]`;
// input = '--foo bar baz hey --random --number 4 5 --random2 hey';
// input = `["--foo", ["bar", "baz", "hey"], "--random", "--number", [4, 5], "--random2", ["hey"]]`;

const parse = userInput => {
  const parsedInput = new InputParser(userInput).parse();
  const parsedFlags = new FlagParser(parsedInput).parseFlags();
  output = new Output(parsedFlags).getOutput();

  console.clear();
  console.log('User input: ', userInput);
  console.log('Parsed input: ', parsedInput);
  console.log('Parsed flags: ', parsedFlags);
  console.log('\n\n Object output: \n\n', output.object);
  console.log('\n\n String output: \n\n', output.string);
};

if (typeof window === 'undefined') parse(input);

export { parse, output };
