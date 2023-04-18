#!/usr/bin/env node 
const chalk = require('chalk');
const mdLinks = require("./index");


mdLinks(process.argv[2] )
    .then(result => {
 
        const option = process.argv[3]

        if(option === '--validate'){
        result.forEach(element=>{
            fetch(element.href)
            .then(objlink => {
                let ok;
                let icon;
                if(objlink.ok){
                    ok = chalk.green('OK')
                    icon = chalk.green('\u2714')
                }
                else{
                    ok = chalk.red('FAIL')
                    icon = chalk.red('\u2717')
                }
                console.log(icon, chalk.grey(element.file), chalk.white(element.href), ok, chalk.white(objlink.status), chalk.grey(element.text))
            })
            .catch(erro => {
                if(erro.cause.code ==='ENOTFOUND'){
                    const erroMessage = 'Link não encontrado';
                    console.log(chalk.red('\u2717'), chalk.grey(element.file), chalk.white(element.href), chalk.red(erroMessage), chalk.grey(element.text));
                }
                else{
                    const erroMessage = 'Erro no link';
                    console.log(chalk.red('\u2717'), chalk.grey(element.file), chalk.white(element.href), chalk.red(erroMessage), chalk.grey(element.text));
                }
                
            })
        });
        
        }
        else if(option === '--stats'){
            let hrefList = [];
            result.forEach(element => {
                hrefList.push(element.href)
            })
            //console.log(hrefList)
            const uniqueLinks =  new Set(hrefList)
            console.log('Total: ',hrefList.length)
            console.log('Unique: ',uniqueLinks.size) 

            if( process.argv[4] === '--validate'){
                
            }
       
        
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
  
    if(error.code ==='ENOENT'){
        console.log(`${chalk.red('\u2717')} Não existe tal arquivo ou diretório`)
    }
})

//extensão
//arquivo sem link
//arquivo não encontrado no diretório
//link não encontrado






