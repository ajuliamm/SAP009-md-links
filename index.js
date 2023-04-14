const fs = require('fs');
const chalk = require('chalk');

const mdLinks = (pathFile) => {

    return new Promise((resolve, reject) => {

        if (fs.statSync(pathFile).size === 0 || !fs.existsSync(pathFile)) {
            //console.log(chalk.red('\u2717'), `O arquivo está vazio ou não existe`)
            //return;
            reject(`${chalk.red('\u2717')} O arquivo está vazio ou não existe`)
        } 
        else {

            fs.readFile(pathFile, 'utf8', (abacate, data) => {

                const regexLink = /\[\w+.\w+\]\(\w+.+\)/gmi;
                const matchLinks = data.match(regexLink);
                const arrayLinks = matchLinks.map(link => {

                    const removePunctuation = link.replace(')', '').replace('[', '')
                    const splitExpression = removePunctuation.split('](');

                    const objLinks = {
                        href: splitExpression[1],
                        text: splitExpression[0],
                        file: pathFile,
                    }
                    return objLinks;

                    //console.log(chalk.green('\u2714'), chalk.grey(objLinks.file), chalk.green(objLinks.href), chalk.grey(objLinks.text))
                })
                resolve(arrayLinks)
                
            })
        }

    })
}


module.exports = mdLinks;