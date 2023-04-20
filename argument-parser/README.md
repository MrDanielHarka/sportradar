# Argument Parser

## Live demo

[daniel.harka.com/sportradar/argument-parser](https://daniel.harka.com/sportradar/argument-parser/)

## The task

Choose one of the following input formats:
string like arguments "--foo bar"
array like arguments ["--foo", "bar"]

1. parse a simple flags
   given the following input:
   --foo
   the program should produce either a dictionary or a JSON object as follows:
   {"foo": true}

2. parse a composite flags
   given the following input:
   --foo bar
   the program should produce either a dictionary or a JSON object as follows:
   {"foo": "bar"}

3. parse a composite flags with integer values
   given the following input:
   --number 1
   the program should produce either a dictionary or a JSON object as follows:
   {"number": 1}

4. parse multiple flags at once
   given the following input:
   --foo --bar baz --number 1
   the program should produce either a dictionary or a JSON object as follows:
   {"bar": "baz", "foo": true, "number": 1}

5. try to support both string and array input formats
   within the same function or a new function one of your choice.

6. Example values
   --foo --bar baz --random --number 4 --random2
   ["--foo", "--bar", "baz", "--random", "--number", "4", "--random2"]

Right now if it receives on of the two arguments:

1.  --foo --bar baz --random --number 4 --random2
2.  ["--foo", "--bar", "baz", "--random", "--number", "4", "--random2"]
    Then it prints the following:
    { foo: true, bar: 'baz', random: true, number: 4, random2: true }

Now it only works with one value after the flags. (The words which start with "--").

I want to be able to give more arguments after the flag and it should print those values too.

These are the example input values:

1.  --foo bar baz hey --random --number 4 5 --random2 hey
2.  ["--foo", ["bar", "baz", "hey"], "--random", "--number", ["4", "5"], "--random2", "hey"]

And should output the following:

{ foo: [ 'bar', 'baz', 'hey'], random: true, number: [4, 5], random2: 'hey' }

Change the code accordingly, so it can receive more values after the flags.
