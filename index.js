const randomColor = require('randomcolor');
const createColor = require('my-colors');

const color = randomColor({
  hue: process.argv[2], //color
  luminosity: process.argv[3], // light, dark
});

const coloredOutput = createColor(color);

const finalOutput = coloredOutput(
  `##############################
##############################
##############################
#########           ##########
#########  ${color}  ##########
#########           ##########
############################## 
##############################
##############################`,
);

console.log(finalOutput);
