'use strict';

const fs = require('fs');
/**
 * Exported function that sends the loop function into loop.js
 * @param path
 * @param callback
 * 
 */
module.exports = function(path, callback){
  let code = `
'use strict';
let array = ['John', 'Billy', 'Aaron'];
array.forEach(person => {console.log(person);});
`;
  writeToFile(path, code, callback);
};

const writeToFile = function(path, code, callback) {
  let characters = code.split('');
  fs.writeFile(path, '', (err,data) => {
    if(err) { callback(err); }
    else { 
      characters.forEach(char => {
        fs.appendFile(path, char, (err, data) => {
          if(err) { callback(err); }
          else { callback(undefined, data); }
        });
      });
    }
  });
};

// Code I was testing out
// 'use strict';

// const fs = require('fs');

// module.exports = function(path, callback){
//   let code = `
// 'use strict';
// let array = ['John', 'Billy', 'Aaron'];
// array.forEach(person => {console.log(person);});
// `;
//   writeToFile(path, code, callback);
// };

// const writeToFile = function(path, code, callback) {
//   let buffer = Buffer.from(code);
//   fs.writeFile(path, '', (err,data) => {
//     if(err) { callback(err); }
//     else {
//       let string = '';
//       buffer.forEach(bit => {
//         string += String.fromCharCode(bit);
//       });
//       fs.appendFile(path, string.charCodeAt(0), (err, data) => {
//         if(err) { callback(err); }
//         else { callback(undefined, data); }
//       });
//     }
//   });
// };
