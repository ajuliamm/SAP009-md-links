const { handdleErrorFile, handleErrorFetch } = require('./erro.js')

const statsFunction = (arrayLinks) => {
    return new Promise((resolve)=>{
    let hrefList = [];
    let broken = 0;
    arrayLinks.forEach(element => {
        hrefList.push(element.href)
        if(element.ok === false){
            broken++;
        };
    });

    const uniqueLinks = new Set(hrefList);

    const objStats = {
        total: hrefList.length,
        unique: uniqueLinks.size,
        broken: broken,
    }
    resolve(objStats)
    })


}

const getLinks = (fileData) => {
    return new Promise((resolve, reject) => {
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

          // reject(handdleErrorFile(fileData.file))
        const message = 'Não há links no arquivo ou o arquivo está vazio!';
        handdleErrorFile(fileData.file);
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
module.exports = {statsFunction, validateFunction, getLinks};