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

const readingFiles = () => {
    fs.readFile('./folder/FILE.md', 'utf8', (err, data) => {
        console.log(data)
    })
    
}
readingFiles()