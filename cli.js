#!/usr/bin/env node 

const mdLinks = require("./index")

mdLinks(process.argv[2] )



//--Validate
const option = process.argv[3]
console.log(option)

if(option === '--validate'){
 console.log('entrou no validate')
}
else if(option === '--stats'){
    console.log('entrou no stats')
}
