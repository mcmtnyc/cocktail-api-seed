/// Fill seedcocktails.json

import * as fs from 'fs'

// let fs = require('fs').promises //i want to use promises not callbacks
let url = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'
let parseResponse = response => response.json()
let writeJsonToFile = json => fs.promises.writeFile('./seedcocktails.json', JSON.stringify(json))
let handleError = error => console.error(error)

fetch(url)
  .then(parseResponse)
  .then(writeJsonToFile)
  .catch(handleError)