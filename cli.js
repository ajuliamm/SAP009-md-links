#!/usr/bin/env node 
const chalk = require('chalk');
const mdLinks = require("./index");

mdLinks(process.argv[2] )
    .then(result => {
 
        const option = process.argv[3]

        if(option === '--validate'){
        console.log('entrou no validate')
        result.forEach(element=>{
            fetch(element.href)
            .then(objlink => {
                let ok;
                if(objlink.ok){
                    ok = 'ok'
                }
                else{
                    ok = 'fail'
                }
                console.log(chalk.green('\u2714'), chalk.grey(element.file), chalk.green(element.href), ok, objlink.status, chalk.grey(element.text))
            })
            .catch(err => {
                console.error(err)
            })
        })
        
        }
        else if(option === '--stats'){
            console.log('entrou no stats')
        }
        else if(!option){
            result.forEach(element => {
                console.log(chalk.green('\u2714'), chalk.grey(element.file), chalk.green(element.href), chalk.grey(element.text))
            });
            
        }else{
            console.log(`Comando inválido.`)
        }

})
.catch(error => {
    console.log('veio para o catch')
    console.error(error)
})



