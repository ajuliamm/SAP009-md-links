const {handleErrorFetch, handdleErrorFile, handleENOENT} = require('./erro');
const { read } = require('./fileSystem.js');
const { validateFunction, getLinks} = require('./optionsLinks')



const mdLinks = (pathFile, option) => {
 
  return new Promise((resolve, reject) => {
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
              }).catch(reject)
            });
          }
    })
    .catch(reject)
})
}

module.exports = mdLinks;