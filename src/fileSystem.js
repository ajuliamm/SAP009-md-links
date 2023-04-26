const fs = require('fs');
const path = require('path');



function readDir(pathDir){ 
    return new Promise((resolve)=>{
    
        fs.promises.readdir(pathDir)
        .then((files) => {
            const reading = files.filter(file => {
                return path.extname(file) === '.md';
            })
            .map(file => {
                return readFile(path.resolve(pathDir, file));
            })
            return Promise.all(reading).then((result)=> {
                resolve(result);
            })
        })
    })  
}

const readFile = (file) => {

    return fs.promises.readFile(file).then(data => {
        return {file: file, data: data.toString()}
    });
}

const read = (pathFile) =>{
    return fs.promises.stat(pathFile)
    .then(statsObj => {
        if(statsObj.isDirectory(pathFile)){
            return readDir(pathFile);
        } else {
            return readFile(pathFile);
        }
    })
}



module.exports = {readDir, readFile, read}


 