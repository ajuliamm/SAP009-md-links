const chalk = require('chalk');
const handleErrorFetch = (erro) => {
    if(erro.cause.code ==='ENOTFOUND'){
        const erroMessage = 'Link não encontrado';
        return erroMessage;
    }
    else if(erro.code === 'ENOENT'){
        const erroMessage = 'Não existe tal arquivo ou diretório';
        return erroMessage
    }
    else{
        const erroMessage = 'Erro no link';
        return erroMessage;
    }
}

const handleENOENT = (erro) => {
    if(erro.code === 'ENOENT'){
        const erroMessage = 'Não existe tal arquivo ou diretório';
        return erroMessage
    }
}

const handdleErrorFile = (message, file) =>{
    console.log(chalk.red('\u2717'),chalk.grey(file),':',chalk.red(message))
}
module.exports = { handleErrorFetch, handdleErrorFile, handleENOENT}

