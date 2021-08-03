#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

const createPassword = require('./utilities/createPassword')
const savePassword = require('./utilities/savePassword')
const log = console.log

program.version('1.0.0').description('Simple Password Generator')


.option('-l, --length <number>', 'length of password', '8')
.option('-s, --save', 'save password to passwords.txt')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
.parse()

const { length, save, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// save generated password
if (save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))

