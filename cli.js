#!/usr/bin/env node
const chalk = require('chalk');
const mdLinks = require("./src/md-links.js");
const { statsFunction } = require('./src/optionsLinks.js')


const option = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats')
};

const showStats = (arrayLinks) => {
   
        statsFunction(arrayLinks)
        .then(objStats =>{
             console.log('Total: ', objStats.total);
             console.log('Unique: ', objStats.unique);

             if (process.argv[4] === '--validate') {
                 console.log('Broken: ', objStats.broken);
             }
        })
}

const showValidate = (arrayLinks) => {
    arrayLinks.forEach(objlink => {
        let ok;
        let icon;
        if(objlink.ok){
            ok = chalk.green('OK');
            icon = chalk.green('\u2714');
        }
        else{
            ok = chalk.red('FAIL');
            icon = chalk.red('\u2717');
        }
        console.log(icon, chalk.grey(objlink.file), chalk.white(objlink.href), ok, chalk.white(objlink.status), chalk.grey(objlink.text))
    })
}

const showLinksFile = (arrayLinks) => {
    arrayLinks.forEach(element => {
        console.log(chalk.green('\u2714'), chalk.grey(element.file), chalk.green(element.href), chalk.grey(element.text));
    });
}

mdLinks(process.argv[2], option)
.then(result => {

    if (option.stats) {
        showStats(result);
    }
    else if (option.validate) {
        showValidate(result);
    }
    else if (!option.validate) {
        showLinksFile(result);
    } else {
        console.log(`Comando inválido.`);
    }
})
.catch(erro => {
    //console.log('veio para o catch');

    if (erro.code === 'ENOENT') {
        console.log(`${chalk.red('\u2717')} Não existe tal arquivo ou diretório`);
    }
    console.log(erro.message)
})




