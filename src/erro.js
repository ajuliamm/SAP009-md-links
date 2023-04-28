const chalk = require('chalk');

const MSG_EMPTY_FILE = 'Não há links nesse arquivo!';
const ERROR_FILE_NOT_MD = new Error('O arquivo fornecido não é .md');
const MSG_LINK_NOT_FOUND = 'Link não encontrado!';
const MSG_LINK_ERROR = 'Erro no link';


function handleErrorFetch(erro){
    if(erro.cause.code ==='ENOTFOUND'){
        const msgError = MSG_LINK_NOT_FOUND;
        return msgError;
    }
    else{
        const msgError = MSG_LINK_ERROR;
        return msgError;
    }
}


function handdleErrorFile(file){

    const msg = chalk.red('\u2717') + ' ' + chalk.grey(file) + ': ' + chalk.red(MSG_EMPTY_FILE);
    const erro = new Error(msg);
    return erro;
}
module.exports = { 
    handleErrorFetch, 
    handdleErrorFile,
    ERROR_FILE_NOT_MD,
    MSG_LINK_NOT_FOUND,
    MSG_LINK_ERROR,
}

