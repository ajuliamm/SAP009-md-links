# Markdown Links


## Resumo do projeto

Este projeto foi desenvolvido no Bootcamp de Desenvolvimento Web da Laboratória, onde foi criado uma ferramenta de linha de comando (CLI) assim como
uma biblioteca em Javascript. Este é um projeto backend onde foi utilizado principalmente as tecnologias Node.Js para o desenvolvimento do código e o Jest para execução dos devidos testes. 

O principal objetivo dessa biblioteca é realizar leituras de arquivos do tipo Markdown dentro da sua máquina e verificar a presença de links nestes arquivos. Também é possível verificar se os links são válidos ou não e identificar as suas devidas estatísticas. Esta biblioteca é um executável que pode ser chamado tanto por linha de comando, como também pode ser importado com require para usá-lo em qualquer código. 


***
<div align="center">
  <br>
  <img align="center" alt="Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" /> 
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Javascript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <br>
  <br>

</div>
 
***


## Objetivos de aprendizagem


- JavaScript

- Node.js

- HTTP


## Considerações gerais

### 1) Instalação

O módulo poder ser **instalado** com o seguinte comando:

    npm install md-links
       

### 2) CLI (Command Line Interface - Interface de Linha de Comando)

O executável da aplicação pode ser executado da seguinte maneira através do **terminal**:

    md-links <path-to-file> [options]
    
<br>
O comportamento padrão ao colocar apenas o caminho do arquivo é devolver apenas os links e suas devidas descrições:

    md-links ./caminho-do-arquivo/arquivo.md

<div align="center">
 <img alt="terminal com links do arquivo" width="900" src="https://user-images.githubusercontent.com/93016620/235018375-7386acca-36aa-4d45-9a3f-477c82572706.png" /><br>
  
</div>
<br>

#### Options: `--validate` e `--stats`

Ao passar a opção `--validate`, o módulo faz uma requisição HTTP e verifica se o link funciona ou não retornando seu devido status:

    md-links ./caminho-do-arquivo/arquivo.md
<div align="center">
 <img alt="Terminal com links validados" width="900" src="https://user-images.githubusercontent.com/93016620/235023876-1c4976ba-985b-43ee-9194-c8c74c9c1c98.png" /><br>

</div>
<br>

Ao passar a opção `--stats` o output será um texto com estatísticas básicas sobre os links, informando a quantidade de links no arquivo e quantos são únicos:

    md-links ./caminho-do-arquivo/arquivo.md --stats

<div align="center">
 <img alt="Terminal com estatisticas dos links" width="900" src="https://user-images.githubusercontent.com/93016620/235024911-1d7b1a75-b89b-4327-9e52-73da3f0bbf9a.png" /><br>
 </div>
 <br>



Para obter estatísticas que necessitem dos resultados da validação pode combinar `--stats` e `--validate`:
         
      md-links ./caminho-do-arquivo/arquivo.md --stats --validate
   
<div align="center">
 <img alt="Terminal com links validados" width="900" src="https://user-images.githubusercontent.com/93016620/235025908-9a7d5cda-9a20-42c0-a2a7-2e18bdd29050.png" /><br>
 </div>
 <br>

***
## Fluxograma

O planejamento do desenvolvimento do projeto foi feito através do fluxograma abaixo:

<div align="center">
 <img alt="Fluxograma" width="550" src="https://user-images.githubusercontent.com/93016620/235028768-f1508eeb-a1f2-4388-a3da-8a74a6281eba.jpeg" /><br>
</div>
<br>

## Testes

A execução dos testes foi feito através do `Jest` e todos foram aprovados com 100% de cobertura. 

<div align="center">
 <img alt="Fluxograma" width="550" src="https://user-images.githubusercontent.com/93016620/235030796-11603a4f-1c93-4aef-aae4-831af63afc4e.png" /><br>
</div>





