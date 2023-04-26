const {handleErrorFetch, handdleErrorFile, handleENOENT} = require('./erro');
const { read } = require('./fileSystem.js');

const getLinks = (fileData) => {
  return new Promise((resolve) => {
    const textFile = fileData.data;
    const regexLink = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const matchLinks = textFile.match(regexLink);
    
    if(matchLinks !== null){
        const arrayLinks = matchLinks.map(link => {
          const removePunctuation = link.replace(/.$/, '').replace(/^./, '')
          const splitExpression = removePunctuation.split('](');
                        

          const objLinks = {
            href: splitExpression[1],
            text: splitExpression[0],
            file: fileData.file,
          };
         return objLinks;

        })
        resolve(arrayLinks);
    }else{
        const message = 'Não há links no arquivo ou o arquivo está vazio!';
        handdleErrorFile(message, fileData.file);
    }
  })    
}

const validateFunction = (arrayLinks) => {
    return Promise.all(
        arrayLinks.map(element=>{
        return fetch(element.href)
        .then(objlink => {
            // eslint-disable-next-line
            const objLinkFetch = {...element, status: objlink.status, ok: objlink.ok};
            return objLinkFetch;
        })
        .catch(erro =>  ({...element, status: handleErrorFetch(erro), ok: false}));
    }));
}

const mdLinks = (pathFile, option) => {
 
  return new Promise((resolve) => {
    read(pathFile).then(fileContent => {
        if(!Array.isArray(fileContent)){
          getLinks(fileContent).then(linksObj => {

            if(!option.validate){

                resolve(linksObj);
                }
            else{
                validateFunction(linksObj)
                .then(arrayLinkFetchResolved => {
                        resolve(arrayLinkFetchResolved);
                })    
            }
          })
        }else {
            fileContent.forEach((objContent) => {
              getLinks(objContent).then((linksObj) => {
                resolve(linksObj);
              });
            });
          }
    })
    .catch(erro =>{
      const error = handleENOENT(erro)
      console.log(error)
    })    

})
}

module.exports = mdLinks;