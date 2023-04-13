const fs = require('fs');
const chalk = require('chalk');

const mdLinks = (pathFile) => {

    if(fs.statSync(pathFile).size === 0 || !fs.existsSync(pathFile)){
        console.log(chalk.red('\u2717'), `O arquivo está vazio ou não existe`)
        return;
    }

    fs.readFile(pathFile, 'utf8', (err, data) => {

        const regexLink = /\[\w+.\w+\]\(\w+.+\)/gmi;

        const matchLinks = data.match(regexLink);

        matchLinks.forEach(link => {
           
            const removePunctuation = link.replace(')','').replace('[','')
            const splitExpression = removePunctuation.split('](')

            const objLinks = {
                href: splitExpression[1],
                text: splitExpression[0],
                file: pathFile,
            }

            accessHTTP(objLinks.href)

           console.log(chalk.green('\u2714'), chalk.grey(objLinks.file), chalk.green(objLinks.href), chalk.grey(objLinks.text))
        })
    })
    
}

const accessHTTP = (url) => {
    fetch(url)
    .then(response => {
        console.log(url)
        console.log(response.status)
        console.log(response.ok)
    })
    .catch(err => {
        console.error(err)
        console.error(err.code)
    })

}

module.exports = mdLinks;