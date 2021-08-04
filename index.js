#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

const createPassword = require('./utilities/createPassword')
const savePassword = require('./utilities/savePassword')
const mungePassword = require('./utilities/mungePassword')
const log = console.log

program.version('1.0.0').description('Simple Password Generator')


.option('-l, --length <number>', 'length of password', '8')
.option('-m, --munge <pass phrase...>', 'receive a munged password given a pass phrase')
.option('-s, --save [label]', 'save password to passwords.txt with optional label')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
.parse()

const { length, save, numbers, symbols, munge } = program.opts()

// Get generated password
let generatedPassword
if (munge) {
    generatedPassword = mungePassword(munge, numbers, symbols)
} else {
    generatedPassword = createPassword(length, numbers, symbols)
}

// save generated password
if (save) {
    savePassword(generatedPassword, save)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))

