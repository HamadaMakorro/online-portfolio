// import resume from './Resume.resource'
let fs = require('fs')

fs.readFile('./Resume.resource.js', 'utf8', function( error, data ) {
  data = (JSON.stringify(data))
  console.log('data: ', data)
  fs.writeFile('resume.resource.json', data, function( error, data ){
  })
}) 