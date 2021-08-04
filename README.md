# passgen

## Introduction
A Simple Password Generator. Run from the command line. 

Create a random password of capital letters, lowercase letters, numbers and symbols. 
Generated password copies to clipboard by default.
Specify the length of the password. 
Options for no numbers or no letters. 
Option to munge user generated pass phrase. 
Option to save password to passwords.txt file with optional label.

## Technologies
Project is created with:
- node.js
- chalk 4.1.2
- clipboardy 2.3.0 
- commander 8.1.0

## Installation
To install this app, cd into its saved directory and run:

```
$ npm i
```

If you wish to run this app from any directory, run:

```
$ npm link
```

You can unlink in the future using: 

```
$ npm unlink
```

## Run
To run this app, if you ran the link command run from any directory:
```
$ passgen
```

Or from its saved directory, run:
```
$ node index.js
```

This app has the following options:
```
Options:
  -V, --version                 output the version number
  -l, --length <number>         length of password (default: "8")
  -m, --munge <pass phrase...>  receive a munged password given a pass phrase
  -s, --save [label]            save password to passwords.txt with optional label
  -nn, --no-numbers             remove numbers
  -ns, --no-symbols             remove symbols
  -h, --help                    display help for command
```
`--munge` can take multiple arguments. All strings will be concatinated and spaces will be removed.

## Acknowledgements
This project started as a node.js tutorial by Traversy Media. See their <a href="https://www.youtube.com/watch?v=3Xx83JAktXk&ab_channel=TraversyMedia" target="_blank">video</a>.

### TODOs
- [x] add no number/symbol funtionality to 'mungePassword' function
- [x] add a site option and add it to the save file


