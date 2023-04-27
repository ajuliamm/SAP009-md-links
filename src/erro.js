const chalk = require('chalk');

const MSG_EMPTY_FILE = 'Não há links nesse arquivo!';
const ERROR_FILE_NOT_MD = new Error('O arquivo fornecido não é .md');

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

const handdleErrorFile = (file) =>{

    const msg = chalk.red('\u2717') + ' ' + chalk.grey(file) + ': ' + chalk.red(MSG_EMPTY_FILE);
    console.log(msg)
}
module.exports = { handleErrorFetch, handdleErrorFile, handleENOENT, ERROR_FILE_NOT_MD}

