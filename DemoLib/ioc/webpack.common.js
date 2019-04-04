const path = require('path');
module.exports = {
  mode:"development",
  //mode:"production",

  //entry: ['./src/index.ts'],
  entry: path.join(__dirname,"src","index.ts"),

  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};