const field = require('../index');

var Writer = field.Writer;
var Reader = field.Reader;

var w = new Writer();
w.int32(123);
var b = w.finish();
var r = new Reader(b);
let result = r.int32();
debugger;