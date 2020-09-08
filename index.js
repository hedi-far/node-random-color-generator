const randomColor = require('randomcolor');
const createColor = require('my-colors');

let color = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3],
});

const coloredOutput = createColor(color);

const finalOutput = coloredOutput(`
##############################
##############################
##############################
#########           ##########
######### ${color}   ##########
#########           ##########
############################## 
##############################
##############################
`);

console.log(finalOutput);
