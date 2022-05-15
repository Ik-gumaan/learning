const path=require('path');

console.log('__filename',__filename);
console.log('__dirname',__dirname);

var pathObj =path.parse(__filename);

console.log('pathObj',pathObj);