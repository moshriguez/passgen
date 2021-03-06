const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePassword = (password, site) => {
    let label = site
    if (Array.isArray(site)) {
        label = site.join(' ')
    }
    const text = typeof label === 'string' ? `${label}: ${password}` : password
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
        fs.write(id, text + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to password.txt'))
            })
        })
    }) 
}

module.exports = savePassword