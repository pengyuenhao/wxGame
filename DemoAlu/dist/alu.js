(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["alu"] = factory();
	else
		root["alu"] = factory();
})("undefined" != typeof self ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/peng-field/dist/peng-field.min.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})("undefined" != typeof self ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__("./node_modules/ieee754/index.js")
var isArray = __webpack_require__("./node_modules/buffer/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/node_modules/isarray/index.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/peng-converter/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const converter = __webpack_require__("./node_modules/peng-converter/src/index.js");

module.exports = converter;

/***/ }),

/***/ "./node_modules/peng-converter/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {//预添加Long模块
if(!global["Long"]){
    global["Long"] = Long;
}
/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};

/*!
 * cv.js v6.8.8 (c) 2016, daniel wirtz
 * compiled thu, 19 jul 2018 00:33:25 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/cv.js for details
 */
(function(undefined){"use strict";(function prelude(modules, cache, entries) {

    // This is the prelude used to bundle cv.js for the browser. Wraps up the CommonJS
    // sources through a conflict-free require shim and is again wrapped within an iife that
    // provides a minification-friendly `undefined` var plus a global "use strict" directive
    // so that minification can remove the directives of each module.

    function $require(name) {
        var $module = cache[name];
        if (!$module)
            modules[name][0].call($module = cache[name] = { exports: {} }, $require, $module, $module.exports);
        return $module.exports;
    }

    var cv = $require(entries[0]);

    // Expose globally
    cv.util.global.cv = cv;

    // Be nice to CommonJS
    if (  true && module && module.exports)
        module.exports = cv;

})/* end of prelude */({1:[function(require,module,exports){
"use strict";
module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}

},{}],2:[function(require,module,exports){
"use strict";

/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};

},{}],3:[function(require,module,exports){
"use strict";
module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};

},{}],4:[function(require,module,exports){
"use strict";

module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}

},{}],5:[function(require,module,exports){
"use strict";
module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}

},{}],6:[function(require,module,exports){
"use strict";
module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}

},{}],7:[function(require,module,exports){
"use strict";

/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};

},{}],8:[function(require,module,exports){
"use strict";
var cv = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
cv.build = "minimal";
cv.Long = Long;
// Serialization
cv.Writer       = require(16);
cv.BufferWriter = require(17);
cv.Reader       = require(9);
cv.BufferReader = require(10);

// Utility
cv.util         = require(15);
cv.rpc          = require(12);
cv.roots        = require(11);
cv.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    cv.Reader._configure(cv.BufferReader);
    cv.util._configure();
}

// Set up buffer utility according to the environment
cv.Writer._configure(cv.BufferWriter);
configure();

},{"10":10,"11":11,"12":12,"15":15,"16":16,"17":17,"9":9}],9:[function(require,module,exports){
"use strict";
module.exports = Reader;

var util      = require(15);

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};

},{"15":15}],10:[function(require,module,exports){
"use strict";
module.exports = BufferReader;

// extends Reader
var Reader = require(9);
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = require(15);

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

},{"15":15,"9":9}],11:[function(require,module,exports){
"use strict";
module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = cv.roots["myroot"];
 */

},{}],12:[function(require,module,exports){
"use strict";

/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (cv.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = require(13);

},{"13":13}],13:[function(require,module,exports){
"use strict";
module.exports = Service;

var util = require(15);

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};

},{"15":15}],14:[function(require,module,exports){
"use strict";
module.exports = LongBits;

var util = require(15);

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};

},{"15":15}],15:[function(require,module,exports){
"use strict";
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = require(1);

// converts to / from base64 encoded strings
util.base64 = require(2);

// base class of rpc.Service
util.EventEmitter = require(3);

// float handling accross browsers
util.float = require(4);

// requires modules optionally and hides the call from bundlers
util.inquire = require(5);

// converts to / from utf8 encoded strings
util.utf8 = require(7);

// provides a node-like buffer pool in the browser
util.pool = require(6);

// utility to work with the low and high bits of a 64 bit value
util.LongBits = require(14);

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof global !== "undefined" && global
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/cv.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

},{"1":1,"14":14,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7}],16:[function(require,module,exports){
"use strict";
module.exports = Writer;

var util      = require(15);

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};

},{"15":15}],17:[function(require,module,exports){
"use strict";
module.exports = BufferWriter;

// extends Writer
var Writer = require(16);
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = require(15);

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

},{"15":15,"16":16}]},{},[8])

})();
//# sourceMappingURL=cv.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/base/BehaviorBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorAttribute", function() { return BehaviorAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeBehavior", function() { return UpgradeBehavior; });
/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
/* harmony import */ var _decorator_StatusDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/StatusDecorator.ts");
/* harmony import */ var _enum_StatusEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/enum/StatusEnum.ts");
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _util_Define__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/util/Define.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let BehaviorAttribute = class BehaviorAttribute extends _util_Define__WEBPACK_IMPORTED_MODULE_4__["TypeObject"] {
  update(delta) {}

  init() {}

  enable() {}

  on(stat, bool, caller, method) {
    this.root.value.on(stat, bool, caller, method.bind(this));
  }

};
BehaviorAttribute.CONST_CTCLE = 0.001;

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(Boolean, "@isInit")], BehaviorAttribute.prototype, "isInit", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(String, "@class")], BehaviorAttribute.prototype, "class", void 0);

__decorate([Object(_decorator_StatusDecorator__WEBPACK_IMPORTED_MODULE_1__["Status"])(_enum_StatusEnum__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].isDeath)], BehaviorAttribute.prototype, "isDeath", void 0);

__decorate([Object(_decorator_StatusDecorator__WEBPACK_IMPORTED_MODULE_1__["Status"])(_enum_StatusEnum__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].isIdle)], BehaviorAttribute.prototype, "isIdle", void 0);

BehaviorAttribute = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["Type"])("BehaviorAttribute")], BehaviorAttribute);

class UpgradeBehavior extends BehaviorAttribute {}

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "level")], UpgradeBehavior.prototype, "level", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "exp")], UpgradeBehavior.prototype, "exp", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "effect")], UpgradeBehavior.prototype, "effect", void 0);

/***/ }),

/***/ "./src/base/NumberBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNumber", function() { return CustomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integer", function() { return Integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float", function() { return Float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberAttribute", function() { return NumberAttribute; });
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomNumber_1;


let CustomNumber = CustomNumber_1 = class CustomNumber {
  constructor(v) {
    if (typeof v == "number") {
      this.value = v;
    } else {
      this.value = v.value;
    }
  }

  get value() {
    return this[CustomNumber_1.PrimitiveValue];
  }

  set value(v) {
    this[CustomNumber_1.PrimitiveValue] = this.constructor.Parse(v);
  }

  add(v) {
    return new this.constructor(this.value + v.value);
  }

  sub(v) {
    return new this.constructor(this.value - v.value);
  }

  mul(v) {
    return new this.constructor(this.value * v.value);
  }

  div(v) {
    return new this.constructor(this.value / v.value);
  }

  neg() {
    return new this.constructor(-this.value);
  }

  rec() {
    return new this.constructor(1 / this.value);
  }

  valueOf() {
    return this.value;
  }

  toString(radix) {
    return this.valueOf().toString(radix);
  }

  static Parse(v) {
    return v;
  }

};
CustomNumber.PrimitiveValue = "[[PrimitiveValue]]";
CustomNumber.MAX_VALUE = Number.MAX_VALUE;
CustomNumber.MIN_VALUE = Number.MIN_VALUE;
CustomNumber = CustomNumber_1 = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("CustomNumber")], CustomNumber);

let Integer = class Integer extends CustomNumber {
  static Parse(v) {
    return Math.floor(v);
  }

};
Integer.MAX_VALUE = 2147483648;
Integer.MIN_VALUE = -2147483648;
Integer = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("Integer")], Integer);

let Float = class Float extends CustomNumber {
  static Parse(v) {
    return Math.round(v * 0x100000) / 0x100000;
  }

};
Float.MAX_VALUE = 2147483648;
Float.MIN_VALUE = -2147483648;
Float = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("Float")], Float);

let NumberAttribute = class NumberAttribute {
  get value() {
    let base = this.base != null && this.base.value != null ? this.base.value : 0;
    let fixed = this.fixed != null && this.fixed.value != null ? this.fixed.value : 0;
    let addition = this.addition != null && this.addition.value != null ? this.addition.value : 0;
    let percent = this.percent != null && this.percent.value != null ? this.percent.value : 0;
    let result = fixed + (1 + percent) * (base + addition);

    if (this.isInteger && this.isInteger.value) {
      result = Math.floor(result);
    }

    if (this.isPositive && this.isPositive.value && result < 0) {
      result = 0;
    }

    return result;
  }

  toString() {
    return this.value;
  }

};

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(String, "name")], NumberAttribute.prototype, "name", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Number, "base")], NumberAttribute.prototype, "base", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Number, "percent")], NumberAttribute.prototype, "percent", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Number, "fixed")], NumberAttribute.prototype, "fixed", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Number, "addition")], NumberAttribute.prototype, "addition", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Boolean, "isNegative")], NumberAttribute.prototype, "isPositive", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Boolean, "isInteger")], NumberAttribute.prototype, "isInteger", void 0);

NumberAttribute = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("NumberAttribute")], NumberAttribute);


/***/ }),

/***/ "./src/base/SettleBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropData", function() { return PropData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventData", function() { return EventData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSettle", function() { return DataSettle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSettle", function() { return EventSettle; });
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PropData = class PropData {
  constructor() {
    let value = arguments[0];

    if (value != null) {
      if (typeof value == "number") {
        this.serial = value;
      } else {
        this.serial = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(value).getSerial();
      }
    }

    this.cache = [];
    this.children = [];
    this.detail = [];
  }

  clear() {
    this.cache = [];
    this.children = [];
    this.detail = [];
  }

};
PropData = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("PropData")], PropData);

let EventData = class EventData {
  constructor() {
    let value = arguments[0];

    if (value != null) {
      if (typeof value == "number") {
        this.serial = value;
      } else {
        this.serial = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(value).getSerial();
      }
    }

    this.children = [];
  }

  clear() {
    this.oldValue = null;
    this.newValue = null;
    this.children = [];
  }

};
EventData = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("EventData")], EventData);

let DataSettle = class DataSettle {
  constructor(data, index, serial) {
    this.index = index;
    this.serial = serial;
    this.data = data;
  }

};
DataSettle = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("DataSettle")], DataSettle);

let EventSettle = class EventSettle {
  constructor(event, index, serial) {
    this.index = index;
    this.serial = serial;
    this.event = event;
  }

};
EventSettle = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("EventSettle")], EventSettle);


/***/ }),

/***/ "./src/base/StatusBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusAttribute", function() { return StatusAttribute; });
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let StatusAttribute = class StatusAttribute extends Number {};
StatusAttribute = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("StatusAttribute")], StatusAttribute);


/***/ }),

/***/ "./src/base/TokenBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Token = class Token {};

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Number, "time")], Token.prototype, "time", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Number, "info")], Token.prototype, "info", void 0);

Token = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("Token")], Token);

let AccessToken = class AccessToken extends Token {};

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(String, "access_token")], AccessToken.prototype, "access_token", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(Number, "expires_in")], AccessToken.prototype, "expires_in", void 0);

AccessToken = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("AccessToken")], AccessToken);


/***/ }),

/***/ "./src/base/VectorBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2; });
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Vector2_1;

let Vector2 = Vector2_1 = class Vector2 {
  constructor() {
    switch (arguments.length) {
      case 0:
        this.x = 0;
        this.y = 0;
        break;

      case 1:
        let v = arguments[0];

        if (Array.isArray(v)) {
          return new Vector2_1(v[0], v[1]);
        }

        if (typeof v == "number") {
          return new Vector2_1(v, v);
        }

        if (v.x != null && v.y != null) {
          return new Vector2_1(v.x, v.y);
        }

        break;

      case 2:
        this.x = arguments[0];
        this.y = arguments[1];
        break;
    }
  }

  static fromNumberArray(v) {
    if (!v) return null;
    let n = [];
    let len = v.length;

    for (let i = 0; i < len; i++) {
      n.push(new Vector2_1(v[i], v[i + 1]));
    }

    return n;
  }

  static get Zero() {
    return new Vector2_1(0, 0);
  }

  static get One() {
    return new Vector2_1(1, 1);
  }

  static get Down() {
    return new Vector2_1(0, -1);
  }

  static get Left() {
    return new Vector2_1(-1, 0);
  }

  static get Right() {
    return new Vector2_1(1, 0);
  }

  static get Up() {
    return new Vector2_1(0, 1);
  }

  static Euler(from, to) {
    return from.euler(to);
  }

  static Angle(from, to) {
    return from.angle(to);
  }

  static Distance(from, to) {
    return from.distance(to);
  }

  static Cross(a, b) {
    return a.cross(b);
  }

  static Dot(a, b) {
    return a.dot(b);
  }

  toString() {
    return "(" + this.x + "," + this.y + ")";
  }

  toNumberArray() {
    return [this.x, this.y];
  }

  isZero() {
    return this.x == 0 && this.y == 0;
  }

  isOne() {
    return this.x == 1 && this.y == 1;
  }

  isNorm() {
    return this.sqrMagnitude() == 1;
  }

  get normalized() {
    let value = this.magnitude();

    if (value == 0) {
      return Vector2_1.Zero;
    }

    value = 1 / value;
    return new Vector2_1(this.x * value, this.y * value);
  }

  toNormalize() {
    let value = this.magnitude();

    if (value == 0) {
      return this;
    }

    value = 1 / value;
    this.x *= value;
    this.y *= value;
  }

  distance(v) {
    let dx = this.x - v.x;
    let dy = this.y - v.y;
    return Math.sqrt(dx * dx) + dy * dy;
  }

  euler(v) {
    let n = Math.atan2(v.y, v.x) - Math.atan2(this.y, this.x);

    if (n > Math.PI) {
      return n - Math.PI * 2;
    }

    if (n < -Math.PI) {
      return n + Math.PI * 2;
    }

    return n;
  }

  angle(v) {
    let rotate = this.euler(v);
    return rotate * 57.29577951;
  }

  scale(v) {
    this.x *= v;
    this.y *= v;
    return this;
  }

  add(v) {
    return new Vector2_1(this.x + v.x, this.y + v.y);
  }

  sub(v) {
    return this.add(v.neg());
  }

  neg() {
    return new Vector2_1(-this.x, -this.y);
  }

  mul(v) {
    return new Vector2_1(this.x * v.x, this.y * v.y);
  }

  div(v) {
    return new Vector2_1(this.x / v.x, this.y / v.y);
  }

  cross(v) {
    return this.x * v.y - v.x * this.y;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  sqrMagnitude() {
    return this.x * this.x + this.y * this.y;
  }

  magnitude() {
    return Math.sqrt(this.sqrMagnitude());
  }

};
Vector2 = Vector2_1 = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_0__["Type"])("Vector2")], Vector2);


/***/ }),

/***/ "./src/binder/DecoratorBinder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingConst", function() { return BindingConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorClass", function() { return DecoratorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binder", function() { return Binder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorBinding", function() { return DecoratorBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorBinder", function() { return DecoratorBinder; });
/* harmony import */ var _util_Prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util/Prototype.ts");

var BindingConst;

(function (BindingConst) {
  BindingConst.NULL = Symbol.for("NULL").toString();
})(BindingConst || (BindingConst = {}));

class DecoratorClass {
  get list() {
    return this._list;
  }

  set list(value) {
    this._list = value;
  }

}
class Binding {
  get key() {
    return this._key;
  }

  get value() {
    return this._value;
  }

  get name() {
    return this._name;
  }

  constructor(resolver) {
    this._resolver = resolver;
    this._key = null;
    this._value = null;
    this._name = null;
  }

  bind(key) {
    this._key = Binding.checkAbstract(key);
    return this;
  }

  to(value) {
    this._value = value;
    if (this._resolver != null) this._resolver(this);
    return this;
  }

  toName(name) {
    this._name = name;
    if (this._resolver != null) this._resolver(this);
    return this;
  }

  get isKeyConstructor() {
    return Binding.isConstructor(this._key);
  }

  get isValueConstructor() {
    return Binding.isConstructor(this._value);
  }

  static isConstructor(value) {
    if (typeof value !== "function") {
      return false;
    }

    if (!value.prototype) {
      return false;
    }

    return true;
  }

  static checkAbstract(key) {
    let constructorName;
    let prototype = key.prototype;

    if (prototype !== null && prototype !== undefined && prototype.constructorName !== null && prototype.constructorName !== undefined) {
      constructorName = prototype.constructorName;
    } else {
      constructorName = key;
    }

    return constructorName;
  }

}
class Binder {
  constructor() {
    this.init();
  }

  init() {
    this._bindings = new Map();
  }

  resolver(binding) {
    let key = binding.key;
    this.resolveBinding(binding, key);
  }

  resolveBinding(binding, key) {
    let bindingName = binding.name == null ? BindingConst.NULL : binding.name;
    let dict;

    if (this._bindings.has(key)) {
      dict = this._bindings.get(key);

      if (dict.has(bindingName)) {
        let existingBinding = dict.get(bindingName);

        if (existingBinding != binding) {
          if (!existingBinding.value) {
            dict.delete(bindingName);
          }
        }
      }
    } else {
      dict = new Map();

      this._bindings.set(key, dict);
    }

    if (dict.has(BindingConst.NULL) && dict.get(BindingConst.NULL) === binding) {
      dict.delete(BindingConst.NULL);
    }

    if (!dict.has(bindingName)) {
      dict.set(bindingName, binding);
    }
  }

  bind(key) {
    let binding = this.getRawBinding();
    binding.bind(key);
    return binding;
  }

  unbind(key, name) {
    let checkKey = Binding.checkAbstract(key);

    if (this._bindings.has(checkKey)) {
      let dict = this._bindings.get(checkKey);

      let bindingName;

      if (name) {
        bindingName = name;
      } else {
        bindingName = BindingConst.NULL;
      }

      if (dict.has(bindingName)) {
        dict.delete(bindingName);
      }
    }
  }

  getRawBinding() {
    return new Binding(this.resolver.bind(this));
  }

  getBinding(key, name) {
    if (this._bindings.has(key)) {
      let dict = this._bindings.get(key);

      if (!name) {
        name = BindingConst.NULL;
      }

      if (dict.has(name)) {
        return dict.get(name);
      } else {
        return null;
      }
    }
  }

  getBindingMap(key) {
    if (this._bindings.has(key)) {
      return this._bindings.get(key);
    }
  }

}
class DecoratorBinding extends Binding {
  get property() {
    return this._property;
  }

  toProperty(property) {
    this._property = property;
    if (this._resolver != null) this._resolver(this);
    return this;
  }

  to(value) {
    return super.to(value);
  }

  toName(name) {
    return super.toName(name);
  }

}
class DecoratorBinder extends Binder {
  init() {
    this._bindings = new Map();
    this._decoratorClassBufferMap = new Map();
  }

  has(key) {
    return this._bindings.has(key);
  }

  get(target) {
    if (!(target instanceof Object)) throw new Error("[原型必须是一个对象]" + target);
    let ctor = target;

    let injectClass = this._decoratorClassBufferMap.get(ctor);

    if (!injectClass) {
      let extendsList = _util_Prototype__WEBPACK_IMPORTED_MODULE_0__["Prototype"].GetPrototypeList(ctor);
      extendsList.push(ctor);
      injectClass = new DecoratorClass();
      let list = [];
      let dict;
      let that = this;
      let bindingMaps = [];

      for (let i = 0; i < extendsList.length; i++) {
        dict = that.getBindingMap(extendsList[i]);

        if (dict && dict.size > 0) {
          dict.forEach(function (inside) {
            bindingMaps.push(inside);
          });
        }
      }

      let inside;

      for (let i = 0; i < bindingMaps.length; i++) {
        inside = bindingMaps[i];

        if (inside && inside.size > 0) {
          let values = inside.values();

          for (let j = 0; j < inside.size; j++) {
            let binding = values.next();
            list.push(binding.value);
          }
        }
      }

      injectClass.list = list;

      this._decoratorClassBufferMap.set(ctor, injectClass);
    }

    return injectClass;
  }

  bind(key) {
    return super.bind(key);
  }

  getBinding(key, name) {
    return super.getBinding(key, name);
  }

  getRawBinding() {
    return new DecoratorBinding(this.resolver.bind(this));
  }

  resolver(binding) {
    super.resolver(binding);
  }

  resolveBinding(binding, key) {
    if (!binding.property) return;
    let bindingName = binding.name == null ? BindingConst.NULL : binding.name;
    let dict;

    if (this._bindings.has(key)) {
      dict = this._bindings.get(key);

      if (dict.has(bindingName)) {
        let insideDict = dict.get(bindingName);

        if (insideDict.has(binding.property)) {
          let existingBinding = insideDict.get(binding.property);

          if (existingBinding) {
            if (existingBinding != binding) {
              if (!existingBinding.value) {
                dict.delete(bindingName);
              }
            }
          }
        }
      }
    } else {
      dict = new Map();

      this._bindings.set(key, dict);
    }

    if (dict.has(BindingConst.NULL)) {
      let insideDic = dict.get(BindingConst.NULL);

      if (insideDic.has(binding.property)) {
        let existingBinding = insideDic.get(binding.property);

        if (binding.property === binding) {
          insideDic.delete(BindingConst.NULL);
        }
      }
    }

    let insideDict;

    if (!dict.has(bindingName)) {
      insideDict = new Map();
      insideDict.set(binding.property, binding);
      dict.set(bindingName, insideDict);
    } else {
      insideDict = dict.get(bindingName);

      if (!insideDict.has(binding.property)) {
        insideDict.set(binding.property, binding);
      }
    }
  }

  getBindingMap(key) {
    if (this._bindings.has(key)) {
      return this._bindings.get(key);
    }
  }

}

/***/ }),

/***/ "./src/binder/FieldBinder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldBinder", function() { return FieldBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldBinding", function() { return FieldBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayConverter", function() { return DelayConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayStructure", function() { return DelayStructure; });
/* harmony import */ var _DecoratorBinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/binder/DecoratorBinder.ts");
/* harmony import */ var _util_Delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/Delay.ts");
/* harmony import */ var _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");



class FieldBinder extends _DecoratorBinder__WEBPACK_IMPORTED_MODULE_0__["DecoratorBinder"] {
  bind(key) {
    return super.bind(key);
    ;
  }

  getRawBinding() {
    return new FieldBinding(this.resolver.bind(this));
  }

  get(target) {
    return super.get(target);
  }

  resolveBinding(binding, key) {
    super.resolveBinding(binding, key);
  }

}
class FieldBinding extends _DecoratorBinder__WEBPACK_IMPORTED_MODULE_0__["DecoratorBinding"] {
  toStructure(structure) {
    this.structure = structure;
    return this;
  }

  toIdentify(identity) {
    this.identity = identity;
    if (this._resolver != null) this._resolver(this);
    return this;
  }

  toProperty(propert) {
    return super.toProperty(propert);
  }

  to(value) {
    return super.to(value);
  }

}
class DelayConverter extends _util_Delay__WEBPACK_IMPORTED_MODULE_1__["Delay"] {
  get() {
    if (this.arg == null) return null;
    let tmp = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_2__["GetConverter"])(this.arg);

    if (tmp == null) {
      console.error("[无法找到编码规则]");
      tmp = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_2__["GetConverter"])(Object);
    }

    return tmp;
  }

}
class DelayStructure extends _util_Delay__WEBPACK_IMPORTED_MODULE_1__["Delay"] {
  get() {
    if (this.arg == null) return null;
    let tmp = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_2__["GetConverter"])(this.arg);

    if (tmp == null) {
      console.error("[无法找到编码规则]");
      tmp = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_2__["GetConverter"])(Object);
    }

    return tmp;
  }

}

/***/ }),

/***/ "./src/decorator/AttrDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST_AttrBinder", function() { return CONST_AttrBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attr", function() { return Attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrInject", function() { return AttrInject; });
/* harmony import */ var _base_NumberBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/base/NumberBase.ts");
/* harmony import */ var _SettleDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony import */ var _binder_DecoratorBinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/binder/DecoratorBinder.ts");
/* harmony import */ var _util_Define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/util/Define.ts");




const CONST_AttrBinder = new _binder_DecoratorBinder__WEBPACK_IMPORTED_MODULE_2__["DecoratorBinder"]();
function Attr(identifyName) {
  return function (target, propertName) {
    CONST_AttrBinder.bind(target.constructor).to(identifyName).toProperty(propertName);
  };
}
function AttrInject(inst, target) {
  if (!inst) return;
  if (!target) target = inst;
  let attributes = inst.value.attributes;
  if (!attributes) return;
  let decoratorClass = CONST_AttrBinder.get(target.value.constructor);

  if (!attributes.hasOwnProperty("__isInit__")) {
    Object.defineProperty(attributes, "__isInit__", {
      get: function () {
        return true;
      }
    });

    for (let i = 0; i < attributes.length; i++) {
      let prop = attributes[i].value;
      if (prop == null) continue;
      let name = prop.name.value;
      if (attributes.hasOwnProperty(name)) continue;
      Object(_util_Define__WEBPACK_IMPORTED_MODULE_3__["DefineProperty"])(attributes, name, _base_NumberBase__WEBPACK_IMPORTED_MODULE_0__["NumberAttribute"], i);
    }
  }

  for (let binding of decoratorClass.list) {
    Object.defineProperty(target.value, binding.property, {
      get: function () {
        let prop = attributes[binding.value];

        if (prop == null) {
          Object(_util_Define__WEBPACK_IMPORTED_MODULE_3__["DefineProperty"])(attributes, binding.value, _base_NumberBase__WEBPACK_IMPORTED_MODULE_0__["NumberAttribute"]);
          return null;
        } else {
          return prop.value;
        }
      },
      set: function (value) {
        let prop = attributes[binding.value];

        if (prop == null) {
          Object(_util_Define__WEBPACK_IMPORTED_MODULE_3__["DefineProperty"])(attributes, binding.value, _base_NumberBase__WEBPACK_IMPORTED_MODULE_0__["NumberAttribute"]);
          prop = attributes[binding.value];
        }

        if (value.name != null && value.name.value != null && value.name.value != binding.property) {
          console.warn("[警告属性名称不一致]" + value.name.value + "!=" + binding.property);
        }

        if (value.name == null) {
          value.name = Object(_SettleDecorator__WEBPACK_IMPORTED_MODULE_1__["GetSettler"])(binding.property, String);
        } else {
          value.name.value = binding.property;
        }

        prop.eq(value);
      }
    });
  }
}

/***/ }),

/***/ "./src/decorator/BehavDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST_behaviorBinder", function() { return CONST_behaviorBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Behav", function() { return Behav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorInject", function() { return BehaviorInject; });
/* harmony import */ var _StatusDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/StatusDecorator.ts");
/* harmony import */ var _AttrDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/AttrDecorator.ts");
/* harmony import */ var _base_BehaviorBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/base/BehaviorBase.ts");
/* harmony import */ var _TypeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _binder_DecoratorBinder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/binder/DecoratorBinder.ts");
/* harmony import */ var _util_Delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/util/Delay.ts");
/* harmony import */ var _util_Define__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/util/Define.ts");







const CONST_behaviorBinder = new _binder_DecoratorBinder__WEBPACK_IMPORTED_MODULE_4__["DecoratorBinder"]();
function Behav(value) {
  return function (target, propertName) {
    CONST_behaviorBinder.bind(target.constructor).to(new DelayString(value)).toProperty(propertName);
  };
}
function BehaviorInject(inst, target) {
  if (!inst) return;
  if (!target) target = inst;
  let behaviors = inst.value.behaviors;
  if (!behaviors) return;

  if (!behaviors.hasOwnProperty("__isInit__")) {
    Object.defineProperty(behaviors, "__isInit__", {
      get: function () {
        return true;
      }
    });

    for (let i = 0; i < behaviors.length; i++) {
      let type = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetTypeByValue"])(behaviors[i].value);
      let name = behaviors[i].value.class.value;

      if (name == null) {
        name = type;
        behaviors[i].value.class.value = type;
      }

      if (name == null || behaviors.hasOwnProperty(name)) continue;
      Object(_util_Define__WEBPACK_IMPORTED_MODULE_6__["DefineProperty"])(behaviors, name, _base_BehaviorBase__WEBPACK_IMPORTED_MODULE_2__["BehaviorAttribute"], i);
    }

    for (let i = 0; i < behaviors.length; i++) {
      let behavior = inst.value.behaviors[i];
      if (behavior == null) continue;
      behavior.value.root = inst;
      InteriorInject(behaviors, behavior);
      Object(_StatusDecorator__WEBPACK_IMPORTED_MODULE_0__["StatusInject"])(inst, behavior);
      Object(_AttrDecorator__WEBPACK_IMPORTED_MODULE_1__["AttrInject"])(inst, behavior);
      BehaviorInject(inst, behavior);
    }
  } else {
    InteriorInject(behaviors, target);
  }
}

function InteriorInject(inst, target) {
  if (!target.value.hasOwnProperty("__isInit__")) {
    Object.defineProperty(target.value, "__isInit__", {
      get: function () {
        return true;
      }
    });
    let decoratorClass = CONST_behaviorBinder.get(target.value.constructor);

    for (let binding of decoratorClass.list) {
      Object.defineProperty(target.value, binding.property, {
        get: function () {
          let prop = inst[binding.value.delay];

          if (prop == null) {
            Object(_util_Define__WEBPACK_IMPORTED_MODULE_6__["DefineProperty"])(inst, binding.value.delay, _base_BehaviorBase__WEBPACK_IMPORTED_MODULE_2__["BehaviorAttribute"]);
            return null;
          } else {
            return prop.value;
          }
        },
        set: function (value) {
          let prop = inst[binding.value.delay];

          if (prop == null) {
            Object(_util_Define__WEBPACK_IMPORTED_MODULE_6__["DefineProperty"])(inst, binding.value.delay, _base_BehaviorBase__WEBPACK_IMPORTED_MODULE_2__["BehaviorAttribute"]);
            prop = inst[binding.value];
          }

          prop.eq(value);
        }
      });
    }

    if (target.value.isInit.value == null) {
      target.value.isInit.value = true;
      target.value.init();
    }

    target.value.enable();
  }
}

class DelayString extends _util_Delay__WEBPACK_IMPORTED_MODULE_5__["Delay"] {
  get() {
    if (typeof this.arg == "function") {
      return Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetType"])(this.arg);
    } else {
      return this.arg;
    }
  }

}

/***/ }),

/***/ "./src/decorator/ConvertDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Convert", function() { return Convert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConverter", function() { return GetConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStructure", function() { return GetStructure; });
/* harmony import */ var _SettleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony import */ var _TypeDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/TypeDecorator.ts");


const CONST_ConvertMap = new Map();
function Convert(cls) {
  return function (target) {
    let converter = new target();
    converter.cls = cls;

    converter.getSerial = () => {
      return Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_1__["GetSerial"])(cls);
    };

    CONST_ConvertMap.set(cls, converter);

    converter.settler = (value, index, parent) => {
      if (index == null) index = 0;
      let settler = Object(_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["GetCtorOfSettler"])(cls);
      if (!settler) settler = Object(_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["GetCtorOfSettler"])(Object);
      let shell = new settler(value, index, parent);
      shell.serial = converter.getSerial();
      shell.cls = cls;
      shell.init();
      return shell;
    };
  };
}
function GetConverter(value) {
  let type = typeof value;

  switch (type) {
    case "number":
      return GetConverter(Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_1__["GetCtor"])(value));

    case "function":
      let prototype = value;
      let converter;
      let loop = 100;

      while (prototype != null && prototype != Object) {
        converter = CONST_ConvertMap.get(prototype);

        if (converter == null) {
          prototype = prototype.__proto__;
        } else {
          break;
        }

        if (loop-- <= 0) {
          console.error("[无法找到转换规则]");
          break;
        }
      }

      if (converter == null) {
        converter = CONST_ConvertMap.get(Object);
      }

      return converter;

    case "string":
      return GetConverter(Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_1__["GetCtor"])(value));

    default:
      console.error("[编码规则获取失败]");
      break;
  }
}
function GetStructure(value) {
  return GetConverter(value);
}

/***/ }),

/***/ "./src/decorator/FieldDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST_FieldBinder", function() { return CONST_FieldBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFieldList", function() { return GetFieldList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldParseShell", function() { return FieldParseShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldParse", function() { return FieldParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldJson", function() { return FieldJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldJsonShell", function() { return FieldJsonShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldToShell", function() { return FieldToShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldTo", function() { return FieldTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFromShell", function() { return FieldFromShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFrom", function() { return FieldFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "To", function() { return To; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToShell", function() { return ToShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "From", function() { return From; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromShell", function() { return FromShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parse", function() { return Parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseShell", function() { return ParseShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Json", function() { return Json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonShell", function() { return JsonShell; });
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-converter/index.js");
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_converter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/Util.ts");
/* harmony import */ var _TypeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _SettleDecorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony import */ var _binder_FieldBinder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/binder/FieldBinder.ts");
/* harmony import */ var _util_Exception__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/util/Exception.ts");







const CONST_FieldBinder = new _binder_FieldBinder__WEBPACK_IMPORTED_MODULE_5__["FieldBinder"]();
function GetFieldList(cls) {
  return CONST_FieldBinder.get(cls).list;
}
function Field(type, identifyName, structure = null) {
  return function (target, propertName) {
    FieldFunc(target, type, propertName, identifyName, structure);
  };
}
function FieldParseShell(value, cls, index, parent) {
  if (cls == null) {
    let type = value["@type"];
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(type);
  }

  let inst;

  if (!value) {
    inst = null;
  } else {
    inst = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["Ctor"])(cls);
  }

  let settler = Object(_SettleDecorator__WEBPACK_IMPORTED_MODULE_4__["GetSettler"])(inst, cls, index, parent);
  let list = GetFieldList(cls);

  for (let i = 0; i < list.length; i++) {
    let binding = list[i];
    let prop = value[binding.identity];
    let next;

    if (binding.structure.delay) {
      next = binding.structure.delay.parseShell(prop, binding.value.origin);
    } else {
      next = binding.value.delay.parseShell(prop, binding.value.origin);
    }

    next.parent = settler;
    next.index = i;
    inst[binding.property] = next;
  }

  return settler;
}
function FieldParse(value, cls) {
  if (value == null) return null;

  if (cls == null) {
    let type = value["@type"];
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(type);
  }

  if (value == null) return null;
  let inst = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["Ctor"])(cls);
  if (!inst) return null;
  let list = GetFieldList(cls);

  for (let i = 0; i < list.length; i++) {
    let binding = list[i];
    let prop = value[binding.identity];
    let next;

    if (binding.structure.delay) {
      next = binding.structure.delay.parse(prop);
    } else {
      next = binding.value.delay.parse(prop);
    }

    inst[binding.property] = next;
  }

  return inst;
}
function FieldJson(value, cls) {
  if (value == null) return null;

  if (cls == null) {
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(value);
  }

  let inst = {};
  if (!inst) return null;
  let list = GetFieldList(cls);

  for (let i = 0; i < list.length; i++) {
    let binding = list[i];
    let prop = value[binding.identity];
    let next;

    if (binding.structure.delay) {
      next = binding.structure.delay.json(prop);
    } else {
      next = binding.value.delay.json(prop);
    }

    inst[binding.property] = next;
  }

  return JSON.stringify(inst);
}
function FieldJsonShell(value, cls) {
  if (value == null || value.value == null) return null;

  if (cls == null) {
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(value.value);
  }

  if (value == null) return null;
  let inst = {};
  if (!inst) return null;
  let list = GetFieldList(cls);

  for (let i = 0; i < list.length; i++) {
    let binding = list[i];
    let prop = value.value[binding.identity];
    let next;

    if (binding.structure.delay) {
      next = binding.structure.delay.jsonShell(prop);
    } else {
      next = binding.value.delay.jsonShell(prop);
    }

    inst[binding.property] = next;
  }

  return JSON.stringify(inst);
}
function FieldToShell(writer, settle, cls) {
  if (settle == null || settle.value == null) throw _util_Exception__WEBPACK_IMPORTED_MODULE_6__["NullException"];

  if (cls == null) {
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(settle.value);
  }

  let list = GetFieldList(cls);
  let validArr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(list, writer, binding => {
    let prop = settle.value[binding.property];

    if (prop != null) {
      if (binding.structure.delay != null) {
        return true;
      } else {
        if (prop.value != null) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  });

  for (let i = 0; i < validArr.length; i++) {
    let binding = list[validArr[i]];
    let prop = settle.value[binding.property];

    if (binding.structure.delay) {
      binding.structure.delay.toShell(writer, prop, binding.value.origin);
    } else {
      binding.value.delay.toShell(writer, prop);
    }
  }
}
function FieldTo(writer, value, cls) {
  if (value == null) throw _util_Exception__WEBPACK_IMPORTED_MODULE_6__["NullException"];

  if (cls == null) {
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(value);
  }

  let list = GetFieldList(cls);
  let validArr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(list, writer, binding => {
    if (value[binding.property] != null) {
      return true;
    } else {
      return false;
    }
  });

  for (let i = 0; i < validArr.length; i++) {
    let binding = list[validArr[i]];
    let prop = value[binding.property];

    if (binding.structure.delay) {
      binding.structure.delay.to(writer, prop);
    } else {
      binding.value.delay.to(writer, prop);
    }
  }
}
function FieldFromShell(reader, cls, index, parent) {
  if (cls == null) {
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(reader.int32());
  }

  let settler = Object(_SettleDecorator__WEBPACK_IMPORTED_MODULE_4__["GetSettler"])(Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["Ctor"])(cls), cls, index, parent);
  let list = GetFieldList(cls);
  _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i) => {
    let binding = list[i];
    let next;

    if (isExist) {
      if (binding.structure.delay) {
        next = binding.structure.delay.fromShell(reader, binding.value.origin);
      } else {
        next = binding.value.delay.fromShell(reader, binding.value.origin);
      }
    } else {
      if (binding.structure.delay) {
        next = binding.structure.delay.settler(null);
      } else {
        next = binding.value.delay.settler(null);
      }
    }

    if (next != null) {
      next.parent = settler;
      next.index = i;
    }

    settler.value[binding.property] = next;
  });
  return settler;
}
function FieldFrom(reader, cls) {
  if (cls == null) {
    let serial = reader.int32();
    cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(serial);
  }

  let inst = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["Ctor"])(cls);
  if (!inst) throw Error("[未注册@Type的类必须重写编码规则函数]");
  let list = GetFieldList(cls);
  _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i) => {
    let binding = list[i];
    if (binding == null) debugger;
    let next;

    if (isExist) {
      if (binding.structure.delay) {
        next = binding.structure.delay.from(reader, binding.value.origin);
      } else {
        next = binding.value.delay.from(reader, binding.value.origin);
      }
    } else {
      next = null;
    }

    inst[binding.property] = next;
  });
  return inst;
}
function To(value, writer) {
  if (value == null) return null;
  if (writer == null) writer = new peng_converter__WEBPACK_IMPORTED_MODULE_0__["Writer"]();
  let cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(value);
  writer.int32(Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetSerial"])(cls));
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(cls);

  if (converter) {
    converter.to(writer, value);
  } else {
    console.error("[未知的编码规则]");
    return null;
  }

  return writer.finish();
}
function ToShell(value, writer) {
  if (value == null) return null;
  if (writer == null) writer = new peng_converter__WEBPACK_IMPORTED_MODULE_0__["Writer"]();
  let cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(value.value);
  writer.int32(Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetSerial"])(cls));
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(cls);

  if (converter) {
    converter.toShell(writer, value, cls);
  } else {
    console.error("[未知的编码规则]");
    return null;
  }

  return writer.finish();
}
function From(data, reader) {
  if (data == null || data.length == 0) return null;
  if (reader == null) reader = new peng_converter__WEBPACK_IMPORTED_MODULE_0__["Reader"](data);
  let serial = reader.int32();
  let ctor = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(serial);
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(ctor);

  if (converter != null) {
    return converter.from(reader, ctor);
  } else {
    console.error("[无法解码未知的类型]");
    return null;
  }
}
function FromShell(data, reader) {
  if (data == null || data.length == 0) return null;
  if (reader == null) reader = new peng_converter__WEBPACK_IMPORTED_MODULE_0__["Reader"](data);
  let serial = reader.int32();
  let ctor = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(serial);
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(ctor);

  if (converter != null) {
    return converter.fromShell(reader, ctor);
  } else {
    console.error("[无法解码未知的类型]");
    return null;
  }
}
function Parse(value) {
  let type = value["@type"];
  let ctor = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(type);
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(ctor);

  if (converter != null) {
    return converter.parse(value, ctor);
  } else {
    console.error("[无法解码未知的类型]");
    return null;
  }
}
function ParseShell(value) {
  let type = value["@type"];
  let ctor = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(type);
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(ctor);

  if (converter != null) {
    return converter.parseShell(value, ctor);
  } else {
    console.error("[无法解码未知的类型]");
    return null;
  }
}
function Json(value) {
  if (value == null) return null;
  let cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(value);
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(cls);

  if (converter) {
    return converter.json(value);
  } else {
    console.error("[未知的编码规则]");
    return null;
  }
}
function JsonShell(value) {
  if (value == null || value.value == null) return null;
  let cls = Object(_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtorByValue"])(value.value);
  let converter = Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_1__["GetConverter"])(cls);

  if (converter) {
    return converter.jsonShell(value);
  } else {
    console.error("[未知的编码规则]");
    return null;
  }
}

function FieldFunc(target, cls, propertName, identifyName, structure) {
  CONST_FieldBinder.bind(target.constructor).to(new _binder_FieldBinder__WEBPACK_IMPORTED_MODULE_5__["DelayConverter"](cls)).toStructure(new _binder_FieldBinder__WEBPACK_IMPORTED_MODULE_5__["DelayConverter"](structure)).toProperty(propertName).toIdentify(identifyName);
}

/***/ }),

/***/ "./src/decorator/SettleDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST_SettleMap", function() { return CONST_SettleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settle", function() { return Settle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCtorOfSettler", function() { return GetCtorOfSettler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettler", function() { return GetSettler; });
/* harmony import */ var _ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");

const CONST_SettleMap = new Map();
function Settle(cls) {
  return function (target) {
    CONST_SettleMap.set(cls, target);
  };
}
function GetCtorOfSettler(cls) {
  return CONST_SettleMap.get(cls);
}
function GetSettler(value, cls, index, parent) {
  return Object(_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls).settler(value, index, parent);
}

/***/ }),

/***/ "./src/decorator/StatusDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST_StatBinder", function() { return CONST_StatBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusInject", function() { return StatusInject; });
/* harmony import */ var _SettleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony import */ var _define_SettlerDefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/define/SettlerDefine.ts");
/* harmony import */ var _binder_DecoratorBinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/binder/DecoratorBinder.ts");
/* harmony import */ var _base_StatusBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/base/StatusBase.ts");




const CONST_StatBinder = new _binder_DecoratorBinder__WEBPACK_IMPORTED_MODULE_2__["DecoratorBinder"]();
function Status(status) {
  return function (target, propertName) {
    CONST_StatBinder.bind(target.constructor).to(status).toProperty(propertName);
  };
}
function StatusInject(inst, target) {
  if (!inst) return;
  if (!target) target = inst;
  let status = inst.value.status;
  let sClass = CONST_StatBinder.get(target.value.constructor);

  if (sClass.list.length != 0 && !status) {
    status = new _define_SettlerDefine__WEBPACK_IMPORTED_MODULE_1__["OperateArray"]();
    inst.value.status = status;
  }

  for (let binding of sClass.list) {
    let index = binding.value >> 5;
    let data = binding.value % 32;
    let decide = 1 << data;
    let stat = status[index];

    if (!stat) {
      stat = Object(_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["GetSettler"])(0, _base_StatusBase__WEBPACK_IMPORTED_MODULE_3__["StatusAttribute"], index, status);
      status[index] = stat;
    }

    Object.defineProperty(target.value, binding.property, {
      get: function () {
        if ((stat.value & decide) != 0) {
          return true;
        } else {
          return false;
        }
      },
      set: function (value) {
        if (value == true) {
          stat.add(decide);
        } else {
          stat.sub(decide);
        }
      }
    });
  }
}

/***/ }),

/***/ "./src/decorator/TypeDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST_CtorList", function() { return CONST_CtorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ctor", function() { return Ctor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCtor", function() { return GetCtor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSerial", function() { return GetSerial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSerialByValue", function() { return GetSerialByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetType", function() { return GetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCtorByValue", function() { return GetCtorByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTypeByValue", function() { return GetTypeByValue; });
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-converter/index.js");
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_converter__WEBPACK_IMPORTED_MODULE_0__);

const CONST_TypeMap = new Map();
const CONST_CtorList = [];
function Type(type) {
  return function (target) {
    TypeFunc(type, target);
  };
}

function TypeFunc(type, target) {
  target.type = type;
  CONST_TypeMap.set(type, target);
  target.serial = CONST_CtorList.length;
  CONST_CtorList.push(target);
}

function Ctor(value) {
  if (value == null) return null;
  let ctor;

  if (typeof value == "string") {
    ctor = CONST_TypeMap.get(value);
  } else {
    ctor = value;
  }

  if (!ctor) return null;
  return new ctor();
}
function GetCtor(value) {
  switch (typeof value) {
    case "number":
      return CONST_CtorList[value];

    case "string":
      return CONST_TypeMap.get(value);
  }
}
function GetSerial(value) {
  switch (typeof value) {
    case "function":
      return value.serial;

    case "object":
      return GetSerial(value.constructor);

    case "string":
      return GetSerial(String);

    case "number":
      return GetSerial(Number);

    case "boolean":
      return GetSerial(Boolean);

    default:
      return GetSerial(value.constructor);
  }
}
function GetSerialByValue(value) {
  return GetSerial(GetCtorByValue(value));
}
function GetType(value) {
  switch (typeof value) {
    case "function":
      let type = value.type;

      if (type == null) {
        type = Object.type;

        if (value != Object) {
          console.warn("[类型应该标记@Type]" + value.name + "[强制转换为]" + type);
        }
      }

      return type;

    case "number":
      return GetType(GetCtor(value));
  }
}
function GetCtorByValue(value) {
  let ctor;

  switch (typeof value) {
    case "number":
      ctor = Number;
      break;

    case "string":
      ctor = String;
      break;

    case "boolean":
      ctor = Boolean;
      break;

    case "object":
      ctor = value.constructor;
      break;

    default:
      console.error("[未知的类型]");
  }

  return ctor;
}
function GetTypeByValue(value) {
  return GetType(GetCtorByValue(value));
}

const InitFunc = function () {
  TypeFunc("Object", Object);
  TypeFunc("Uint8Array", Uint8Array);
  TypeFunc("Number", Number);
  TypeFunc("String", String);
  TypeFunc("Boolean", Boolean);
  TypeFunc("Long", peng_converter__WEBPACK_IMPORTED_MODULE_0__["Long"]);
  TypeFunc("Array", Array);
  TypeFunc("Map", Map);
}();

/***/ }),

/***/ "./src/define/ConverterDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Converter", function() { return Converter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettleConverter", function() { return SettleConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConverter", function() { return BaseConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendConverter", function() { return ExtendConverter; });
/* harmony import */ var _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");
/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/Util.ts");
/* harmony import */ var _SettlerDefine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/define/SettlerDefine.ts");
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/peng-converter/index.js");
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(peng_converter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_VectorBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/base/VectorBase.ts");
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/base/NumberBase.ts");
/* harmony import */ var _util_Exception__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/util/Exception.ts");
/* harmony import */ var _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/base/SettleBase.ts");
/* harmony import */ var _base_StatusBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/base/StatusBase.ts");
/* harmony import */ var _base_TokenBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/base/TokenBase.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};













class Converter {
  to(writer, value, cls) {
    Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldTo"])(writer, value, cls);
  }

  from(reader, cls) {
    return Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldFrom"])(reader, cls);
  }

  parse(value, cls) {
    return Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldParse"])(value, cls);
  }

  json(value) {
    return Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldJson"])(value);
  }

}
class SettleConverter extends Converter {
  getSerial() {
    throw _util_Exception__WEBPACK_IMPORTED_MODULE_8__["ExtendsException"];
  }

  parseShell(value, cls, index, parent) {
    return Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldParseShell"])(value, cls, index, parent);
  }

  toShell(writer, value, cls) {
    Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldToShell"])(writer, value, cls);
  }

  fromShell(reader, cls, index, parent) {
    return Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldFromShell"])(reader, cls, index, parent);
  }

  jsonShell(value) {
    return Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldJsonShell"])(value);
  }

}
class BaseConverter extends SettleConverter {
  parse(value, cls) {
    return value;
  }

  parseShell(value, cls, index, parent) {
    return this.settler(this.parse(value, cls), index, parent);
  }

  fromShell(reader, cls, index, parent) {
    return this.settler(this.from(reader, cls), index, parent);
  }

  toShell(writer, value, cls) {
    this.to(writer, value.value, cls);
  }

  jsonShell(value) {
    return value.value.toString();
  }

  json(value) {
    return value.toString();
  }

}
class ExtendConverter extends SettleConverter {
  to(writer, value, cls) {
    if (!cls) {
      cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtorByValue"])(value);
    }

    let serial = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetSerial"])(cls);
    writer.int32(serial);
    super.to(writer, value, cls);
  }

  toShell(writer, value, cls) {
    cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtorByValue"])(value.value);
    let serial = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetSerial"])(cls);
    writer.int32(serial);
    super.toShell(writer, value, cls);
  }

  from(reader, cls) {
    cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(reader.int32());
    let inst = super.from(reader, cls);
    return inst;
  }

  fromShell(reader, cls) {
    cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(reader.int32());
    let inst = super.fromShell(reader, cls);
    return inst;
  }

  parse(value, cls) {
    let type = value["@type"];

    if (type) {
      cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(type);
    }

    let inst = super.parse(value, cls);
    return inst;
  }

  parseShell(value, cls) {
    let type = value["@type"];

    if (type) {
      cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(type);
    }

    let inst = super.parseShell(value, cls);
    return inst;
  }

}
let ArrayConverter = class ArrayConverter extends SettleConverter {
  parse(value, cls) {
    if (!value) return [];
    let arr = [];

    for (let i = 0; i < value.length; i++) {
      let converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls);
      arr.push(converter.parse(value[i], cls));
    }

    return arr;
  }

  parseShell(value, cls, index, parent) {
    let arr = new _SettlerDefine__WEBPACK_IMPORTED_MODULE_3__["OperateArray"]();
    arr.index = index;
    arr.parent = parent;
    arr.serial = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetSerial"])(cls);
    if (!value) return arr;
    let converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls);

    for (let i = 0; i < value.length; i++) {
      if (value[i] == null) continue;
      let shell = converter.parseShell(value[i], cls);
      shell.index = i;
      shell.parent = arr;
      arr[i] = shell;
    }

    return arr;
  }

  from(reader, cls) {
    let isDetail = reader.bool();
    let converter;

    if (!isDetail) {
      converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls);
    }

    return _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i, arr) => {
      if (isExist) {
        if (isDetail) {
          let serial = reader.int32();
          cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(serial);
          converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(serial);
        }

        return converter.from(reader, cls);
      } else {
        return null;
      }
    });
  }

  fromShell(reader, cls, index, parent) {
    let isDetail = reader.bool();
    let converter;

    if (!isDetail) {
      converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls);
    }

    let arr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i, arr) => {
      let shell;

      if (isExist) {
        if (isDetail) {
          let serial = reader.int32();
          converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(serial);
        }

        shell = converter.fromShell(reader, cls);
        shell.index = i;
        shell.parent = arr;
      } else {
        shell = null;
      }

      return shell;
    }, _SettlerDefine__WEBPACK_IMPORTED_MODULE_3__["OperateArray"]);
    arr.serial = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetSerial"])(cls);
    return arr;
  }

  to(writer, value, cls) {
    let isDetail;
    let converter;

    if (cls == null) {
      isDetail = true;
      writer.bool(true);
    } else {
      isDetail = false;
      writer.bool(false);
      converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls);
    }

    let validArr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(value, writer, prop => {
      if (prop) {
        return true;
      } else {
        return false;
      }
    });

    for (let i = 0; i < validArr.length; i++) {
      let prop = value[validArr[i]];

      if (isDetail) {
        let serial = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetSerial"])(prop);
        converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(serial);
        cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(serial);
        writer.int32(serial);
      }

      converter.to(writer, prop, cls);
    }
  }

  toShell(writer, value, cls) {
    let isDetail;
    let converter;

    if (cls == null) {
      isDetail = true;
      writer.bool(true);
    } else {
      isDetail = false;
      writer.bool(false);
      converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls);
    }

    let validArr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(value, writer, prop => {
      if (prop != null && prop.value != null) {
        return true;
      } else {
        return false;
      }
    });

    for (let i = 0; i < validArr.length; i++) {
      let prop = value[validArr[i]];

      if (isDetail) {
        let serial = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetSerial"])(prop);
        converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(serial);
        writer.int32(serial);
      }

      converter.toShell(writer, prop, cls);
    }
  }

  json(value, cls) {
    let arr = [];

    for (let i = 0; i < value.length; i++) {
      arr.push(Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldJson"])(value[i], cls));
    }

    return JSON.stringify(arr);
  }

  jsonShell(value, cls) {
    let arr = [];

    for (let i = 0; i < value.length; i++) {
      arr.push(Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldJsonShell"])(value[i], cls));
    }

    return JSON.stringify(arr);
  }

};
ArrayConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(Array)], ArrayConverter);
let ObjectConverter = class ObjectConverter extends BaseConverter {
  to(writer, value, cls) {
    if (cls == null || cls == Object) {
      writer.string(JSON.stringify(value));
    } else {
      Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldTo"])(writer, value, cls);
    }
  }

  from(reader, cls) {
    if (cls == null || cls == Object) {
      return JSON.parse(reader.string());
    } else {
      return Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["FieldFrom"])(reader, cls);
    }
  }

};
ObjectConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(Object)], ObjectConverter);
let Uint8ArrayConverter = class Uint8ArrayConverter extends BaseConverter {
  to(writer, value) {
    writer.bytes(value);
  }

  from(reader) {
    return reader.bytes();
  }

};
Uint8ArrayConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(Uint8Array)], Uint8ArrayConverter);
let BooleanConverter = class BooleanConverter extends BaseConverter {
  to(writer, value) {
    writer.bool(value);
  }

  from(reader) {
    return reader.bool();
  }

};
BooleanConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(Boolean)], BooleanConverter);
let CustomNumberConverter = class CustomNumberConverter extends BaseConverter {
  to(writer, value) {
    writer.double(value.value);
  }

  from(reader) {
    return new _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["CustomNumber"](reader.double());
  }

  parse(value) {
    return new _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["CustomNumber"](value);
  }

};
CustomNumberConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["CustomNumber"])], CustomNumberConverter);
let NumberConverter = class NumberConverter extends BaseConverter {
  to(writer, value) {
    writer.double(value);
  }

  from(reader) {
    return reader.double();
  }

};
NumberConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(Number)], NumberConverter);
let StringConverter = class StringConverter extends BaseConverter {
  to(writer, value) {
    writer.string(value);
  }

  from(reader) {
    return reader.string();
  }

};
StringConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(String)], StringConverter);
let LongConverter = class LongConverter extends BaseConverter {
  to(writer, value) {
    writer.int64(value);
  }

  from(reader) {
    return reader.int64();
  }

  parse(value) {
    if (value == null) return null;
    return peng_converter__WEBPACK_IMPORTED_MODULE_4__["Long"].fromValue(value);
  }

};
LongConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(peng_converter__WEBPACK_IMPORTED_MODULE_4__["Long"])], LongConverter);
let Vector2Convert = class Vector2Convert extends BaseConverter {
  to(writer, value) {
    writer.double(value.x);
    writer.double(value.y);
  }

  from(reader) {
    return new _base_VectorBase__WEBPACK_IMPORTED_MODULE_5__["Vector2"](reader.double(), reader.double());
  }

  parse(value) {
    if (value == null) return null;
    return new _base_VectorBase__WEBPACK_IMPORTED_MODULE_5__["Vector2"](value);
  }

};
Vector2Convert = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_VectorBase__WEBPACK_IMPORTED_MODULE_5__["Vector2"])], Vector2Convert);
let NumberAttributeConverter = class NumberAttributeConverter extends SettleConverter {
  parseShell(value, cls) {
    return super.parseShell(value, _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["NumberAttribute"]);
  }

  fromShell(reader, cls, index, parent) {
    return super.fromShell(reader, _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["NumberAttribute"], index, parent);
  }

  toShell(writer, value, cls) {
    super.toShell(writer, value, _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["NumberAttribute"]);
  }

};
NumberAttributeConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["NumberAttribute"])], NumberAttributeConverter);
let IntegerConvert = class IntegerConvert extends CustomNumberConverter {
  to(writer, value) {
    writer.int32(value.value);
  }

  from(reader) {
    return new _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Integer"](reader.int32());
  }

  parse(v) {
    return new _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Integer"](v);
  }

};
IntegerConvert = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Integer"])], IntegerConvert);
let FloatConvert = class FloatConvert extends CustomNumberConverter {
  to(writer, value) {
    writer.double(value.value);
  }

  from(reader) {
    return new _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Float"](reader.double());
  }

  parse(v) {
    return new _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Float"](v);
  }

};
FloatConvert = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Float"])], FloatConvert);
let StatusAttributeConvert = class StatusAttributeConvert extends BaseConverter {
  to(writer, value) {
    writer.int32(value);
  }

  from(reader) {
    return reader.int32();
  }

  fromShell(reader, cls) {
    return super.fromShell(reader, _base_StatusBase__WEBPACK_IMPORTED_MODULE_10__["StatusAttribute"]);
  }

  parseShell(value, cls) {
    return super.parseShell(value, _base_StatusBase__WEBPACK_IMPORTED_MODULE_10__["StatusAttribute"]);
  }

};
StatusAttributeConvert = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_StatusBase__WEBPACK_IMPORTED_MODULE_10__["StatusAttribute"])], StatusAttributeConvert);
let DataSettleConverter = class DataSettleConverter extends BaseConverter {
  to(writer, value) {
    writer.int32(value.serial);
    writer.int32(value.index);
    this.settleTo(writer, value.data);
  }

  settleTo(writer, data) {
    if (data == null) return;

    if (data.cache != null && data.cache.length != 0) {
      writer.bool(true);

      if (data.serial == null) {
        writer.bool(true);
        let arr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(data.detail, writer);

        for (let i = 0; i < arr.length; i++) {
          let prop = data.cache[arr[i]];
          let serial = data.detail[arr[i]];
          writer.int32(serial);

          if (serial != -1) {
            Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(serial).to(writer, prop);
          }
        }
      } else {
        writer.bool(false);
        writer.int32(data.serial);
        let converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(data.serial);
        let arr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(data.cache, writer);

        for (let i = 0; i < arr.length; i++) {
          let prop = data.cache[arr[i]];
          converter.to(writer, prop);
        }
      }
    } else {
      writer.bool(false);
    }

    if (data.children != null && data.children.length != 0) {
      writer.bool(true);
      let arr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(data.children, writer);

      for (let i = 0; i < arr.length; i++) {
        let prop = data.children[arr[i]];
        this.settleTo(writer, prop);
      }
    } else {
      writer.bool(false);
    }
  }

  from(reader) {
    let serial = reader.int32();
    let index = reader.int32();
    let data = this.settleFrom(reader);
    let settle = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["DataSettle"](data, index, serial);
    return settle;
  }

  settleFrom(reader) {
    let result;
    let isCache = reader.bool();

    if (isCache) {
      let isDetail = reader.bool();

      if (isDetail) {
        result = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["PropData"](null);
        result.cache = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i) => {
          if (isExist) {
            let serial = reader.int32();
            let ctor = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(serial);
            result.detail[i] = serial;

            if (serial != -1) {
              return Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(serial).from(reader, ctor);
            } else {
              return null;
            }
          }
        });
      } else {
        let serial = reader.int32();
        let ctor = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(serial);
        let converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(serial));
        result = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["PropData"](serial);
        result.cache = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i) => {
          if (isExist) {
            return converter.from(reader, ctor);
          }
        });
      }
    } else {
      result = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["PropData"](null);
    }

    let isChildren = reader.bool();

    if (isChildren) {
      result.children = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i, arr) => {
        if (isExist) {
          return this.settleFrom(reader);
        }
      });
    }

    return result;
  }

};
DataSettleConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["DataSettle"])], DataSettleConverter);
let EventSttleConverter = class EventSttleConverter extends BaseConverter {
  to(writer, value) {
    writer.int32(value.serial);
    writer.int32(value.index);
    this.settleTo(writer, value.event);
  }

  settleTo(writer, data) {
    if (data == null) return;

    if (data.newValue != data.oldValue) {
      writer.bool(true);
      let converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(data.serial);
      writer.int32(data.serial);

      if (data.newValue != null) {
        writer.bool(true);
        converter.to(writer, data.newValue);
      } else {
        writer.bool(false);
      }

      if (data.oldValue != null) {
        writer.bool(true);
        converter.to(writer, data.oldValue);
      } else {
        writer.bool(false);
      }
    } else {
      writer.bool(false);
    }

    if (data.children != null && data.children.length != 0) {
      writer.bool(true);
      let arr = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].GetValidArr(data.children, writer);

      for (let i = 0; i < arr.length; i++) {
        let prop = data.children[arr[i]];
        this.settleTo(writer, prop);
      }
    } else {
      writer.bool(false);
    }
  }

  from(reader) {
    let serial = reader.int32();
    let index = reader.int32();
    let event = this.settleFrom(reader);
    let settle = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["EventSettle"](event, index, serial);
    return settle;
  }

  settleFrom(reader) {
    let result;
    let isCache = reader.bool();

    if (isCache) {
      let serial = reader.int32();
      let cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(serial);
      let converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(cls);
      result = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["EventData"](serial);

      if (reader.bool()) {
        result.newValue = converter.from(reader, cls);
      }

      if (reader.bool()) {
        result.oldValue = converter.from(reader, cls);
      }
    } else {
      result = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["EventData"](null);
    }

    let isChildren = reader.bool();

    if (isChildren) {
      result.children = _util_Util__WEBPACK_IMPORTED_MODULE_2__["Utils"].ParseValidArr(reader, (isExist, i, arr) => {
        if (isExist) {
          return this.settleFrom(reader);
        }
      });
    }

    return result;
  }

};
EventSttleConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_SettleBase__WEBPACK_IMPORTED_MODULE_9__["EventSettle"])], EventSttleConverter);
let TokenConverter = class TokenConverter extends BaseConverter {};
TokenConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_TokenBase__WEBPACK_IMPORTED_MODULE_11__["Token"])], TokenConverter);
let AccessTokenConverter = class AccessTokenConverter extends BaseConverter {};
AccessTokenConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_0__["Convert"])(_base_TokenBase__WEBPACK_IMPORTED_MODULE_11__["AccessToken"])], AccessTokenConverter);

/***/ }),

/***/ "./src/define/ObjectDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootObject", function() { return RootObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootArry", function() { return RootArry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootConverter", function() { return RootConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootSettler", function() { return RootSettler; });
/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
/* harmony import */ var _base_NumberBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/base/NumberBase.ts");
/* harmony import */ var _base_BehaviorBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/base/BehaviorBase.ts");
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony import */ var _ConverterDefine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/define/ConverterDefine.ts");
/* harmony import */ var _decorator_AttrDecorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/decorator/AttrDecorator.ts");
/* harmony import */ var _decorator_BehavDecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/decorator/BehavDecorator.ts");
/* harmony import */ var _decorator_StatusDecorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/decorator/StatusDecorator.ts");
/* harmony import */ var _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");
/* harmony import */ var _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/base/SettleBase.ts");
/* harmony import */ var _SettlerDefine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/define/SettlerDefine.ts");
/* harmony import */ var _base_StatusBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/base/StatusBase.ts");
/* harmony import */ var _util_Define__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/util/Define.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let RootObject = class RootObject extends _util_Define__WEBPACK_IMPORTED_MODULE_13__["TypeObject"] {
  getBehavior(value) {
    if (!this.behaviors) return null;
    let type = typeof value;
    let name;

    switch (type) {
      case "string":
        name = value;
        break;

      case "function":
        name = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetType"])(value);
        break;
    }

    if (!name) return null;
    let shell = this.behaviors[name];
    if (shell == null) return null;
    return shell.value;
  }

  addBehavior(value) {
    let behavior;

    switch (typeof value) {
      case "string":
        let cls = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["GetCtor"])(value);
        behavior = new cls();
        break;

      case "function":
        behavior = new value();
        break;

      case "object":
        behavior = value;
        break;
    }

    this.behaviors.add(behavior);
  }

  on(stat, bool, caller, listener) {
    this.status[stat >> 5].on(caller, (value, old) => {
      let change = value.value ^ old;
      let decide = 1 << stat % 32;

      if (decide & change && !(value.value & decide) != bool) {
        listener.call(caller);
      }
    });
  }

};

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_1__["NumberAttribute"], "attributes", Array)], RootObject.prototype, "attributes", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(_base_BehaviorBase__WEBPACK_IMPORTED_MODULE_2__["BehaviorAttribute"], "behaviors", Array)], RootObject.prototype, "behaviors", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(_base_StatusBase__WEBPACK_IMPORTED_MODULE_12__["StatusAttribute"], "status", Array)], RootObject.prototype, "status", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "serial")], RootObject.prototype, "serial", void 0);

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "index")], RootObject.prototype, "index", void 0);

RootObject = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["Type"])("RootObject")], RootObject);

let RootArry = class RootArry extends _SettlerDefine__WEBPACK_IMPORTED_MODULE_11__["OperateArray"] {};
RootArry = __decorate([Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_3__["Type"])("RootArray")], RootArry);

let RootConverter = class RootConverter extends _ConverterDefine__WEBPACK_IMPORTED_MODULE_5__["ExtendConverter"] {
  fromShell(reader) {
    let inst = super.fromShell(reader);
    this.inject(inst);
    return inst;
  }

  parseShell(value) {
    let inst = super.parseShell(value);
    this.inject(inst);
    return inst;
  }

  inject(inst) {
    Object(_decorator_AttrDecorator__WEBPACK_IMPORTED_MODULE_6__["AttrInject"])(inst);
    Object(_decorator_StatusDecorator__WEBPACK_IMPORTED_MODULE_8__["StatusInject"])(inst);
    Object(_decorator_BehavDecorator__WEBPACK_IMPORTED_MODULE_7__["BehaviorInject"])(inst);
    inst.result();
  }

};
RootConverter = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_9__["Convert"])(RootObject)], RootConverter);

let RootSettler = class RootSettler extends _SettlerDefine__WEBPACK_IMPORTED_MODULE_11__["Settler"] {
  init() {
    this.delayEvent = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["EventData"]();
    this.settleCache = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["PropData"]();
  }

  change(serial, arr) {
    let prop;
    let cache;
    let index;
    cache = this.settleCache.children;

    while (arr.length != 0) {
      index = arr.pop();
      prop = cache[index];

      if (!prop) {
        prop = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["PropData"]();
        cache[index] = prop;
      }

      cache = prop.children;
    }

    prop.serial = serial;
    return prop;
  }

  report(serial, value, oldValue, arr) {
    let settle;
    let event = this.delayEvent.children;
    let index;

    while (arr.length != 0) {
      index = arr.pop();
      settle = event[index];

      if (!settle) {
        settle = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["EventData"]();
        event[index] = settle;
      }

      event = settle.children;
    }

    settle.serial = serial;
    settle.newValue = value == null ? null : value.value;
    settle.oldValue = oldValue;
  }

  settle() {
    if (this.value.index == null || this.value.serial == null) {
      this.settleCache.clear();
      console.error("[结算数据必须携带索引和序列号]");
      return null;
    }

    let data = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["DataSettle"](this.settleCache, this.value.index.value, this.value.serial.value);
    return data;
  }

  result(cache) {
    if (!cache) cache = this.settleCache;
    this.inspect(cache);
    this.settleCache = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["PropData"]();
  }

  event() {
    return new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["EventSettle"](this.delayEvent, this.value.index.value, this.value.serial.value);
  }

  publish(cache) {
    if (!cache) cache = this.delayEvent;
    this.emit(cache);
    this.delayEvent = new _base_SettleBase__WEBPACK_IMPORTED_MODULE_10__["EventData"]();
  }

};
RootSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_4__["Settle"])(RootObject)], RootSettler);

let BehaviorAttributeConvert = class BehaviorAttributeConvert extends _ConverterDefine__WEBPACK_IMPORTED_MODULE_5__["ExtendConverter"] {
  parseShell(value, cls, index, parent) {
    let settler = super.parseShell(value, cls);

    if (index != null && parent != null) {
      settler.index = index;
      settler.parent = parent;
      let root;
      root = parent;

      while (true) {
        if (root == null) break;

        if (root instanceof RootSettler) {
          Object(_decorator_BehavDecorator__WEBPACK_IMPORTED_MODULE_7__["BehaviorInject"])(root, settler);
          break;
        }

        root = root.parent;
      }
    }

    return settler;
  }

};
BehaviorAttributeConvert = __decorate([Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_9__["Convert"])(_base_BehaviorBase__WEBPACK_IMPORTED_MODULE_2__["BehaviorAttribute"])], BehaviorAttributeConvert);

/***/ }),

/***/ "./src/define/SettlerDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settler", function() { return Settler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSettler", function() { return BaseSettler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperateArray", function() { return OperateArray; });
/* harmony import */ var _decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
/* harmony import */ var _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/enum/SettleEnum.ts");
/* harmony import */ var _base_VectorBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/base/VectorBase.ts");
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/peng-converter/index.js");
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(peng_converter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");
/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony import */ var _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/base/NumberBase.ts");
/* harmony import */ var _util_Exception__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/util/Exception.ts");
/* harmony import */ var _base_StatusBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/base/StatusBase.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











class Settler {
  constructor(value, index, parent) {
    this.events = [];
    this.value = value;
    this.index = index;
    this.parent = parent;
  }

  on(caller, listener) {
    this.events.push((value, old) => {
      listener.call(caller, value, old);
    });
  }

  off() {
    this.events = [];
  }

  report(serial, value, old, arr) {
    if (this.parent) {
      if (arr == null) arr = [];
      arr.push(this.index);
      this.parent.report(serial, value, old, arr);
    }
  }

  emit(value) {
    if (!value) return;
    let child;
    let settle;

    if (value.newValue != value.oldValue) {
      for (let i = 0; i < this.events.length; i++) {
        let event = this.events[i];
        if (event) this.events[i](this, value.oldValue);
      }
    }

    if (value.children.length != 0) {
      let list = Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["GetFieldList"])(this.value.constructor);

      for (let i = 0; i < value.children.length; i++) {
        child = value.children[i];
        if (child == null) continue;
        settle = this.value[list[i].property];
        if (settle == null) continue;
        settle.emit(child);
      }
    }
  }

  change(converter, arr) {
    if (this.parent) {
      if (arr == null) arr = [];
      arr.push(this.index);
      return this.parent.change(converter, arr);
    }
  }

  add(value) {
    throw Error("[继承类必须实现细节部分]");
  }

  mul(value) {
    throw Error("[继承类必须实现细节部分]");
  }

  sub(value) {
    throw Error("[继承类必须实现细节部分]");
  }

  div(value) {
    throw Error("[继承类必须实现细节部分]");
  }

  eq(value) {
    throw Error("[继承类必须实现细节部分]");
  }

  merge(data, cache) {
    debugger;
    let arr = data.children;
    if (arr == null) return;
    let propList = Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["GetFieldList"])(this.constructor);

    for (let i = 0; i < arr.length; i++) {
      let value = cache[i];

      if (value == null) {
        cache[i] = arr[i];
      } else {
        let binding = propList[i];
        let settle = this[binding.property];
        if (settle == null) continue;
        settle.merge(arr[i], cache[i]);
      }
    }
  }

  inspect(value) {
    if (!value) return;
    let settle;
    let child;

    if (value.cache.length != 0) {
      this.execute(value.cache);
    }

    if (value.children.length != 0) {
      let list = Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["GetFieldList"])(this.value.constructor);

      for (let i = 0; i < value.children.length; i++) {
        child = value.children[i];
        if (child == null) continue;
        settle = this.value[list[i].property];
        if (settle == null) continue;
        settle.inspect(child);
      }
    }
  }

  execute(cache) {
    throw _util_Exception__WEBPACK_IMPORTED_MODULE_8__["ExtendsException"];
  }

  init() {}

  toString() {
    if (this.value != null) {
      return this.value.toString();
    } else {
      return null;
    }
  }

}
class BaseSettler extends Settler {
  toAdd(a, b) {
    throw Error("[继承类必须实现细节部分]");
  }

  toSub(a, b) {
    throw Error("[继承类必须实现细节部分]");
  }

  toMul(a, b) {
    throw Error("[继承类必须实现细节部分]");
  }

  toDiv(a, b) {
    throw Error("[继承类必须实现细节部分]");
  }

  isZero(v) {
    throw Error("[继承类必须实现细节部分]");
  }

  isOne(v) {
    throw Error("[继承类必须实现细节部分]");
  }

  add(value) {
    let arr = this.change(this.serial);

    if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ] == null) {
      if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] == null) {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = this.toAdd(null, value);
      } else {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = this.toAdd(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD], value);
        if (this.isZero(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD])) arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = null;
      }
    }

    return this;
  }

  sub(value) {
    let arr = this.change(this.serial);

    if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ] == null) {
      if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] == null) {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = this.toSub(null, value);
      } else {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = this.toSub(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD], value);
        if (this.isZero(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD])) arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = null;
      }
    }

    return this;
  }

  mul(value) {
    let arr = this.change(this.serial);

    if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ] == null) {
      if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] == null) {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = this.toAdd(null, value);
      } else {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = this.toMul(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL], value);
        if (this.isOne(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL])) arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = null;
      }
    }

    return this;
  }

  div(value) {
    let arr = this.change(this.serial);

    if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ] == null) {
      if (arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] == null) {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = this.toDiv(null, value);
      } else {
        arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = this.toDiv(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL], value);
        if (this.isOne(arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL])) arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = null;
      }
    }

    return this;
  }

  eq(value) {
    let arr = this.change(this.serial);
    arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = null;
    arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = null;
    arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ] = value;
    return this;
  }

  merge(data, cache) {
    debugger;
  }

  execute(cache) {
    let oldValue = this.value;

    for (let i = 0; i < cache.length; i++) {
      if (i != _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ && cache[i] == null) continue;

      switch (i) {
        case _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL:
          this.value = this.toMul(this.value, cache[i]);
          break;

        case _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD:
          this.value = this.toAdd(this.value, cache[i]);
          break;

        case _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ:
          this.value = cache[i];
          break;
      }
    }

    this.report(this.serial, this, oldValue);
  }

}
class OperateArray extends Array {
  constructor() {
    super(...arguments);
    this.events = [];
  }

  on(caller, listener) {
    this.events.push((value, old, index) => {
      listener.call(caller, value, old, index);
    });
  }

  off() {
    this.events = [];
  }

  report(serial, value, old, index) {
    if (this.parent) {
      if (index == null) index = [];
      index.push(this.index);
      this.parent.report(serial, value, old, index);
    }
  }

  emit(value) {
    if (!value) return;
    let settle;

    for (let i = 0; i < value.children.length; i++) {
      settle = this[i];
      let child = value.children[i];

      if (child != null && child.newValue != child.oldValue) {
        for (let j = 0; j < this.events.length; j++) {
          let event = this.events[j];
          if (event) this.events[j](settle, child.oldValue, i);
        }
      }

      if (settle == null) continue;
      settle.emit(child);
    }
  }

  add(value, index) {
    let arr = this.change(null);
    let serial;

    if (value == null) {
      serial = -1;
    } else {
      serial = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetSerial"])(Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtorByValue"])(value));
    }

    if (index == null) {
      if (this.expectLenght == null) this.expectLenght = this.length;
      index = this.expectLenght;
      this.expectLenght += 1;
    }

    arr.detail[index] = serial;
    arr.cache[index] = value;
    return this;
  }

  remove(index) {
    let arr = this.change(null);
    arr.detail[index] = -1;
    arr.cache[index] = null;
    return this;
  }

  inspect(value) {
    if (!value) return;

    if (value.cache.length != 0) {
      this.execute(value.cache, value.detail);
    }

    let settle;

    for (let i = 0; i < value.children.length; i++) {
      settle = this[i];
      if (settle == null) continue;
      settle.inspect(value.children[i]);
    }
  }

  change(converter, arr) {
    if (this.parent) {
      if (arr == null) arr = [];
      arr.push(this.index);
      return this.parent.change(converter, arr);
    }
  }

  execute(cache, detail) {
    for (let i = 0; i < cache.length; i++) {
      let data = this[i] == null ? null : this[i].value;
      let newValue;
      let serial = detail[i];
      if (serial == null) continue;

      if (serial != -1) {
        let value = cache[i];
        let ctor = Object(_decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_6__["GetCtor"])(serial);
        let converter = Object(_decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_5__["GetConverter"])(ctor);
        let settler = converter.parseShell(value, ctor, i, this);
        newValue = settler;
      } else {
        this[i] && this[i].off();
        newValue = null;
      }

      console.log("[索引]" + i + "[操作]" + serial + "[值]" + data + "=>" + newValue);
      this[i] = newValue;
      this.report(this.serial, newValue, data, [i]);
    }

    this.expectLenght = this.length;
  }

  merge(data, cache) {
    debugger;
    let arr = data;
    if (arr == null) return;

    for (let i = 0; i < arr.cache.length; i++) {
      let value = cache[i];

      if (value == null) {
        cache[i] = arr[i];
      } else {
        let settle = this[i];
        if (settle == null) continue;
        settle.merge(arr[i], cache[i]);
      }
    }
  }

}
let ArraySettler = class ArraySettler extends Settler {};
ArraySettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(Array)], ArraySettler);
let ObjectSettler = class ObjectSettler extends BaseSettler {};
ObjectSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(Object)], ObjectSettler);
let BooleanSettler = class BooleanSettler extends BaseSettler {};
BooleanSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(Boolean)], BooleanSettler);
let NumberSettler = class NumberSettler extends BaseSettler {
  toAdd(a, b) {
    if (b == null) return a;
    if (a == null) return b;
    return a + b;
  }

  toSub(a, b) {
    if (b == null) return a;
    if (a == null) return -b;
    return a - b;
  }

  toMul(a, b) {
    if (b == null) return a;
    if (a == null) return 0;
    return a * b;
  }

  toDiv(a, b) {
    if (b == null) return a;
    if (a == null) return 1 / b;
    return a / b;
  }

  isZero(v) {
    return v == 0;
  }

  isOne(v) {
    return v == 1;
  }

  merge(data, cache) {
    debugger;
    return null;
  }

};
NumberSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(Number)], NumberSettler);
let CustomNumberSettler = class CustomNumberSettler extends BaseSettler {
  toAdd(a, b) {
    if (b == null) return a;

    if (typeof b == "number") {
      b = new this.cls(b);
    }

    if (a == null) {
      return b;
    }

    return a.add(b);
  }

  toSub(a, b) {
    if (b == null) return a;

    if (typeof b == "number") {
      b = new this.cls(b);
    }

    if (a == null) return b.neg();
    return a.sub(b);
  }

  toMul(a, b) {
    if (b == null) return a;

    if (typeof b == "number") {
      b = new this.cls(b);
    }

    if (a == null) return new _base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["CustomNumber"](0);
    return a.mul(b);
  }

  toDiv(a, b) {
    if (b == null) return a;

    if (typeof b == "number") {
      b = new this.cls(b);
    }

    if (a == null) return b.rec();
    return a.div(b);
  }

  eq(value) {
    let arr = this.change(this.serial);
    arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL] = null;
    arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD] = null;

    if (typeof value == "number") {
      value = new this.cls(value);
    }

    arr.cache[_enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ] = value;
    return this;
  }

  isZero(v) {
    if (typeof v == "number") {
      return v == 0;
    } else {
      return v.value == 0;
    }
  }

  isOne(v) {
    if (typeof v == "number") {
      return v == 1;
    } else {
      return v.value == 1;
    }
  }

  merge(data, cache) {
    debugger;
    return null;
  }

  execute(cache) {
    let oldValue = this.value;

    for (let i = 0; i < cache.length; i++) {
      if (i != _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ && cache[i] == null) continue;

      switch (i) {
        case _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].MUL:
          this.value = this.toMul(this.value, cache[i]);
          break;

        case _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].ADD:
          this.value = this.toAdd(this.value, cache[i]);
          break;

        case _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_2__["SettlerEnum"].EQ:
          this.value = cache[i];
          break;
      }
    }

    this.report(this.serial, this, oldValue);
  }

};
CustomNumberSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["CustomNumber"])], CustomNumberSettler);
let IntegerSettler = class IntegerSettler extends CustomNumberSettler {
  mul(value) {
    if (typeof value == "number") {
      value = new this.cls(value);
    }

    this.add(this.value.mul(value).sub(this.value));
    return this;
  }

  div(value) {
    if (typeof value == "number") {
      value = new this.cls(value);
    }

    this.sub(this.value.sub(this.value.div(value)));
    return this;
  }

};
IntegerSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Integer"])], IntegerSettler);
;
let FloatSettler = class FloatSettler extends CustomNumberSettler {};
FloatSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["Float"])], FloatSettler);
;
let StringSettler = class StringSettler extends BaseSettler {
  toAdd(a, b) {
    if (b == null) return a;
    if (a == null) return b;
    return a + b;
  }

  toSub(a, b) {
    if (b == null) return a;
    if (a == null) return b;
    return a.substr(a.lastIndexOf(b));
  }

  isZero(v) {
    return v == "" || v == null;
  }

};
StringSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(String)], StringSettler);
let LongSettle = class LongSettle extends BaseSettler {
  toAdd(a, b) {
    if (b == null) return a;
    if (a == null) return b;
    return a.add(b);
  }

  toSub(a, b) {
    if (b == null) return a;
    if (a == null) return b.neg();
    return a.sub(b);
  }

  toMul(a, b) {
    if (b == null) return a;
    if (a == null) return peng_converter__WEBPACK_IMPORTED_MODULE_4__["Long"].ZERO;
    return a.mul(b);
  }

  toDiv(a, b) {
    if (b == null) return a;
    if (a == null) return peng_converter__WEBPACK_IMPORTED_MODULE_4__["Long"].ONE.div(b);
    return a.div(b);
  }

  isZero(v) {
    return v.isZero();
  }

  isOne(v) {
    return v.toNumber() == 1;
  }

};
LongSettle = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(peng_converter__WEBPACK_IMPORTED_MODULE_4__["Long"])], LongSettle);
let Vector2Settle = class Vector2Settle extends BaseSettler {
  toAdd(a, b) {
    if (b == null) return a;
    if (a == null) return b;
    return a.add(b);
  }

  toSub(a, b) {
    if (b == null) return a;
    if (a == null) return b.neg();
    return a.sub(b);
  }

  toMul(a, b) {
    if (b == null) return a;
    if (a == null) return _base_VectorBase__WEBPACK_IMPORTED_MODULE_3__["Vector2"].Zero;
    return a.mul(b);
  }

  toDiv(a, b) {
    if (b == null) return a;
    if (a == null) return _base_VectorBase__WEBPACK_IMPORTED_MODULE_3__["Vector2"].One.div(b);
    return a.div(b);
  }

  isZero(v) {
    return v.isZero();
  }

  isOne(v) {
    return v.isOne();
  }

};
Vector2Settle = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(_base_VectorBase__WEBPACK_IMPORTED_MODULE_3__["Vector2"])], Vector2Settle);
let NumberAttributeSettler = class NumberAttributeSettler extends BaseSettler {
  inspect(cache) {
    if (!cache) return;
    let settle;
    let child;

    if (cache.cache.length != 0) {
      this.execute(cache.cache);
    }

    if (cache.children.length != 0) {
      let list = Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["GetFieldList"])(this.value.constructor);

      for (let i = 0; i < cache.children.length; i++) {
        child = cache.children[i];
        if (child == null) continue;
        settle = this.value[list[i].property];

        if (settle == null) {
          this.value[list[i].property] = settle = list[i].value.delay.settler(null, i, this);
        }

        settle.inspect(child);
      }
    }
  }

};
NumberAttributeSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(_base_NumberBase__WEBPACK_IMPORTED_MODULE_7__["NumberAttribute"])], NumberAttributeSettler);
let StatusAttributeSettler = class StatusAttributeSettler extends BaseSettler {
  add(value) {
    let settle = this.change(this.serial);
    let trueValue = settle.cache[0];
    let falseValue = settle.cache[1];
    let isChange = (this.value & value) == 0;

    if (falseValue != null) {
      falseValue &= ~value;
      if (falseValue == 0) settle.cache[1] = null;
    }

    if (isChange) {
      if (trueValue == null) {
        settle.cache[0] = value;
      } else {
        trueValue |= value;
      }
    }

    return this;
  }

  sub(value) {
    let settle = this.change(this.serial);
    let trueValue = settle.cache[0];
    let falseValue = settle.cache[1];
    let isChange = (this.value & value) != 0;

    if (trueValue != null) {
      trueValue &= ~value;
      if (trueValue == 0) settle.cache[0] = null;
    }

    if (isChange) {
      if (falseValue == null) {
        settle.cache[1] = value;
      } else {
        falseValue |= value;
      }
    }

    return this;
  }

  execute(cache) {
    if (cache == null || cache == null || cache.length == 0) return;
    let trueValue = cache[0];
    let falseValue = cache[1];
    let data = this.value;

    if (trueValue != null) {
      this.value |= trueValue;
    }

    if (falseValue != null) {
      this.value &= ~falseValue;
    }

    this.report(this.serial, this, data);
  }

};
StatusAttributeSettler = __decorate([Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"])(_base_StatusBase__WEBPACK_IMPORTED_MODULE_9__["StatusAttribute"])], StatusAttributeSettler);

/***/ }),

/***/ "./src/enum/SettleEnum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlerEnum", function() { return SettlerEnum; });
class SettlerEnum {}
SettlerEnum.MUL = 0;
SettlerEnum.ADD = 1;
SettlerEnum.EQ = 2;

/***/ }),

/***/ "./src/enum/StatusEnum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusEnum", function() { return StatusEnum; });
class StatusEnum {}
StatusEnum.isAttacking = 0;
StatusEnum.isMoving = 1;
StatusEnum.isIdle = 2;
StatusEnum.isOnGround = 3;
StatusEnum.isOnSky = 4;
StatusEnum.isEntity = 5;
StatusEnum.isNihility = 6;
StatusEnum.isSleeping = 7;
StatusEnum.isStatic = 8;
StatusEnum.isDeath = 9;

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settle", function() { return _decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["Settle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCtorOfSettler", function() { return _decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["GetCtorOfSettler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSettler", function() { return _decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["GetSettler"]; });

/* harmony import */ var _base_SettleBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/base/SettleBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropData", function() { return _base_SettleBase__WEBPACK_IMPORTED_MODULE_1__["PropData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSettle", function() { return _base_SettleBase__WEBPACK_IMPORTED_MODULE_1__["DataSettle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventData", function() { return _base_SettleBase__WEBPACK_IMPORTED_MODULE_1__["EventData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventSettle", function() { return _base_SettleBase__WEBPACK_IMPORTED_MODULE_1__["EventSettle"]; });

/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "From", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["From"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FromShell", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["FromShell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "To", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["To"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToShell", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["ToShell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parse", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["Parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParseShell", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["ParseShell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Json", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["Json"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonShell", function() { return _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_2__["JsonShell"]; });

/* harmony import */ var _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/decorator/ConvertDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Convert", function() { return _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_3__["Convert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetConverter", function() { return _decorator_ConvertDecorator__WEBPACK_IMPORTED_MODULE_3__["GetConverter"]; });

/* harmony import */ var _define_ConverterDefine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/define/ConverterDefine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Converter", function() { return _define_ConverterDefine__WEBPACK_IMPORTED_MODULE_4__["Converter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettleConverter", function() { return _define_ConverterDefine__WEBPACK_IMPORTED_MODULE_4__["SettleConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseConverter", function() { return _define_ConverterDefine__WEBPACK_IMPORTED_MODULE_4__["BaseConverter"]; });

/* harmony import */ var _define_SettlerDefine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/define/SettlerDefine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settler", function() { return _define_SettlerDefine__WEBPACK_IMPORTED_MODULE_5__["Settler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSettler", function() { return _define_SettlerDefine__WEBPACK_IMPORTED_MODULE_5__["BaseSettler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettlerArray", function() { return _define_SettlerDefine__WEBPACK_IMPORTED_MODULE_5__["OperateArray"]; });

/* harmony import */ var _define_ObjectDefine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/define/ObjectDefine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootObject", function() { return _define_ObjectDefine__WEBPACK_IMPORTED_MODULE_6__["RootObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootConverter", function() { return _define_ObjectDefine__WEBPACK_IMPORTED_MODULE_6__["RootConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootSettler", function() { return _define_ObjectDefine__WEBPACK_IMPORTED_MODULE_6__["RootSettler"]; });

/* harmony import */ var _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/decorator/TypeDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSerialByValue", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["GetSerialByValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCtor", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["GetCtor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCtorByValue", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["GetCtorByValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetType", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["GetType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTypeByValue", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["GetTypeByValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSerial", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["GetSerial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ctor", function() { return _decorator_TypeDecorator__WEBPACK_IMPORTED_MODULE_7__["Ctor"]; });

/* harmony import */ var _decorator_StatusDecorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/decorator/StatusDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _decorator_StatusDecorator__WEBPACK_IMPORTED_MODULE_8__["Status"]; });

/* harmony import */ var _base_NumberBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/base/NumberBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Integer", function() { return _base_NumberBase__WEBPACK_IMPORTED_MODULE_9__["Integer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float", function() { return _base_NumberBase__WEBPACK_IMPORTED_MODULE_9__["Float"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberAttribute", function() { return _base_NumberBase__WEBPACK_IMPORTED_MODULE_9__["NumberAttribute"]; });

/* harmony import */ var _base_TokenBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/base/TokenBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return _base_TokenBase__WEBPACK_IMPORTED_MODULE_10__["Token"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _base_TokenBase__WEBPACK_IMPORTED_MODULE_10__["AccessToken"]; });

/* harmony import */ var _decorator_AttrDecorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/decorator/AttrDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attr", function() { return _decorator_AttrDecorator__WEBPACK_IMPORTED_MODULE_11__["Attr"]; });

/* harmony import */ var _decorator_BehavDecorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/decorator/BehavDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Behav", function() { return _decorator_BehavDecorator__WEBPACK_IMPORTED_MODULE_12__["Behav"]; });

/* harmony import */ var _base_BehaviorBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/base/BehaviorBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorAttribute", function() { return _base_BehaviorBase__WEBPACK_IMPORTED_MODULE_13__["BehaviorAttribute"]; });

/* harmony import */ var _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/enum/SettleEnum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettlerEnum", function() { return _enum_SettleEnum__WEBPACK_IMPORTED_MODULE_14__["SettlerEnum"]; });

/* harmony import */ var _enum_StatusEnum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/enum/StatusEnum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusEnum", function() { return _enum_StatusEnum__WEBPACK_IMPORTED_MODULE_15__["StatusEnum"]; });

/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/peng-converter/index.js");
/* harmony import */ var peng_converter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(peng_converter__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Writer", function() { return peng_converter__WEBPACK_IMPORTED_MODULE_16__["Writer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferReader", function() { return peng_converter__WEBPACK_IMPORTED_MODULE_16__["BufferReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferWriter", function() { return peng_converter__WEBPACK_IMPORTED_MODULE_16__["BufferWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reader", function() { return peng_converter__WEBPACK_IMPORTED_MODULE_16__["Reader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Long", function() { return peng_converter__WEBPACK_IMPORTED_MODULE_16__["Long"]; });

/* harmony import */ var _base_VectorBase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/base/VectorBase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return _base_VectorBase__WEBPACK_IMPORTED_MODULE_17__["Vector2"]; });

/* harmony import */ var _util_Prototype__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/util/Prototype.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prototype", function() { return _util_Prototype__WEBPACK_IMPORTED_MODULE_18__["Prototype"]; });

/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_19__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return buffer__WEBPACK_IMPORTED_MODULE_19__["Buffer"]; });

function version() {
  return "field@2.0.0";
}





















/***/ }),

/***/ "./src/util/Define.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeObject", function() { return TypeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefineProperty", function() { return DefineProperty; });
/* harmony import */ var _decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/decorator/SettleDecorator.ts");
/* harmony import */ var _decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/decorator/FieldDecorator.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class TypeObject {}

__decorate([Object(_decorator_FieldDecorator__WEBPACK_IMPORTED_MODULE_1__["Field"])(String, "@type")], TypeObject.prototype, "type", void 0);

function DefineProperty(array, name, cls, index, root) {
  if (index == null) index = array.length;
  if (root == null) root = array;
  Object.defineProperty(array, name, {
    get: function () {
      let prop = root[index];

      if (prop == null) {
        root[index] = prop = Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["GetSettler"])(null, cls, index, root);
      }

      return prop;
    },
    set: function (value) {
      let prop = root[index];

      if (prop == null) {
        root[index] = prop = Object(_decorator_SettleDecorator__WEBPACK_IMPORTED_MODULE_0__["GetSettler"])(null, cls, index, root);
      }

      prop.eq(value);
    }
  });
}

/***/ }),

/***/ "./src/util/Delay.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return Delay; });
class Delay {
  constructor(arg) {
    this.arg = arg;
  }

  get origin() {
    return this.arg;
  }

  get delay() {
    return this.get();
  }

  get() {
    return this.arg;
  }

}

/***/ }),

/***/ "./src/util/Exception.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendsException", function() { return ExtendsException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullException", function() { return NullException; });
const ExtendsException = Error("[继承类必须实现细节]");
const NullException = Error("[这里不能使用空值]");

/***/ }),

/***/ "./src/util/Prototype.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prototype", function() { return Prototype; });
class Prototype {
  static IsProtetype(value, prototype) {
    return value instanceof prototype;
  }

  static GetPrototypeListByInst(target) {
    return this.GetPrototypeList(target.constructor);
  }

  static GetBasePrototypeByInst(target) {
    return this.GetBasePrototype(target.constructor);
  }

  static GetBasePrototype(target) {
    let list = this.GetPrototypeList(target);
    if (list == null || list.length == 0) return Object;else return list[list.length - 1];
  }

  static GetPrototypeList(target) {
    if (target == null) return null;
    if (target == Number || target == String || target == Boolean) return [target];
    let that = this;

    if (!this.prototypeMap.has(target)) {
      let extendsList = [];
      let typeList = [];
      let proto = target.__proto__;
      let ctor = target;

      while (true) {
        if (ctor.prototype && ctor.prototype.__proto__ !== Object.prototype) {
          extendsList.push(proto);
          typeList.push(ctor);
          typeList.forEach(type => {
            that.AddPrototype(type, proto);
          });
          ctor = proto;
          proto = proto.__proto__;
        } else {
          break;
        }
      }
    }

    let values = this.prototypeMap.get(target);

    if (values) {
      return Array.from(values);
    } else {
      return [];
    }
  }

  static AddPrototype(tpye, prototype) {
    let extendSet;

    if (this.prototypeMap.has(tpye)) {
      extendSet = this.prototypeMap.get(tpye);
    } else {
      extendSet = new Set();
      this.prototypeMap.set(tpye, extendSet);
    }

    extendSet.add(prototype);
  }

  static HasPrototypeList(target) {
    if (this.prototypeMap.has(target)) {
      return true;
    } else {
      return false;
    }
  }

}
Prototype.prototypeMap = new Map();

/***/ }),

/***/ "./src/util/Util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

var Utils;

(function (Utils) {
  function GetValidArr(arr, writer, condition, boolArr) {
    if (!arr || arr.length == 0) {
      if (writer != null) {
        writer.int32(0);
      }

      return [];
    }

    let result = [];
    if (!condition) condition = value => {
      return value != null;
    };
    let current;
    let count;
    let bit;
    let value;
    let len;
    len = arr.length;
    count = 0;
    bit = 0;
    current = -1;

    if (boolArr == null) {
      boolArr = [];
    }

    for (let i = 0; i < len; i++) {
      if (count % 32 == 0) {
        boolArr.push(0);
        bit = 1;
        current += 1;
      }

      count += 1;
      value = arr[i];

      if (condition(value)) {
        result.push(i);
      } else {
        boolArr[current] += bit;
      }

      bit *= 2;
    }

    if (writer != null) {
      writer.int32(len);

      for (let i = 0; i < boolArr.length; i++) {
        writer.uint32(boolArr[i]);
      }
    }

    return result;
  }

  Utils.GetValidArr = GetValidArr;

  function ParseValidArr(reader, method, cls, boolArr) {
    let count = reader.int32();
    let arr;

    if (cls == null) {
      arr = new Array(count);
    } else {
      arr = new cls(count);
    }

    if (count == 0) return arr;
    if (boolArr == null) boolArr = [];
    let length = (count >> 5) + 1;
    let check;
    let tmp = 0;

    for (let i = 0; i < length; i++) {
      check = reader.uint32();

      if (check != 0) {
        while (check > 0) {
          if ((check & 1) != 0) {
            if (boolArr) boolArr.push(tmp);
          }

          tmp += 1;
          check = Math.floor(check / 2);
        }
      }
    }

    let invoke;

    if (method) {
      invoke = method;
    } else {
      invoke = isExist => {
        return isExist;
      };
    }

    let isExist;

    if (boolArr.length != 0) {
      let skip = boolArr.shift();

      for (let i = 0; i < count; i++) {
        if (skip != null && skip == i) {
          skip = boolArr.shift();
          isExist = false;
        } else {
          isExist = true;
        }

        arr[i] = invoke.call(this, isExist, i, arr);
      }
    } else {
      for (let i = 0; i < count; i++) {
        arr[i] = invoke.call(this, true, i, arr);
      }
    }

    return arr;
  }

  Utils.ParseValidArr = ParseValidArr;

  function Clone(obj) {
    let loopMap = new Map();

    let cp = function (obj, depth) {
      if (!obj) return obj;
      let ins;

      if (depth) {
        if (depth > 100) {
          return null;
        }
      } else {
        depth = 1;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj)) {
        ins = [];

        for (let i = 0; i < obj.length; i++) {
          ins.push(cp(obj[i], depth + 1));
        }

        return ins;
      }

      if (obj instanceof Map) {
        ins = new Map();
        obj.forEach((v, k) => {
          ins.set(cp(k, depth + 1), cp(v, depth + 1));
        });
        return ins;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj)) {
        if (loopMap.has(obj)) {
          return loopMap.get(obj);
        }

        ins = new obj.constructor();
        loopMap.set(obj, ins);
        let p;
        let q;

        for (let item in obj) {
          p = item;
          q = obj[item];
          if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(q)) continue;
          ins[p] = cp(q, depth + 1);
        }

        return ins;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj)) {
        return obj;
      }

      return obj;
    };

    return cp(obj, 0);
  }

  Utils.Clone = Clone;

  function Contrast(a, b, arr, isDetail) {
    let loopMap = new Map();
    if (!arr) arr = [];

    let diff = function (objA, objB, depth, arr, root, prop, isDetail) {
      let isDiff;

      if (isDetail) {
        isDiff = true;
      } else {
        isDiff = false;
      }

      let report = "";

      if (!objA) {
        if (!objB) {
          report += "\"=\"";
        } else {
          arr.push({
            root: root,
            prop: prop,
            a: objA,
            b: objB
          });
          report += "\"!\"";
          isDiff = true;
        }

        if (!isDiff) report = "";
        return report;
      }

      if (depth) {
        if (depth > 100) {
          return null;
        } else {}
      } else {
        depth = 1;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(objA)) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(objB) && objA.length == objB.length) {
          let len = objA.length;
          let inside = "";

          for (let i = 0; i < len; i++) {
            let str = "";
            str += diff(objA[i], objB[i], depth + 1, arr, objA, i, isDetail);

            if (str != "") {
              isDiff = true;
              inside += str;
              if (i != len - 1) inside += ",";
            }
          }

          report += "[" + '\n' + inside + "]";
        } else {
          arr.push({
            root: root,
            prop: prop,
            a: objA,
            b: objB
          });
          report += "\"!\"";
          isDiff = true;
        }

        report += '\n';
        if (!isDiff) report = "";
        return report;
      }

      if (objA instanceof Map) {
        if (objB instanceof Map && objA.size == objB.size) {
          let valueA = objA.values();
          let valueB = objA.values();
          let keyA = objA.keys();
          let keyB = objA.keys();
          let len = objA.size;
          let inside = "";

          for (let i = 0; i < len; i++) {
            let str = "";
            str += diff(keyA.next(), keyB.next(), depth + 1, arr, objA, i, isDetail);
            if (str != "") isDiff = true;
            inside += "\"key\" :" + str;
            str = "";
            str += diff(valueA.next(), valueB.next(), depth + 1, arr, objA, i, isDetail);
            if (str != "") isDiff = true;
            inside += "\"value\" :" + str;

            if (isDiff) {
              inside = "{" + '\n' + inside + "}";
            }

            if (i != len - 1) inside += ",";
          }

          report += "{" + '\n' + inside + "}";
        } else {
          arr.push({
            root: root,
            prop: prop,
            a: objA,
            b: objB
          });
          report += "\"!\"";
          isDiff = true;
        }

        report += '\n';
        if (!isDiff) report = "";
        return report;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(objA)) {
        if (loopMap.has(objA)) {
          return loopMap.get(objA);
        }

        if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(objB)) {
          let pArrA = [];
          let pArrB = [];
          let lenA = 0;
          let qArrA = [];
          let qArrB = [];
          let lenB = 0;

          for (let item in objA) {
            pArrA.push(item);
            qArrA.push(objA[item]);
            lenA += 1;
          }

          for (let item in objB) {
            pArrB.push(item);
            qArrB.push(objB[item]);
            lenB += 1;
          }

          if (lenA == lenB) {
            for (let i = 0; i < lenA; i++) {
              if (pArrA[i] != pArrB[i]) {
                arr.push({
                  root: root,
                  prop: prop,
                  a: objA,
                  b: objB
                });
                report += "\"!\"";
                isDiff = true;
                break;
              }
            }

            if (!isDiff) {
              let inside = "";

              for (let i = 0; i < lenA; i++) {
                let str = "";
                str += diff(qArrA[i], qArrB[i], depth + 1, arr, objA, pArrA[i], isDetail);

                if (str != "") {
                  isDiff = true;
                  inside += "\"" + pArrA[i] + "\" : " + str;
                }
              }

              report += "{" + "\n" + inside + "}";
            }
          } else {
            arr.push({
              root: root,
              prop: prop,
              a: objA,
              b: objB
            });
            report += "\"!\"";
            isDiff = true;
          }
        } else {
          arr.push({
            root: root,
            prop: prop,
            a: objA,
            b: objB
          });
          report += "\"!\"";
          isDiff = true;
        }

        report += '\n';
        if (!isDiff) report = "";
        loopMap.set(objA, report);
        return report;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(objA)) {
        return report;
      }

      if (objA == objB) {
        report += "\"=\"";
      } else {
        arr.push({
          root: root,
          prop: prop,
          a: objA,
          b: objB
        });
        report += "\"!\"";
        isDiff = true;
      }

      if (!isDiff) report = "";
      return report;
    };

    return diff(a, b, 0, arr, null, null, isDetail);
  }

  Utils.Contrast = Contrast;
})(Utils || (Utils = {}));

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=peng-field.min.js.map

/***/ }),

/***/ "./node_modules/peng-field/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const field = __webpack_require__("./node_modules/peng-field/dist/peng-field.min.js");
module.exports = field;

/***/ }),

/***/ "./node_modules/peng-ioc/dist/peng-ioc.min.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);class i{constructor(t,e=null){this._value=t,this._next=e}set value(t){this._value=t}get value(){return this._value}set next(t){this._next=t}get next(){return this._next}}class r{constructor(){this._size=0,this._header=new i(null)}top(){return 0===this._size?null:this._header.next.value}push(t){let e=new i(t);e.next=this._header.next,this._header.next=e,this._size++}pop(){if(0===this._size)return null;let t=this._header.next;return this._header.next=t.next,this._size--,t.next=null,t.value}clear(){let t,e=this._header;for(;0!==this._size;)e=t=e.next,t.next=null,this._size--;this._header=null}get isEmpty(){return 0===this._size}get size(){return this._size}}var s,o,l,a;!function(t){t.Context="Context",t.Root="Root"}(s||(s={})),function(t){t.IC_ERROR="can't implement class that is only as interface"}(o||(o={}));class u{}class c{get key(){return this._key}get value(){return this._value}get name(){return this._name}constructor(t){this._resolver=t,this._key=null,this._value=null,this._name=null}bind(t){return this._key=c.checkAbstract(t),this}to(t){return this._value=t,null!=this._resolver&&this._resolver(this),this}toName(t){return this._name=t,null!=this._resolver&&this._resolver(this),this}get isKeyConstructor(){return c.isConstructor(this._key)}get isValueConstructor(){return c.isConstructor(this._value)}static isConstructor(t){return"function"==typeof t&&!!t.prototype}static checkAbstract(t){let e,n=t.prototype;return e=null!=n&&null!==n.constructorName&&void 0!==n.constructorName?n.constructorName:t}}!function(t){t.NULL=Symbol.for("NULL").toString()}(l||(l={}));class h{constructor(){this.init()}init(){this._bindings=new Map}resolver(t){let e=t.key;this.resolveBinding(t,e)}resolveBinding(t,e){let n,i=null==t.name?l.NULL:t.name;if(this._bindings.has(e)){if((n=this._bindings.get(e)).has(i)){let e=n.get(i);e!=t&&(e.value||n.delete(i))}}else n=new Map,this._bindings.set(e,n);n.has(l.NULL)&&n.get(l.NULL)===t&&n.delete(l.NULL),n.has(i)||n.set(i,t)}bind(t){let e=this.getRawBinding();return e.bind(t),e}unbind(t,e){let n=c.checkAbstract(t);if(this._bindings.has(n)){let t,i=this._bindings.get(n);t=e||l.NULL,i.has(t)&&i.delete(t)}}getRawBinding(){return new c(this.resolver.bind(this))}getBinding(t,e){if(this._bindings.has(t)){let n=this._bindings.get(t);return e||(e=l.NULL),n.has(e)?n.get(e):null}}getBindingMap(t){if(this._bindings.has(t))return this._bindings.get(t)}}class d{static isProtetype(t,e){return t instanceof e}static getPrototypeListByInst(t){return this.getPrototypeList(t.constructor)}static getPrototypeList(t){let e=this;if(!this.prototypeMap.has(t)){let n=[],i=[],r=t.__proto__,s=t;for(;s.prototype&&s.prototype.__proto__!==Object.prototype;)n.push(r),i.push(s),i.forEach(t=>{e.AddPrototype(t,r)}),s=r,r=r.__proto__}let n=this.prototypeMap.get(t);return n?Array.from(n):[]}static AddPrototype(t,e){let n;this.prototypeMap.has(t)?n=this.prototypeMap.get(t):(n=new Set,this.prototypeMap.set(t,n)),n.add(e)}static hasPrototypeList(t){return!!this.prototypeMap.has(t)}}d.prototypeMap=new Map;class g{get list(){return this._list}set list(t){this._list=t}}class p extends c{get property(){return this._property}toProperty(t){return this._property=t,null!=this._resolver&&this._resolver(this),this}to(t){return super.to(t)}toName(t){return super.toName(t)}}class f extends h{init(){this._bindings=new Map,this._decoratorClassBufferMap=new Map}has(t){return this._bindings.has(t)}get(t){if(!(t instanceof Object))throw new Error("proto must is a object but"+t+"is not");let e=t,n=this._decoratorClassBufferMap.get(e);if(!n){let t=d.getPrototypeList(e);t.push(e),n=new g;let i,r,s=[],o=this,l=[];for(let e=0;e<t.length;e++)(i=o.getBindingMap(t[e]))&&i.size>0&&i.forEach(function(t){l.push(t)});for(let t=0;t<l.length;t++)if((r=l[t])&&r.size>0){let t=r.values();for(let e=0;e<r.size;e++){let e=t.next();s.push(e.value)}}n.list=s,this._decoratorClassBufferMap.set(e,n)}return n}bind(t){return super.bind(t)}getBinding(t,e){return super.getBinding(t,e)}getRawBinding(){return new p(this.resolver.bind(this))}resolver(t){super.resolver(t)}resolveBinding(t,e){if(!t.property)return;let n,i,r=null==t.name?l.NULL:t.name;if(this._bindings.has(e)){if((n=this._bindings.get(e)).has(r)){let e=n.get(r);if(e.has(t.property)){let i=e.get(t.property);i&&i!=t&&(i.value||n.delete(r))}}}else n=new Map,this._bindings.set(e,n);if(n.has(l.NULL)){let e=n.get(l.NULL);if(e.has(t.property)){e.get(t.property);t.property===t&&e.delete(l.NULL)}}n.has(r)?(i=n.get(r)).has(t.property)||i.set(t.property,t):((i=new Map).set(t.property,t),n.set(r,i))}getBindingMap(t){if(this._bindings.has(t))return this._bindings.get(t)}}class _{constructor(){}get(t,e){if(null==t)throw new Error("InjectorFactory cannot act on null binding");switch(t.getBindingType()){case"Singleton":return this.singletonOf(t,e);case"Value":return this.getValueOf(t)}return this.instanceOf(t,e)}instanceOf(t,e){if(null!=t.value)return this.createFromValue(t.value,e);let n=this.generateImplicit(t.key,e);return this.createFromValue(n,e)}createFromValue(t,e){let n=null;try{n=null==e||0==e.length?new t:new t(e)}catch(t){}return n}generateImplicit(t,e){if(!t)return null;if(c.isConstructor(t))return this.createFromValue(t,e);throw new Error("InjectorFactory can't instantiate an Interface or Abstract Class. Class: "+t.ToString())}singletonOf(t,e){if(null!=t.value){let n=this.createFromValue(t.value,e);if(null==n)return null;t.setValue(n)}else t.setValue(this.generateImplicit(t.key,e));return t.value}getValueOf(t){return t.value}}(a||(a={})).DECORATOR_CLASS_BINDER=new f;class m{constructor(){this.factory=null,this.binder=null,this.injectClassBinder=null,this.factory=new _}uninject(t,e){if(!this.binder||!t)throw new Error("Attempt to inject into Injector without a Binder or null instance");let n=typeof t;if("string"===n||"boolean"===n||"number"===n||"symbol"===n||"undefined"===n||"function"===n)return t;e||(e=t.constructor);let i=this.injectClassBinder.get(e);this.decoratorUnInject(t,i)}decoratorUnInject(t,e){let n=this;e.list.forEach(e=>{n.binder.getBinding(e.value,e.name)&&(t[e.property]=null)})}instantiate(t,e){if(!this.binder||!this.factory)throw new Error("Attempt to instantiate from Injector without a Binder or inject into Injector without a Factory");let n=null,i=null;if(t.isValueConstructor?n=t.value:i=t.value,!n&&t.isKeyConstructor&&(n=t.key),!i&&n){let n=t.getArgs();i=this.factory.get(t,n),e&&this.tryInject(t,i)}return i}tryInject(t,e){return null!=e&&(t.isInject()&&(e=this.inject(e)),"Singleton"!=t.getBindingType()&&"Value"!=t.getBindingType()||t.toInject(!1)),e}inject(t,e){if(!this.binder||!t)throw new Error("Attempt to inject into Injector without a Binder or null instance");let n=typeof t;if("string"===n||"boolean"===n||"number"===n||"symbol"===n||"undefined"===n||"function"===n)return t;e||(e=t.constructor);let i=this.injectClassBinder.get(e);return this.decoratorInject(t,i),t}decoratorInject(t,e){let n=this;e.list.forEach(e=>{let i=n.binder.getBinding(e.value,e.name);if(i){let r=n.getInjectValue(i.key,i.name);t[e.property]=r}})}getInjectValue(t,e){let n=this.binder.getBinding(t,e);if(!n)return null;if("Value"===n.getBindingType()){if(n.isInject()){let t=this.inject(n.value);return n.toInject(!1),t}return n.value}return"Singleton"==n.getBindingType()?((n.isValueConstructor||null==n.value)&&this.instantiate(n,!0),n.value):this.instantiate(n,!0)}}class y extends c{constructor(){super(...arguments),this._isUnbind=!1,this._bindingType="Default",this._isInject=!0}isInject(){return this._isInject}getArgs(){return this._args}getBindingType(){return this._bindingType}isUnbind(){return this._isUnbind}toArgs(){return this._args=arguments,null!=this._resolver&&this._resolver(this),this}toSingleton(){return"Value"===this._bindingType?this:(this._bindingType="Singleton",null!=this._resolver&&this._resolver(this),this)}unBind(){return this._isUnbind=!0,this}toValue(t){return this._bindingType="Value",this.setValue(t),this}setValue(t){return this.to(t),this}toInject(t){return this._isInject=t,this}to(t){return super.to(t)}toName(t){return super.toName(t)}}const v=a.DECORATOR_CLASS_BINDER;class b{get constructorName(){return"IInjectBinder"}}class B extends h{init(){super.init(),this._injector=new m,this._injector.binder=this,this._injector.injectClassBinder=v}getInjector(){return this._injector}getInstance(t,e){e||(e=l.NULL);let n=this.getBinding(c.checkAbstract(t),e);if(null==n)throw new Error("InjectionBinder has no binding for:\n\tkey: "+t+"\nname: "+e);let i=this._injector.instantiate(n,!1);return this._injector.tryInject(n,i),i}inject(t,e){this.getInjector().inject(t,e)}getBinding(t,e){return super.getBinding(t,e)}bind(t){return super.bind(t)}getRawBinding(){return new y(this.resolver.bind(this))}unbindAllMark(){let t=this,e=[];this._bindings.forEach(t=>{t.forEach(t=>{t.isUnbind()&&e.push(t)})}),e.forEach(e=>{t.unbind(e.key,e.name)})}}const j=a.DECORATOR_CLASS_BINDER;function C(){switch(arguments.length){case 0:break;case 1:return I(arguments[0]);case 2:return O(arguments[0],arguments[1])}}const I=t=>(function(e,n){w(e,t,n)}),O=(t,e)=>(function(n,i){w(n,t,i,e)});function w(t,e,n,i){j.bind(t.constructor).to(c.checkAbstract(e)).toProperty(n).toName(i)}var N,L,x,P=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};!function(t){t[t.EXCEPTION=0]="EXCEPTION",t[t.WARNING=1]="WARNING",t[t.IGNORE=2]="IGNORE"}(N||(N={})),function(t){t[t.ONE=0]="ONE",t[t.MANY=1]="MANY",t[t.POOL=2]="POOL"}(L||(L={})),function(t){t[t.INCREMENT=0]="INCREMENT",t[t.DOUBLE=1]="DOUBLE"}(x||(x={}));class E{constructor(){this.instancesAvailable=new r,this.instancesInUse=new Set}Pool(){this.size=0,this.constraint=L.POOL,this.uniqueValues=!0,this.overflowBehavior=N.EXCEPTION,this.inflationType=x.DOUBLE}bind(t){this.poolType=t}add(t){return this.failIf(!d.isProtetype(t,this.poolType)," Pool Type mismatch. Pools must consist of a common concrete type.\n\t\tPool type: "+this.poolType+"\n\t\tMismatch type: "+t),this._instanceCount++,this.instancesAvailable.push(t),this}addList(t){return t&&t.length>0&&t.forEach(t=>{this.add(t)}),this}remove(t){return this._instanceCount--,this.removeInstance(t),this}removeList(t){return t&&t.length>0&&t.forEach(t=>{this.remove(t)}),this}get value(){return this.getInstance()}get instanceCount(){return this._instanceCount}getInstance(){if(this.instancesAvailable.size>0){let t=this.instancesAvailable.pop();return this.instancesInUse.add(t),t}let t=0;if(this.size>0){if(0!=this.instanceCount)return this.failIf(this.overflowBehavior==N.EXCEPTION,"A pool has overflowed its limit.\n\t\tPool type: "+this.poolType),this.overflowBehavior,N.WARNING,null;t=this.size}else t=0==this.instanceCount||this.inflationType==x.INCREMENT?1:this.instanceCount;if(t>0){this.failIf(null==this.instanceProvider,"A Pool of type: "+this.poolType+" has no instance provider.");for(let e=0;e<t;e++){let t=this.instanceProvider.getInstance(this.poolType);this.add(t)}return this.getInstance()}return null}returnInstance(t){this.instancesInUse.has(t)&&(t.restore(),this.instancesInUse.delete(t),this.instancesAvailable.push(t))}clean(){this.instancesAvailable.clear(),this.instancesInUse=new Set,this._instanceCount=0}get available(){return this.instancesAvailable.size}restore(){this.clean(),this.size=0}retain(){this.isRetain=!0}release(){this.isRetain=!1}removeInstance(t){this.failIf(t!=this.poolType,"Attempt to remove a instance from a pool that is of the wrong Type:\n\t\tPool type: "+this.poolType.toString()+"\n\t\tInstance type: "+t.toString()),this.instancesInUse.has(t)?this.instancesInUse.delete(t):this.instancesAvailable.pop()}failIf(t,e){if(t)throw new Error(e)}}P([C(class{get constructorName(){return"IInstanceProvider"}})],E.prototype,"instanceProvider",void 0);class A extends c{get isSequence(){return this._isSequence}get isOnce(){return this._isOnce}to(t){return super.to(t)}toName(t){return super.toName(t)}Pooled(){return this.isPooled=!0,this._resolver(this),this}}class S{constructor(){this._listener=[],this._onceListener=[]}dispatch(...t){let e,n,i=this,r=null;return i._listener&&0!=i._listener.length&&this._listener.forEach(function(n){null!==(e=n(i,...t))&&(r=[],Array.isArray(e)?r.push(...e):r.push(e))}),i._onceListener&&0!=i._onceListener.length&&this._listener.forEach(function(e){null!==(n=e(i,...t))&&(r||(r=[]),Array.isArray(n)?r.push(...n):r.push(n))}),this._onceListener.length=0,r}dispatchSole(...t){let e=this,n=null;return e._listener&&0!=e._listener.length&&this._listener.forEach(function(i){n=i(e,...t)}),e._onceListener&&0!=e._onceListener.length&&this._listener.forEach(function(i){n=i(e,...t)}),this._onceListener.length=0,0!=n.length?n[0]:null}dispatchAsync(...t){let e,n=this,i=[];return n._listener&&0!=n._listener.length&&n._listener.forEach(function(r){(e=r(n,...t))&&i.push(...e)}),n._onceListener&&0!=n._onceListener.length&&n._listener.forEach(function(r){(e=r(n,...t))&&i.push(...e)}),this._onceListener.length=0,Promise.all(i)}addListener(t){this._listener=this.addUnique(this._listener,t)}addOnceListener(t){this._onceListener=this.addUnique(this._onceListener,t)}removeAllListeners(){this._listener.length=0,this._onceListener.length=0}addUnique(t,e){if(t){let n=!1;for(let i=0;i<t.length;i++)if(t[i]===e){n=!0;break}n||t.push(e)}return t}getTypes(){return[]}}class M{get constructorName(){return"ICommandBinder"}}var R,T=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};class U{get constructorName(){return"ICommand"}}class k{constructor(){this.sequenceId=null,this.data=null,this.args=null,this._clean=!1,this._retain=!1}deploy(){this._clean=!1}clean(){this._clean=!0}get isClean(){return this._clean}retain(){this._retain=!0}release(){this._retain=!1}get isRetain(){return this._retain}restore(){this.injectBinder.getInjector().uninject(this),this.clean()}execute(...t){return null}}T([C(b)],k.prototype,"injectBinder",void 0),T([C(M)],k.prototype,"commandBinder",void 0),function(t){t.COMMAND_POOL="COMMAND_POOL"}(R||(R={}));class D{get constructorName(){return"ISignalManager"}}class V{constructor(){this._signal_dic=new Map,this.info="this is a signal manager"}finish(t){}get(t){if(this._signal_dic.has(t))return this._signal_dic.get(t);{let e=new S;return"string"==typeof t&&(e.symbol=t),this._signal_dic.set(t,e),e}}delete(t){if(this._signal_dic.has(t))return this._signal_dic.delete(t)}}class q extends h{constructor(){super(...arguments),this.pools=new Map,this.activeCommands=new Set,this.activeSequences=new Map,this.usePooling=!1}getPool(t){return this.pools.has(t)?this.pools.get(t):null}resolver(t){if(super.resolver(t),this.usePooling&&t.isPooled&&null!=t.value){let e=this,n=t.value;0===n.length&&(n=[]).push(t.value),n&&n.length>0&&n.forEach(t=>{if(0==e.pools.has(t)){let n=this.makePoolFromType(t);e.pools.set(t,n)}})}}makePoolFromType(t){let e=t;this.injectBinder.bind(t).to(t),this.injectBinder.bind(E).to(E).toName(R.COMMAND_POOL);let n=this.injectBinder.getInstance(E,R.COMMAND_POOL);return this.injectBinder.unbind(E,R.COMMAND_POOL),n.bind(e),n}getRawBinding(){return new A(this.resolver.bind(this))}bind(t){return super.bind(t)}invokeCommand(t,e,n,i){let r=this.createCommand(t,n);return r.sequenceId=i,this.trackCommand(r,e),r.return=this.executeCommand(r,n),r}createCommand(t,e){let n=this.getCommand(t);if(null==n){let t="A Command ";throw null!=e&&(t+="tied to data "+e.toString()),t+=" could not be instantiated.\nThis might be caused by a null pointer during instantiation or failing to override Execute (generally you shouldn't have constructor code in Commands).",new Error(t)}return n.data=e,n}getCommand(t){if(this.usePooling&&this.pools.has(t)){let e=this.pools.get(t),n=e.getInstance();return n?n.isClean&&(this.injectBinder.getInjector().inject(n),n.deploy()):(n=this.injectBinder.getInstance(t,null),e.add(n)),n}{this.injectBinder.bind(U).to(t);let e=this.injectBinder.getInstance(U,null);return this.injectBinder.unbind(U,null),e}}trackCommand(t,e){e.isSequence?this.activeSequences.set(t,e):this.activeCommands.add(t)}executeCommand(t,e){if(null!=t)return t.execute(...e)}onDispose(t,...e){let n,i=[],r=this.getBinding(t,null);if(null!=r)if(r.isSequence)null!==(n=this.next(r,e,0))&&i.push(...n);else{if(!Array.isArray(r.value))return this.next(r,e,0);for(let t=0;t<r.value.length;t++)null!==(n=this.next(r,e,t))&&i.push(...n)}return i.length>0?i:null}next(t,e,n){let i;Array.isArray(t.value)?n<t.value.length&&(i=t.value[n]):0===n&&(i=t.value);let r=null;if(i){let s,o=this.invokeCommand(i,t,e,n),l=o.return;o.return=null,null!==l&&(r=[]).push(l),null!==(s=this.releaseCommand(o))&&(r||(r=[]),r.push(s))}else this.disposeOfSequencedData(e),t.isOnce&&this.unbind(t,null);return r}disposeOfSequencedData(t){}releaseCommand(t){if(!t.isRetain){let e=t.constructor;if(this.usePooling&&this.pools.has(e)&&this.pools.get(e).returnInstance(t),this.activeCommands.has(t))this.activeCommands.delete(t);else if(this.activeSequences.has(t)){let e=this.activeSequences.get(t),n=t.data;return this.activeSequences.delete(t),this.next(e,n,t.sequenceId+1)}}return null}}(function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);s>3&&o&&Object.defineProperty(e,n,o)})([C(b)],q.prototype,"injectBinder",void 0);class z extends q{constructor(){super(...arguments),this.onDisposeBind=this.onDispose.bind(this),this.usePooling=!0}resolveBinding(t,e){if(super.resolveBinding(t,e),this._bindings.has(e)){e.addListener(this.onDisposeBind)}}bind(t){let e=null;if(c.isConstructor(t)){let n=this.injectBinder.getBinding(t,null);null==n&&(n=this.injectBinder.bind(t)).toSingleton(),e=this.injectBinder.getInstance(t,null)}else t instanceof S&&(e=t);if(!e){e=this.injectBinder.getInstance(D,null).get(t)}return super.bind(e)}getBinding(t,e){let n;return n=c.isConstructor(t)?this.injectBinder.getInstance(t,e):t,super.getBinding(n,e)}invokeCommand(t,e,n,i){e.key;let r=this.createCommandForSignal(t,n);return r.sequenceId=i,this.trackCommand(r,e),r.return=this.executeCommand(r,n),r}createCommandForSignal(t,e){if(null!=e){new Set}let n=this.getCommand(t);return n.data=e,n}}class F{get injectBinder(){return this._injectBinder||(this._injectBinder=new B),this._injectBinder}set crossContextBinder(t){this._crossContextBinder=t}get crossContextBinder(){return this._crossContextBinder}get commandBinder(){return this._commandBinder}getRoot(){return this.root}constructor(t){null==F.firstContext||null==F.firstContext.getRoot()?(F.firstContext=this,this.crossContextBinder=this.injectBinder):F.firstContext.addCrossContext(this),this.setRoot(t),this.addCore(),this.start()}getIns(t,e){return this.injectBinder.getInstance(t,e)}addCrossContext(t){return t.crossContextBinder=this.injectBinder,this}removeCrossContext(t){}setRoot(t){return this.root=t,this}restart(){return this.addCore(),this.start(),this}start(){return this.instantiateCore(),this.mapBindings(),this.postBindings(),this.launch(),this}launch(){this.injectBinder.inject(this),this.injectBinder.inject(this.root)}instantiateCore(){this._commandBinder=this.injectBinder.getInstance(M,null)}mapBindings(){}postBindings(){}addCore(){this.injectBinder.bind(b).toValue(this.injectBinder),this.injectBinder.bind(M).to(z).toSingleton(),this.injectBinder.bind(D).to(V).toSingleton(),this.injectBinder.bind(s.Context).toValue(this),this.injectBinder.bind(s.Root).toValue(this.root)}}class G{get constructorName(){return"IRoot"}}n.d(e,"BindingConst",function(){return l}),n.d(e,"IConstructorName",function(){return u}),n.d(e,"CommonEnum",function(){return s}),n.d(e,"Stack",function(){return r}),n.d(e,"Prototype",function(){return d}),n.d(e,"Binding",function(){return c}),n.d(e,"Binder",function(){return h}),n.d(e,"DecoratorClassBinding",function(){return p}),n.d(e,"DecoratorClassBinder",function(){return f}),n.d(e,"DecoratorConst",function(){return a}),n.d(e,"InjectFactory",function(){return _}),n.d(e,"Injector",function(){return m}),n.d(e,"InjectBinding",function(){return y}),n.d(e,"InjectBinder",function(){return B}),n.d(e,"inject",function(){return C}),n.d(e,"Pool",function(){return E}),n.d(e,"CommandConst",function(){return R}),n.d(e,"CommandBinding",function(){return A}),n.d(e,"CommandBinder",function(){return q}),n.d(e,"Command",function(){return k}),n.d(e,"SignalCommandBinder",function(){return z}),n.d(e,"SignalManager",function(){return V}),n.d(e,"NSignalManager",function(){return D}),n.d(e,"NCommandBinder",function(){return M}),n.d(e,"NInjectBinder",function(){return b}),n.d(e,"NRoot",function(){return G}),n.d(e,"Context",function(){return F})}])});
//# sourceMappingURL=peng-ioc.min.js.map

/***/ }),

/***/ "./node_modules/peng-ioc/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ioc = __webpack_require__("./node_modules/peng-ioc/dist/peng-ioc.min.js");

module.exports = ioc;

/***/ }),

/***/ "./src/behavior/PlayerBehavior.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerBehavior", function() { return PlayerBehavior; });
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/peng-ioc/index.js");
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(peng_ioc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _func_SearchFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/func/SearchFunc.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let PlayerBehavior = class PlayerBehavior extends peng_field__WEBPACK_IMPORTED_MODULE_0__["BehaviorAttribute"] {
  init() {
    this.position.eq(new peng_field__WEBPACK_IMPORTED_MODULE_0__["Vector2"]());
  }

};

__decorate([Object(peng_ioc__WEBPACK_IMPORTED_MODULE_1__["inject"])(_func_SearchFunc__WEBPACK_IMPORTED_MODULE_2__["SerachFunc"])], PlayerBehavior.prototype, "sFun", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(peng_field__WEBPACK_IMPORTED_MODULE_0__["Vector2"], "position")], PlayerBehavior.prototype, "position", void 0);

PlayerBehavior = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("Player")], PlayerBehavior);


/***/ }),

/***/ "./src/behavior/WorldBehavior.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldBehavior", function() { return WorldBehavior; });
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _define_MissileDefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/define/MissileDefine.ts");
/* harmony import */ var _define_GeometryDefine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/define/GeometryDefine.ts");
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/peng-ioc/index.js");
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(peng_ioc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _func_SearchFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/func/SearchFunc.ts");
/* harmony import */ var _func_MathFunc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/func/MathFunc.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WorldBehavior = class WorldBehavior extends peng_field__WEBPACK_IMPORTED_MODULE_0__["BehaviorAttribute"] {
  init() {
    this.position.eq(new peng_field__WEBPACK_IMPORTED_MODULE_0__["Vector2"]());
  }

  update(delta) {
    for (let i = 0; i < this.missile.length; i++) {
      let missile = this.missile[i];
      if (missile == null) continue;
      let health = missile.value.health;
      let position = missile.value.position;
      let rotate = missile.value.rotate;
      let range = missile.value.range;
      let speed = missile.value.speed;
      let serial = missile.value.serial;

      if (health.value > 0) {
        health.sub(1 * delta * 0.001);
        let v = new peng_field__WEBPACK_IMPORTED_MODULE_0__["Vector2"](speed.value * Math.cos(rotate.value) * delta * 0.001, speed.value * Math.sin(rotate.value) * delta * 0.001);
        position.add(v);
        let area = new _define_GeometryDefine__WEBPACK_IMPORTED_MODULE_2__["Circle"](position.value.x, position.value.y, range.value);
        continue;
        this.sFun.search(area, [peng_field__WEBPACK_IMPORTED_MODULE_0__["StatusEnum"].isEntity]).then(arr => {
          for (let m of arr) {
            if (this.root != m) {
              this.missile.remove(i);
              break;
            }
          }
        });
      } else {
        this.missile.remove(i);
      }
    }
  }

};

__decorate([Object(peng_ioc__WEBPACK_IMPORTED_MODULE_3__["inject"])(_func_SearchFunc__WEBPACK_IMPORTED_MODULE_4__["SerachFunc"])], WorldBehavior.prototype, "sFun", void 0);

__decorate([Object(peng_ioc__WEBPACK_IMPORTED_MODULE_3__["inject"])(_func_MathFunc__WEBPACK_IMPORTED_MODULE_5__["MathFunc"])], WorldBehavior.prototype, "mFun", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(peng_field__WEBPACK_IMPORTED_MODULE_0__["Vector2"], "position")], WorldBehavior.prototype, "position", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(_define_MissileDefine__WEBPACK_IMPORTED_MODULE_1__["Missile"], "missile", Array)], WorldBehavior.prototype, "missile", void 0);

WorldBehavior = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("World")], WorldBehavior);


/***/ }),

/***/ "./src/command/StartCmd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartCmd; });
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-ioc/index.js");
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_ioc__WEBPACK_IMPORTED_MODULE_0__);

class StartCmd extends peng_ioc__WEBPACK_IMPORTED_MODULE_0__["Command"] {
  execute() {}

}

/***/ }),

/***/ "./src/context/MainContext.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContext; });
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-ioc/index.js");
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_ioc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _command_StartCmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/command/StartCmd.ts");
/* harmony import */ var _func_MathFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/func/MathFunc.ts");
/* harmony import */ var _func_SearchFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/func/SearchFunc.ts");




class MainContext extends peng_ioc__WEBPACK_IMPORTED_MODULE_0__["Context"] {
  constructor(root) {
    super(root);
  }

  addCore() {
    super.addCore();
    this.injectBinder.bind("inject").toValue(this.injectBinder);
  }

  mapBindings() {
    super.mapBindings();
    this.sglMgr = this.injectBinder.getInstance(peng_ioc__WEBPACK_IMPORTED_MODULE_0__["NSignalManager"]);
    this.injectBinder.bind(_func_MathFunc__WEBPACK_IMPORTED_MODULE_2__["MathFunc"]).toSingleton();
    this.injectBinder.bind(_func_SearchFunc__WEBPACK_IMPORTED_MODULE_3__["SerachFunc"]).toSingleton();
    this.commandBinder.bind("Start").to(_command_StartCmd__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  start() {
    super.start();
    this.sglMgr.get("Start").dispatch();
    return this;
  }

}

/***/ }),

/***/ "./src/context/MainRoot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootMain", function() { return RootMain; });
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-ioc/index.js");
/* harmony import */ var peng_ioc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_ioc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/context/MainContext.ts");
/* harmony import */ var _define_EntityDefine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/define/EntityDefine.ts");
/* harmony import */ var _behavior_WorldBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/behavior/WorldBehavior.ts");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _define_MissileDefine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/define/MissileDefine.ts");
/* harmony import */ var _define_TemplateDefine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/define/TemplateDefine.ts");
/* harmony import */ var _behavior_PlayerBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/behavior/PlayerBehavior.ts");
/* harmony import */ var _func_MathFunc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/func/MathFunc.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










class RootMain {
  constructor() {
    this.event = new Map();
    this.context = new _MainContext__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.lastframe = 0;
    this.frameBuffer = [];
    this.entitys = [];
    this.cmdMap = new Map();
    this.indexMap = new Map();
    this.addBuffer = [];
    this.removeBuffer = [];
    this.recycle = [];
    this.cmdMap.set("World", (actor, task, value) => {
      let world = this.entitys[0].value.getBehavior(_behavior_WorldBehavior__WEBPACK_IMPORTED_MODULE_3__["WorldBehavior"]);

      if (world != null) {
        let index = this.indexMap.get(actor);

        switch (task) {
          case "Enter":
            if (index == null) {
              this.addEntity(actor, _define_TemplateDefine__WEBPACK_IMPORTED_MODULE_6__["Template"].Player);
            }

            break;

          case "Leave":
            if (index != null) {
              this.removeEntity(actor);
            }

            break;

          case "Move":
            break;

          case "Click":
            break;
        }
      }
    });
    this.cmdMap.set("Player", (actor, task, value) => {
      let index = this.indexMap.get(actor);
      let entity = this.entitys[index];
      if (entity == null) return;
      let player = entity.value.getBehavior(_behavior_PlayerBehavior__WEBPACK_IMPORTED_MODULE_7__["PlayerBehavior"]);
      if (player == null) return;

      switch (task) {
        case "Move":
          player.position.eq(new peng_field__WEBPACK_IMPORTED_MODULE_4__["Vector2"](value[0], value[1]));
          break;

        case "Click":
          let position = new peng_field__WEBPACK_IMPORTED_MODULE_4__["Vector2"](value[0], value[1]);
          let rotate = -0.5 * Math.PI;
          let missile = Object(peng_field__WEBPACK_IMPORTED_MODULE_4__["GetConverter"])(_define_MissileDefine__WEBPACK_IMPORTED_MODULE_5__["Missile"]).parse({
            health: 5,
            range: 10,
            speed: 100,
            rotate: rotate,
            position: position,
            serial: this.mFun.number(0, 0x1000000)
          }, _define_MissileDefine__WEBPACK_IMPORTED_MODULE_5__["Missile"]);
          let index;

          for (let i = 0; i < this.world.missile.length; i++) {
            if (this.world.missile[i] == null) {
              index = i;
              break;
            }
          }

          this.world.missile.add(missile, index);
          break;
      }
    });
  }

  init() {
    this.addEntity(0, _define_TemplateDefine__WEBPACK_IMPORTED_MODULE_6__["Template"].World);
    this.disposeEntity();
  }

  start() {
    this.world = this.entitys[0].value.getBehavior(_behavior_WorldBehavior__WEBPACK_IMPORTED_MODULE_3__["WorldBehavior"]);
  }

  addEntity(serial, template) {
    this.addBuffer.push({
      serial: serial,
      template: template
    });
  }

  removeEntity(serial) {
    this.removeBuffer.push({
      serial: serial
    });
  }

  disposeEntity() {
    for (let i = 0; i < this.removeBuffer.length; i++) {
      let buffer = this.removeBuffer[i];
      let serial = buffer.serial;
      let index = this.indexMap.get(serial);
      if (index == null) return;
      let entity = this.entitys[index];
      this.indexMap.delete(serial);
      this.recycle.push(index);
      this.entitys[index] = null;
      this.emit("Leave", entity);
      console.log("[移除实体]" + serial + "[索引]" + index);
    }

    for (let i = 0; i < this.addBuffer.length; i++) {
      let buffer = this.addBuffer[i];
      let serial = buffer.serial;
      let entity = Object(peng_field__WEBPACK_IMPORTED_MODULE_4__["GetConverter"])(_define_EntityDefine__WEBPACK_IMPORTED_MODULE_2__["EntityData"]).parseShell(buffer.template);
      entity.value.serial.value = serial;
      this.register(entity);
    }

    this.addBuffer = [];
    this.removeBuffer = [];
  }

  register(entity) {
    if (entity == null) return;
    let index = entity.value.index.value;
    let serial = entity.value.serial.value;

    if (index == null) {
      index = this.recycle.pop();
      if (index == null) index = this.entitys.length;
    }

    entity.value.index.value = index;
    this.injectSkill(entity);
    this.indexMap.set(serial, index);
    this.entitys[index] = entity;
    this.emit("Enter", entity);
    console.log("[注册实体]" + serial + "[索引]" + index);
  }

  emit(event, entity) {
    let func = this.event.get(event);

    if (func != null) {
      for (let i = 0; i < func.length; i++) {
        func[i] && func[i](entity);
      }
    }
  }

  on(event, listen) {
    let func = this.event.get(event);

    if (func == null) {
      func = [];
      this.event.set(event, func);
    }

    func.push(listen);
  }

  injectSkill(operate) {
    if (!operate.value.behaviors) {
      operate.value.behaviors = new peng_field__WEBPACK_IMPORTED_MODULE_4__["OperateArray"]();
    } else {
      let skill;
      let len = operate.value.behaviors.length;

      for (let i = 0; i < len; i++) {
        skill = operate.value.behaviors[i];
        this.injectBinder.inject(skill.value);
      }
    }
  }

  update() {
    let buffer = this.frameBuffer.shift();
    if (buffer == null) return false;
    this.mFun.seed(this.lastframe);

    for (let i = 0; i < buffer.packet.length; i++) {
      let packet = buffer.packet[i];

      for (let j = 0; j < packet.commands.length; j++) {
        let cmd = packet.commands[j];
        let fun = this.cmdMap.get(cmd.type);
        fun && fun.call(this, packet.actor, cmd.task, cmd.value);
      }
    }

    for (let i = 0; i < this.entitys.length; i++) {
      let entity = this.entitys[i];
      if (entity == null) continue;
      let behaviors = entity.value.behaviors;
      if (behaviors == null) continue;

      for (let j = 0; j < behaviors.length; j++) {
        let behavior = behaviors[j];
        if (behavior == null) continue;
        behavior.value.update(buffer.delta);
      }
    }

    for (let i = 0; i < this.entitys.length; i++) {
      let entity = this.entitys[i];
      if (entity == null) continue;
      entity.result();
      entity.publish();
    }

    this.disposeEntity();

    if (buffer.frame - this.lastframe != 1) {
      console.log("[跳帧]" + this.lastframe + "=>" + buffer.frame);
    }

    this.lastframe = buffer.frame;
    return true;
  }

  push(packet) {
    this.frameBuffer.push(packet);
  }

}

__decorate([Object(peng_ioc__WEBPACK_IMPORTED_MODULE_0__["inject"])("inject")], RootMain.prototype, "injectBinder", void 0);

__decorate([Object(peng_ioc__WEBPACK_IMPORTED_MODULE_0__["inject"])(_func_MathFunc__WEBPACK_IMPORTED_MODULE_8__["MathFunc"])], RootMain.prototype, "mFun", void 0);

/***/ }),

/***/ "./src/define/EntityDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityData", function() { return EntityData; });
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let EntityData = class EntityData extends peng_field__WEBPACK_IMPORTED_MODULE_0__["RootObject"] {};
EntityData = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("EntityData")], EntityData);


/***/ }),

/***/ "./src/define/FrameDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandData", function() { return CommandData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacketData", function() { return PacketData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameData", function() { return FrameData; });
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CommandData = class CommandData {};

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(String, "type")], CommandData.prototype, "type", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(String, "task")], CommandData.prototype, "task", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "value", Array)], CommandData.prototype, "value", void 0);

CommandData = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("CommandData")], CommandData);

let PacketData = class PacketData {};

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "actor")], PacketData.prototype, "actor", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(CommandData, "actor", Array)], PacketData.prototype, "commands", void 0);

PacketData = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("PacketData")], PacketData);

let FrameData = class FrameData {};

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "frame")], FrameData.prototype, "frame", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "delta")], FrameData.prototype, "delta", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(PacketData, "packet", Array)], FrameData.prototype, "packet", void 0);

FrameData = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("FrameData")], FrameData);


/***/ }),

/***/ "./src/define/GeometryDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionEnum", function() { return DirectionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectionEnum;

(function (DirectionEnum) {
  DirectionEnum[DirectionEnum["Inside"] = 0] = "Inside";
  DirectionEnum[DirectionEnum["Left"] = 1] = "Left";
  DirectionEnum[DirectionEnum["Right"] = 2] = "Right";
  DirectionEnum[DirectionEnum["Up"] = 4] = "Up";
  DirectionEnum[DirectionEnum["Down"] = 8] = "Down";
  DirectionEnum[DirectionEnum["LeftAndUp"] = 5] = "LeftAndUp";
  DirectionEnum[DirectionEnum["LeftAndDown"] = 9] = "LeftAndDown";
  DirectionEnum[DirectionEnum["RightAndUp"] = 6] = "RightAndUp";
  DirectionEnum[DirectionEnum["RightAndDown"] = 10] = "RightAndDown";
  DirectionEnum[DirectionEnum["Overflow"] = 15] = "Overflow";
})(DirectionEnum || (DirectionEnum = {}));

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  contains() {
    let x;
    let y;

    switch (arguments.length) {
      case 1:
        x = arguments[0].x;
        y = arguments[0].y;
        break;

      case 2:
        x = arguments[0];
        y = arguments[1];
        break;
    }

    return x >= this.x - this.w && x <= this.x + this.w && y >= this.y - this.h && y <= this.y + this.h;
  }

  intersects(range) {
    return !(range.x - range.w > this.x + this.w) || range.x + range.w < this.x - this.w || range.y - range.h > this.y + this.h || range.y + range.h < this.y - this.h;
  }

  orientation() {
    let direction = DirectionEnum.Inside;

    switch (arguments.length) {
      case 1:
        let range = arguments[0];

        if (range.x - range.w > this.x - this.w) {
          direction |= DirectionEnum.Left;
        }

        if (this.x + this.w > range.x + range.w) {
          direction |= DirectionEnum.Right;
        }

        if (this.y + this.h > range.y + range.h) {
          direction |= DirectionEnum.Up;
        }

        if (range.y - range.h > this.y - this.h) {
          direction |= DirectionEnum.Down;
        }

        return direction;

      case 2:
        let x = arguments[0];
        let y = arguments[1];

        if (x < this.x - this.w) {
          direction |= DirectionEnum.Left;
        }

        if (x > this.x + this.w) {
          direction |= DirectionEnum.Right;
        }

        if (y > this.y + this.h) {
          direction |= DirectionEnum.Up;
        }

        if (y < this.y - this.h) {
          direction |= DirectionEnum.Down;
        }

        return direction;
    }
  }

}
let RectangleConverter = class RectangleConverter extends peng_field__WEBPACK_IMPORTED_MODULE_0__["BaseConverter"] {
  to(writer, value) {
    let tmp = Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(Number);
    tmp.to(writer, value.x);
    tmp.to(writer, value.y);
    tmp.to(writer, value.w);
    tmp.to(writer, value.h);
  }

  from(reader) {
    let tmp = Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["GetConverter"])(Number);
    let x = tmp.from(reader);
    let y = tmp.from(reader);
    let w = tmp.from(reader);
    let h = tmp.from(reader);
    let inst = new Rectangle(x, y, w, h);
    return inst;
  }

};
RectangleConverter = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Convert"])(Rectangle)], RectangleConverter);
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rSquared = this.r * this.r;
  }

  contains(point) {
    let dx = point.x - this.x;
    let dy = point.y - this.y;
    let d = dx * dx + dy * dy;
    return d <= this.rSquared;
  }

  intersects(range) {
    let xDist = Math.abs(range.x - this.x);
    let yDist = Math.abs(range.y - this.y);
    let r = this.r;
    let w = range.w;
    let h = range.h;
    let dx = xDist - w;
    let dy = yDist - h;
    let edges = dx * dx + dy * dy;
    if (xDist > r + w || yDist > r + h) return false;
    if (xDist <= w || yDist <= h) return true;
    return edges <= this.rSquared;
  }

  orientation() {
    let direction = DirectionEnum.Inside;

    switch (arguments.length) {
      case 1:
        let range = arguments[0];

        if (range.x - range.w > this.x - this.r) {
          direction |= DirectionEnum.Left;
        }

        if (this.x + this.r > range.x + range.w) {
          direction |= DirectionEnum.Right;
        }

        if (this.y + this.r > range.y + range.h) {
          direction |= DirectionEnum.Up;
        }

        if (range.y - range.h > this.y - this.r) {
          direction |= DirectionEnum.Down;
        }

        return direction;

      case 2:
        let x = arguments[0];
        let y = arguments[1];

        if (x < this.x - this.r) {
          direction |= DirectionEnum.Left;
        }

        if (x > this.x + this.r) {
          direction |= DirectionEnum.Right;
        }

        if (y > this.y + this.r) {
          direction |= DirectionEnum.Up;
        }

        if (y < this.y - this.r) {
          direction |= DirectionEnum.Down;
        }

        return direction;
    }
  }

}

/***/ }),

/***/ "./src/define/InitDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitData", function() { return InitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitInfo", function() { return InitInfo; });
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let InitData = class InitData {};

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "id")], InitData.prototype, "id", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "worldFrame")], InitData.prototype, "worldFrame", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "systemTime")], InitData.prototype, "systemTime", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Uint8Array, "entitys")], InitData.prototype, "entitys", void 0);

InitData = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("InitData")], InitData);

[];
let InitInfo = class InitInfo {};

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "id")], InitInfo.prototype, "id", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "systemTime")], InitInfo.prototype, "systemTime", void 0);

InitInfo = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("InitInfo")], InitInfo);


/***/ }),

/***/ "./src/define/MissileDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Missile", function() { return Missile; });
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Missile = class Missile {};

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(peng_field__WEBPACK_IMPORTED_MODULE_0__["Vector2"], "position")], Missile.prototype, "position", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "health")], Missile.prototype, "health", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "rotate")], Missile.prototype, "rotate", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "range")], Missile.prototype, "range", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "speed")], Missile.prototype, "speed", void 0);

__decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Field"])(Number, "serial")], Missile.prototype, "serial", void 0);

Missile = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Type"])("Missile")], Missile);

let MissileConverter = class MissileConverter extends peng_field__WEBPACK_IMPORTED_MODULE_0__["SettleConverter"] {};
MissileConverter = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Convert"])(Missile)], MissileConverter);
let MissileSettle = class MissileSettle extends peng_field__WEBPACK_IMPORTED_MODULE_0__["Settler"] {};
MissileSettle = __decorate([Object(peng_field__WEBPACK_IMPORTED_MODULE_0__["Settle"])(Missile)], MissileSettle);

/***/ }),

/***/ "./src/define/TemplateDefine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
class Template {}
Template.World = {
  "@type": "EntityData",
  "behaviors": [{
    "@type": "World"
  }]
};
Template.Player = {
  "@type": "EntityData",
  "behaviors": [{
    "@type": "Player"
  }]
};

/***/ }),

/***/ "./src/func/MathFunc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathFunc", function() { return MathFunc; });
const A = 9301;
const C = 49297;
const M = 233280;
class MathFunc {
  seed(value) {
    this._result = value;
    this.randSeed();
  }

  randSeed() {
    this._result = (this._result * A + C) % M;
    return this._result;
  }

  number(min, max) {
    let diff = max - min + 1;
    let result = this.randSeed() % diff + min;
    return result;
  }

}

/***/ }),

/***/ "./src/func/SearchFunc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerachFunc", function() { return SerachFunc; });
class SerachFunc {
  search(shape, filter, exclude) {
    return null;
  }

}

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _define_FrameDefine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/define/FrameDefine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameData", function() { return _define_FrameDefine__WEBPACK_IMPORTED_MODULE_0__["FrameData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PacketData", function() { return _define_FrameDefine__WEBPACK_IMPORTED_MODULE_0__["PacketData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandData", function() { return _define_FrameDefine__WEBPACK_IMPORTED_MODULE_0__["CommandData"]; });

/* harmony import */ var _define_EntityDefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/define/EntityDefine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityData", function() { return _define_EntityDefine__WEBPACK_IMPORTED_MODULE_1__["EntityData"]; });

/* harmony import */ var _define_InitDefine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/define/InitDefine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitData", function() { return _define_InitDefine__WEBPACK_IMPORTED_MODULE_2__["InitData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitInfo", function() { return _define_InitDefine__WEBPACK_IMPORTED_MODULE_2__["InitInfo"]; });

/* harmony import */ var _context_MainRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/context/MainRoot.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootMain", function() { return _context_MainRoot__WEBPACK_IMPORTED_MODULE_3__["RootMain"]; });

/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/peng-field/index.js");
/* harmony import */ var peng_field__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(peng_field__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetConverter", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCtor", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetCtor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCtorByType", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetCtorByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCtorByValue", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetCtorByValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCtorOfSettler", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetCtorOfSettler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSerial", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetSerial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSerialByValue", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetSerialByValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSettler", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetSettler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetType", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTypeByValue", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["GetTypeByValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["Vector2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "To", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["To"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "From", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["From"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToShell", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["ToShell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FromShell", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["FromShell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Long", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["Long"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Writer", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["Writer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reader", function() { return peng_field__WEBPACK_IMPORTED_MODULE_4__["Reader"]; });






function version() {
  return "alu@0.0.1";
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=alu.js.map