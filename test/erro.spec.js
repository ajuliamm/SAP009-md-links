const {handleErrorFetch, handdleErrorFile, MSG_LINK_ERROR, MSG_LINK_NOT_FOUND} = require('../src/erro.js');

it('handleErrorFetch deve retornar uma mensagem para link não encontrado', () => {
    const mensagem = handleErrorFetch({
        cause:{
            code: 'ENOTFOUND',
        }
    });
    expect(mensagem).toEqual(MSG_LINK_NOT_FOUND);
})
it('handleErrorFetch deve retornar uma mensagem generica de erro no link', () => {
    const mensagem = handleErrorFetch({cause:{}});
    expect(mensagem).toEqual(MSG_LINK_ERROR);
})
it('handleErrorFile deve retornar um erro quando um arquivo está vazio', () => {
    const file = 'qualquernome'
    const erro = handdleErrorFile(file)
    expect(erro.message).toEqual(expect.stringContaining(file));

})