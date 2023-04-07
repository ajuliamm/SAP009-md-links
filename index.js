// //este arquivo deve exportar a função mdLinks.
// function init (){
//  console.log('FUNÇÃO MD-LINKS')
// };
// module.exports = init;

// function lona ( numero) {
//     console.log(numero)
//     if( numero > 0){
//         lona(numero - 1)
//     }
// }
// lona(10)

const fs = require('fs')

const mdLinks = (pathFile) => {
    fs.readFile(pathFile, 'utf8', (err, data) => {

        const regexLink = /\[\w+.\w+\]\(\w+.+\)/gmi;

        const matchLinks = data.match(regexLink);

        matchLinks.forEach(link => console.log(link))
    })
    
}
mdLinks('README.md')