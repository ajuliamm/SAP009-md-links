# Markdown Links - ferramenta de linha de comando (CLI) e sua biblioteca.

Quarto projeto desenvolvido para o bootcamp da [@Laboratória](https://www.laboratoria.la/br) O projeto Markdown Links tem como foco BackEnd (NodeJS e JavaScript) e identifica links em arquivos markdown e seus respectivos status https. Pode ser executado através de CLI.

***
<div align="center">
 
  <br>
  <br>
  <img align="center" alt="Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" /> 
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <br>
  <br>
  
</div>
 
***

## Índice

* [1. Prefácio](#1-prefacio) 🗒️
* [2. Fluxograma](#2-fluxograma) 📄
* [3. Instalação](#3-Instalação) 🔽
* [4. Terminal e seus comandos](#4-Terminal-e-seus-comandos)💻
* [5. Testes](#5-testes) 📊
* [6. Checklists de Objetivos Alcançados](#6-checklist-de-objetivos-alcançados) 🏆

***

## Prefácio

Markdown é usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos com este formato em qualquer repositório (começando pelo tradicional README.md). Os arquivos Markdown normalmente contém links que podem estar quebrados, ou que já não são válidos, prejudicando muito o valor da informação que está ali.

Nesse projeto, criou-se uma ferramenta, usando Node.js, que le e analise arquivos no formato Markdown, para verificar os arquivos que contenham links e mostrar algumas estatísticas. Neste projeto, foi criado uma ferramenta de linha de comando (CLI) assim como a sua própria biblioteca (library) em Javascript usando o Node.js.

## Fluxograma 

<div align="center">
 <img alt="fluxograma" width="550" src="https://user-images.githubusercontent.com/30864314/233381730-1e9bc58f-c616-45fe-8811-75156a51cf0c.png" /><br>
  Fluxograma de estudos e tomada de decisões.
</div>

***
## Instalação

*  `npm install md-links-analeticia`

***
## Terminal e seus comandos
O usuário que utilizar a ferramenta desenvolvida, poderá localizar os links em um arquivo de interesse com o comando abaixo:
* `md-links caminho-do-arquivo` </br>
  </br><img alt="Ferramenta utilizada no caminho de arquivo ./folder/arquivo.md" width="850" src="https://user-images.githubusercontent.com/30864314/234978996-f6188a16-c883-4d90-9588-1de94dd23d71.png" /><br>


A segunda possibilidade de uso é inserir o comando --validate após o caminho do arquivo, para que assim a ferramenta informe os links que estão com erros.
* `md-links caminho-do-arquivo --validate` </br>

  </br><img alt="Exemplo da funcionalidade --validate" width="850" src="https://user-images.githubusercontent.com/30864314/234980216-6f70014b-01d5-476b-a074-116069da493a.png" /><br>

A terceira funcionalidade, é verificar informações resumidas sobre os links, acrescentando o comando --stats:
* `md-links caminho-do-arquivo --stats` </br>
  </br><img alt="Exemplo da funcionalidade --stats" width="850" src="https://user-images.githubusercontent.com/30864314/234982314-546f4234-56c8-4c32-b41d-6f818a069077.png" /><br>

Também é possível utilizar as duas opções acima, juntas:
* `md-links caminho-do-arquivo --stats --validate` </br>
</br><img alt="Exemplo da funcionalidade --stats" width="850" src="https://user-images.githubusercontent.com/30864314/234982693-e24db545-29f1-42fd-96a9-7b49a1132be2.png" /><br>

A ferramenta está apta a tratar os erros, exemplo:
1) O usário digita um arquivo sem extensão .md:
* `md-links caminho-do-arquivo-semMd` </br>
2) O usuário insere um arquivo vazio:
* `md-links caminho-do-arquivo-vazio` </br>

</br><img alt="Exemplo de tratativas de erros" width="850" src="https://user-images.githubusercontent.com/30864314/234984506-bb1bba85-4dfe-4d55-b42f-d51534ae079e.png" /><br>

***
## Testes

A aplicação foi finalizada com 100% de cobertura nos testes:
</br><img alt="Testes realizados" width="850" src="https://user-images.githubusercontent.com/30864314/234985111-987b3567-60b7-4795-b2c6-737ba93f7c94.png" /><br>

***
## Checklists de Objetivos Alcançados 🏆

- [:star2:] Possui CLI.
- [:star2:] É instalável.
- [:star2:] Passa pelo linter.
- [:star2:] Passa pelos testes (npm test).
- [:star2:] Inclui fluxograma de estudos e tomada de decisões no README.md.
- [:star2:] Inclui uma definição de produto clara e informativa no README.md.
- [:star2:] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e branches.
- [:star2:] Package.json: deve possuir nome, versão, descrição, autor, licença, dependências e scripts (pretest, test e etc).

