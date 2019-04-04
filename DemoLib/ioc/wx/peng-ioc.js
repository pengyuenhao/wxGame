this["ioc"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bind/BindConst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingConst", function() { return BindingConst; });
var BindingConst;

(function (BindingConst) {
  BindingConst.NULL = Symbol.for("NULL").toString();
})(BindingConst || (BindingConst = {}));

/***/ }),

/***/ "./src/Bind/Binder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binder", function() { return Binder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NBinder", function() { return NBinder; });
/* harmony import */ var _Binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Bind/Binding.ts");
/* harmony import */ var _BindConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Bind/BindConst.ts");


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
    let bindingName = binding.name == null ? _BindConst__WEBPACK_IMPORTED_MODULE_1__["BindingConst"].NULL : binding.name;
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

    if (dict.has(_BindConst__WEBPACK_IMPORTED_MODULE_1__["BindingConst"].NULL) && dict.get(_BindConst__WEBPACK_IMPORTED_MODULE_1__["BindingConst"].NULL) === binding) {
      dict.delete(_BindConst__WEBPACK_IMPORTED_MODULE_1__["BindingConst"].NULL);
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
    let checkKey = _Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"].checkAbstract(key);

    if (this._bindings.has(checkKey)) {
      let dict = this._bindings.get(checkKey);

      let bindingName;

      if (name) {
        bindingName = name;
      } else {
        bindingName = _BindConst__WEBPACK_IMPORTED_MODULE_1__["BindingConst"].NULL;
      }

      if (dict.has(bindingName)) {
        dict.delete(bindingName);
      }
    }
  }

  getRawBinding() {
    return new _Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"](this.resolver.bind(this));
  }

  getBinding(key, name) {
    if (this._bindings.has(key)) {
      let dict = this._bindings.get(key);

      if (!name) {
        name = _BindConst__WEBPACK_IMPORTED_MODULE_1__["BindingConst"].NULL;
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
class NBinder {
  get constructorName() {
    return "IBinder";
  }

}

/***/ }),

/***/ "./src/Bind/Binding.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NBinding", function() { return NBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
class NBinding {
  get constructorName() {
    return "IBinding";
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

/***/ }),

/***/ "./src/Command/Command.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NCommand", function() { return NCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony import */ var _ICommandBinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Command/ICommandBinder.ts");
/* harmony import */ var _Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Injector/InjectBinder.ts");
/* harmony import */ var _Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Injector/InjectDecorator.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class NCommand {
  get constructorName() {
    return "ICommand";
  }

}
class Command {
  constructor() {
    this.sequenceId = null;
    this.data = null;
    this.args = null;
    this._clean = false;
    this._retain = false;
  }

  deploy() {
    this._clean = false;
  }

  clean() {
    this._clean = true;
  }

  get isClean() {
    return this._clean;
  }

  retain() {
    this._retain = true;
  }

  release() {
    this._retain = false;
  }

  get isRetain() {
    return this._retain;
  }

  restore() {
    this.injectBinder.getInjector().uninject(this);
    this.clean();
  }

  execute(...args) {
    return null;
  }

}

__decorate([Object(_Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__["inject"])(_Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_1__["NInjectBinder"])], Command.prototype, "injectBinder", void 0);

__decorate([Object(_Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_2__["inject"])(_ICommandBinder__WEBPACK_IMPORTED_MODULE_0__["NCommandBinder"])], Command.prototype, "commandBinder", void 0);

/***/ }),

/***/ "./src/Command/CommandBinder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBinder", function() { return CommandBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalCommandBinder", function() { return SignalCommandBinder; });
/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Bind/Binding.ts");
/* harmony import */ var _Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Injector/InjectBinder.ts");
/* harmony import */ var _CommandBinding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Command/CommandBinding.ts");
/* harmony import */ var _Signal_Signal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Signal/Signal.ts");
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/Command/Command.ts");
/* harmony import */ var _Pool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/Pool.ts");
/* harmony import */ var _CommandConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/Command/CommandConst.ts");
/* harmony import */ var _Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/Injector/InjectDecorator.ts");
/* harmony import */ var _Bind_Binder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/Bind/Binder.ts");
/* harmony import */ var _Signal_SignalManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/Signal/SignalManager.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











class CommandBinder extends _Bind_Binder__WEBPACK_IMPORTED_MODULE_8__["Binder"] {
  constructor() {
    super(...arguments);
    this.pools = new Map();
    this.activeCommands = new Set();
    this.activeSequences = new Map();
    this.usePooling = false;
  }

  getPool(type) {
    if (this.pools.has(type)) return this.pools.get(type);
    return null;
  }

  resolver(binding) {
    super.resolver(binding);

    if (this.usePooling && binding.isPooled) {
      if (binding.value != null) {
        let that = this;
        let values = binding.value;

        if (values.length === 0) {
          values = [];
          values.push(binding.value);
        }

        if (values && values.length > 0) {
          values.forEach(value => {
            if (that.pools.has(value) == false) {
              let myPool = this.makePoolFromType(value);
              that.pools.set(value, myPool);
            }
          });
        }
      }
    }
  }

  makePoolFromType(type) {
    let poolType = type;
    this.injectBinder.bind(type).to(type);
    this.injectBinder.bind(_Pool__WEBPACK_IMPORTED_MODULE_5__["Pool"]).to(_Pool__WEBPACK_IMPORTED_MODULE_5__["Pool"]).toName(_CommandConst__WEBPACK_IMPORTED_MODULE_6__["CommandConst"].COMMAND_POOL);
    let pool = this.injectBinder.getInstance(_Pool__WEBPACK_IMPORTED_MODULE_5__["Pool"], _CommandConst__WEBPACK_IMPORTED_MODULE_6__["CommandConst"].COMMAND_POOL);
    this.injectBinder.unbind(_Pool__WEBPACK_IMPORTED_MODULE_5__["Pool"], _CommandConst__WEBPACK_IMPORTED_MODULE_6__["CommandConst"].COMMAND_POOL);
    pool.bind(poolType);
    return pool;
  }

  getRawBinding() {
    return new _CommandBinding__WEBPACK_IMPORTED_MODULE_2__["CommandBinding"](this.resolver.bind(this));
  }

  bind(key) {
    return super.bind(key);
  }

  invokeCommand(cmd, binding, args, depth) {
    let command = this.createCommand(cmd, args);
    command.sequenceId = depth;
    this.trackCommand(command, binding);
    command.return = this.executeCommand(command, args);
    return command;
  }

  createCommand(cmd, data) {
    let command = this.getCommand(cmd);

    if (command == null) {
      let msg = "A Command ";

      if (data != null) {
        msg += "tied to data " + data.toString();
      }

      msg += " could not be instantiated.\nThis might be caused by a null pointer during instantiation or failing to override Execute (generally you shouldn't have constructor code in Commands).";
      throw new Error(msg);
    }

    command.data = data;
    return command;
  }

  getCommand(type) {
    if (this.usePooling && this.pools.has(type)) {
      let pool = this.pools.get(type);
      let command = pool.getInstance();

      if (command) {
        if (command.isClean) {
          this.injectBinder.getInjector().inject(command);
          command.deploy();
        }
      } else {
        command = this.injectBinder.getInstance(type, null);
        pool.add(command);
      }

      return command;
    } else {
      this.injectBinder.bind(_Command__WEBPACK_IMPORTED_MODULE_4__["NCommand"]).to(type);
      let command = this.injectBinder.getInstance(_Command__WEBPACK_IMPORTED_MODULE_4__["NCommand"], null);
      this.injectBinder.unbind(_Command__WEBPACK_IMPORTED_MODULE_4__["NCommand"], null);
      return command;
    }
  }

  trackCommand(command, binding) {
    if (binding.isSequence) {
      this.activeSequences.set(command, binding);
    } else {
      this.activeCommands.add(command);
    }
  }

  executeCommand(command, args) {
    if (command == null) {
      return;
    }

    return command.execute(...args);
  }

  onDispose(trigger, ...args) {
    let results = [];
    let result;
    let binding = this.getBinding(trigger, null);

    if (binding != null) {
      if (binding.isSequence) {
        result = this.next(binding, args, 0);
        if (result !== null) results.push(...result);
      } else {
        if (Array.isArray(binding.value)) {
          for (let i = 0; i < binding.value.length; i++) {
            result = this.next(binding, args, i);
            if (result !== null) results.push(...result);
          }
        } else {
          return this.next(binding, args, 0);
        }
      }
    }

    if (results.length > 0) return results;else return null;
  }

  next(binding, args, depth) {
    let cmd;

    if (Array.isArray(binding.value)) {
      if (depth < binding.value.length) {
        cmd = binding.value[depth];
      }
    } else {
      if (depth === 0) {
        cmd = binding.value;
      }
    }

    let results = null;

    if (cmd) {
      let command = this.invokeCommand(cmd, binding, args, depth);
      let ret = command.return;
      let res;
      command.return = null;

      if (ret !== null) {
        results = [];
        results.push(ret);
      }

      res = this.releaseCommand(command);

      if (res !== null) {
        if (!results) results = [];
        results.push(res);
      }
    } else {
      this.disposeOfSequencedData(args);

      if (binding.isOnce) {
        this.unbind(binding, null);
      }
    }

    return results;
  }

  disposeOfSequencedData(data) {}

  releaseCommand(command) {
    if (!command.isRetain) {
      let t = command.constructor;

      if (this.usePooling && this.pools.has(t)) {
        this.pools.get(t).returnInstance(command);
      }

      if (this.activeCommands.has(command)) {
        this.activeCommands.delete(command);
      } else if (this.activeSequences.has(command)) {
        let binding = this.activeSequences.get(command);
        let data = command.data;
        this.activeSequences.delete(command);
        return this.next(binding, data, command.sequenceId + 1);
      }
    }

    return null;
  }

}

__decorate([Object(_Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_7__["inject"])(_Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_1__["NInjectBinder"])], CommandBinder.prototype, "injectBinder", void 0);

class SignalCommandBinder extends CommandBinder {
  constructor() {
    super(...arguments);
    this.onDisposeBind = this.onDispose.bind(this);
    this.usePooling = true;
  }

  resolveBinding(binding, key) {
    super.resolveBinding(binding, key);

    if (this._bindings.has(key)) {
      let signal = key;
      signal.addListener(this.onDisposeBind);
    }
  }

  bind(value) {
    let signal = null;

    if (_Bind_Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"].isConstructor(value)) {
      let binding = this.injectBinder.getBinding(value, null);

      if (binding == null) {
        binding = this.injectBinder.bind(value);
        binding.toSingleton();
      }

      signal = this.injectBinder.getInstance(value, null);
    } else {
      if (value instanceof _Signal_Signal__WEBPACK_IMPORTED_MODULE_3__["Signal"]) {
        signal = value;
      }
    }

    if (!signal) {
      let sglMgr = this.injectBinder.getInstance(_Signal_SignalManager__WEBPACK_IMPORTED_MODULE_9__["NSignalManager"], null);
      signal = sglMgr.get(value);
    }

    return super.bind(signal);
  }

  getBinding(key, name) {
    let signal;

    if (_Bind_Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"].isConstructor(key)) {
      signal = this.injectBinder.getInstance(key, name);
    } else {
      signal = key;
    }

    return super.getBinding(signal, name);
  }

  invokeCommand(cmd, binding, args, depth) {
    let signal = binding.key;
    let command = this.createCommandForSignal(cmd, args);
    command.sequenceId = depth;
    this.trackCommand(command, binding);
    command.return = this.executeCommand(command, args);
    return command;
  }

  createCommandForSignal(cmd, args) {
    let that = this;

    if (args != null) {
      let signalData = args;
      let injectedTypes = new Set();
      let values = [signalData];
    }

    let command = that.getCommand(cmd);
    command.data = args;
    return command;
  }

}

/***/ }),

/***/ "./src/Command/CommandBinding.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBinding", function() { return CommandBinding; });
/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Bind/Binding.ts");

class CommandBinding extends _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"] {
  get isSequence() {
    return this._isSequence;
  }

  get isOnce() {
    return this._isOnce;
  }

  to(value) {
    return super.to(value);
  }

  toName(name) {
    return super.toName(name);
  }

  Pooled() {
    this.isPooled = true;

    this._resolver(this);

    return this;
  }

}

/***/ }),

/***/ "./src/Command/CommandConst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandConst", function() { return CommandConst; });
var CommandConst;

(function (CommandConst) {
  CommandConst["COMMAND_POOL"] = "COMMAND_POOL";
})(CommandConst || (CommandConst = {}));

/***/ }),

/***/ "./src/Command/ICommandBinder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NCommandBinder", function() { return NCommandBinder; });
class NCommandBinder {
  get constructorName() {
    return "ICommandBinder";
  }

}

/***/ }),

/***/ "./src/Context/Context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NContext", function() { return NContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Injector/InjectBinder.ts");
/* harmony import */ var _IocConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/IocConst.ts");
/* harmony import */ var _Command_CommandBinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Command/CommandBinder.ts");
/* harmony import */ var _Command_ICommandBinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Command/ICommandBinder.ts");
/* harmony import */ var _Signal_SignalManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/Signal/SignalManager.ts");





class NContext {
  get constructorName() {
    return "IContext";
  }

}
class Context {
  get injectBinder() {
    if (!this._injectBinder) {
      this._injectBinder = new _Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_0__["InjectBinder"]();
    }

    return this._injectBinder;
  }

  set crossContextBinder(value) {
    this._crossContextBinder = value;
  }

  get crossContextBinder() {
    return this._crossContextBinder;
  }

  get commandBinder() {
    return this._commandBinder;
  }

  getRoot() {
    return this.root;
  }

  constructor(root) {
    if (Context.firstContext == null || Context.firstContext.getRoot() == null) {
      Context.firstContext = this;
      this.crossContextBinder = this.injectBinder;
    } else {
      Context.firstContext.addCrossContext(this);
    }

    this.setRoot(root);
    this.addCore();
    this.start();
  }

  getIns(key, name) {
    return this.injectBinder.getInstance(key, name);
  }

  addCrossContext(context) {
    context.crossContextBinder = this.injectBinder;
    return this;
  }

  removeCrossContext(childContext) {}

  setRoot(root) {
    this.root = root;
    return this;
  }

  restart() {
    this.addCore();
    this.start();
    return this;
  }

  start() {
    this.instantiateCore();
    this.mapBindings();
    this.postBindings();
    this.launch();
    return this;
  }

  launch() {
    this.injectBinder.inject(this);
    this.injectBinder.inject(this.root);
  }

  instantiateCore() {
    this._commandBinder = this.injectBinder.getInstance(_Command_ICommandBinder__WEBPACK_IMPORTED_MODULE_3__["NCommandBinder"], null);
  }

  mapBindings() {}

  postBindings() {}

  addCore() {
    this.injectBinder.bind(_Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_0__["NInjectBinder"]).toValue(this.injectBinder);
    this.injectBinder.bind(_Command_ICommandBinder__WEBPACK_IMPORTED_MODULE_3__["NCommandBinder"]).to(_Command_CommandBinder__WEBPACK_IMPORTED_MODULE_2__["SignalCommandBinder"]).toSingleton();
    this.injectBinder.bind(_Signal_SignalManager__WEBPACK_IMPORTED_MODULE_4__["NSignalManager"]).to(_Signal_SignalManager__WEBPACK_IMPORTED_MODULE_4__["SignalManager"]).toSingleton();
    this.injectBinder.bind(_IocConst__WEBPACK_IMPORTED_MODULE_1__["CommonEnum"].Context).toValue(this);
    this.injectBinder.bind(_IocConst__WEBPACK_IMPORTED_MODULE_1__["CommonEnum"].Root).toValue(this.root);
  }

}

/***/ }),

/***/ "./src/Context/IRoot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NRoot", function() { return NRoot; });
class NRoot {
  get constructorName() {
    return "IRoot";
  }

}

/***/ }),

/***/ "./src/Decorator/DecoratorClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorClass", function() { return DecoratorClass; });
class DecoratorClass {
  get list() {
    return this._list;
  }

  set list(value) {
    this._list = value;
  }

}

/***/ }),

/***/ "./src/Decorator/DecoratorClassBinder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorClassBinder", function() { return DecoratorClassBinder; });
/* harmony import */ var _Bind_Binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Bind/Binder.ts");
/* harmony import */ var _DecoratorClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Decorator/DecoratorClass.ts");
/* harmony import */ var _DecoratorClassBinding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Decorator/DecoratorClassBinding.ts");
/* harmony import */ var _Prototype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Prototype.ts");
/* harmony import */ var _Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/Bind/BindConst.ts");





class DecoratorClassBinder extends _Bind_Binder__WEBPACK_IMPORTED_MODULE_0__["Binder"] {
  init() {
    this._bindings = new Map();
    this._decoratorClassBufferMap = new Map();
  }

  has(key) {
    return this._bindings.has(key);
  }

  get(target) {
    if (!(target instanceof Object)) throw new Error("proto must is a object but" + target + "is not");
    let ctor = target;

    let injectClass = this._decoratorClassBufferMap.get(ctor);

    if (!injectClass) {
      let extendsList = _Prototype__WEBPACK_IMPORTED_MODULE_3__["Prototype"].getPrototypeList(ctor);
      extendsList.push(ctor);
      injectClass = new _DecoratorClass__WEBPACK_IMPORTED_MODULE_1__["DecoratorClass"]();
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
    return new _DecoratorClassBinding__WEBPACK_IMPORTED_MODULE_2__["DecoratorClassBinding"](this.resolver.bind(this));
  }

  resolver(binding) {
    super.resolver(binding);
  }

  resolveBinding(binding, key) {
    if (!binding.property) return;
    let bindingName = binding.name == null ? _Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__["BindingConst"].NULL : binding.name;
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

    if (dict.has(_Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__["BindingConst"].NULL)) {
      let insideDic = dict.get(_Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__["BindingConst"].NULL);

      if (insideDic.has(binding.property)) {
        let existingBinding = insideDic.get(binding.property);

        if (binding.property === binding) {
          insideDic.delete(_Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__["BindingConst"].NULL);
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

/***/ "./src/Decorator/DecoratorClassBinding.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorClassBinding", function() { return DecoratorClassBinding; });
/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Bind/Binding.ts");

class DecoratorClassBinding extends _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"] {
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

/***/ }),

/***/ "./src/Decorator/DecoratorConst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorConst", function() { return DecoratorConst; });
/* harmony import */ var _DecoratorClassBinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Decorator/DecoratorClassBinder.ts");

var DecoratorConst;

(function (DecoratorConst) {
  DecoratorConst.DECORATOR_CLASS_BINDER = new _DecoratorClassBinder__WEBPACK_IMPORTED_MODULE_0__["DecoratorClassBinder"]();
})(DecoratorConst || (DecoratorConst = {}));

/***/ }),

/***/ "./src/Injector/InjectBinder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NInjectBinder", function() { return NInjectBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectBinder", function() { return InjectBinder; });
/* harmony import */ var _Decorator_DecoratorConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Decorator/DecoratorConst.ts");
/* harmony import */ var _Bind_Binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Bind/Binder.ts");
/* harmony import */ var _Injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Injector/Injector.ts");
/* harmony import */ var _InjectBinding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Injector/InjectBinding.ts");
/* harmony import */ var _Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/Bind/BindConst.ts");
/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/Bind/Binding.ts");






const ClassBinder = _Decorator_DecoratorConst__WEBPACK_IMPORTED_MODULE_0__["DecoratorConst"].DECORATOR_CLASS_BINDER;
class NInjectBinder {
  get constructorName() {
    return "IInjectBinder";
  }

}
class InjectBinder extends _Bind_Binder__WEBPACK_IMPORTED_MODULE_1__["Binder"] {
  init() {
    super.init();
    this._injector = new _Injector__WEBPACK_IMPORTED_MODULE_2__["Injector"]();
    this._injector.binder = this;
    this._injector.injectClassBinder = ClassBinder;
  }

  getInjector() {
    return this._injector;
  }

  getInstance(key, name) {
    if (!name) name = _Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__["BindingConst"].NULL;
    let binding = this.getBinding(_Bind_Binding__WEBPACK_IMPORTED_MODULE_5__["Binding"].checkAbstract(key), name);

    if (binding == null) {
      throw new Error("InjectionBinder has no binding for:\n\tkey: " + key + "\nname: " + name);
    }

    let instance = this._injector.instantiate(binding, false);

    this._injector.tryInject(binding, instance);

    return instance;
  }

  inject(target, userClass) {
    this.getInjector().inject(target, userClass);
  }

  getBinding(key, name) {
    return super.getBinding(key, name);
  }

  bind(key) {
    return super.bind(key);
  }

  getRawBinding() {
    return new _InjectBinding__WEBPACK_IMPORTED_MODULE_3__["InjectBinding"](this.resolver.bind(this));
  }

  unbindAllMark() {
    let that = this;
    let unbinds = [];

    this._bindings.forEach(dict => {
      dict.forEach(binding => {
        if (binding.isUnbind()) {
          unbinds.push(binding);
        }
      });
    });

    unbinds.forEach(binding => {
      that.unbind(binding.key, binding.name);
    });
  }

}

/***/ }),

/***/ "./src/Injector/InjectBinding.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectBinding", function() { return InjectBinding; });
/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Bind/Binding.ts");

class InjectBinding extends _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"] {
  constructor() {
    super(...arguments);
    this._isUnbind = false;
    this._bindingType = "Default";
    this._isInject = true;
  }

  isInject() {
    return this._isInject;
  }

  getArgs() {
    return this._args;
  }

  getBindingType() {
    return this._bindingType;
  }

  isUnbind() {
    return this._isUnbind;
  }

  toArgs() {
    this._args = arguments;

    if (this._resolver != null) {
      this._resolver(this);
    }

    return this;
  }

  toSingleton() {
    if (this._bindingType === "Value") {
      return this;
    }

    this._bindingType = "Singleton";

    if (this._resolver != null) {
      this._resolver(this);
    }

    return this;
  }

  unBind() {
    this._isUnbind = true;
    return this;
  }

  toValue(value) {
    this._bindingType = "Value";
    this.setValue(value);
    return this;
  }

  setValue(o) {
    this.to(o);
    return this;
  }

  toInject(value) {
    this._isInject = value;
    return this;
  }

  to(value) {
    return super.to(value);
  }

  toName(name) {
    return super.toName(name);
  }

}

/***/ }),

/***/ "./src/Injector/InjectDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony import */ var _Decorator_DecoratorConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Decorator/DecoratorConst.ts");
/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Bind/Binding.ts");


const ClassBinder = _Decorator_DecoratorConst__WEBPACK_IMPORTED_MODULE_0__["DecoratorConst"].DECORATOR_CLASS_BINDER;
function inject() {
  switch (arguments.length) {
    case 0:
      break;

    case 1:
      return injectNoNameFunc(arguments[0]);
      break;

    case 2:
      return injectToNameFunc(arguments[0], arguments[1]);
      break;

    case 3:
      break;
  }
}

const injectNoNameFunc = _constructor => {
  return function (_target, _property) {
    injectFunc(_target, _constructor, _property);
  };
};

const injectToNameFunc = (_constructor, _name) => {
  return function (_target, _property) {
    injectFunc(_target, _constructor, _property, _name);
  };
};

function injectFunc(_target, _constructor, _property, _name) {
  ClassBinder.bind(_target.constructor).to(_Bind_Binding__WEBPACK_IMPORTED_MODULE_1__["Binding"].checkAbstract(_constructor)).toProperty(_property).toName(_name);
}

/***/ }),

/***/ "./src/Injector/InjectFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectFactory", function() { return InjectFactory; });
/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Bind/Binding.ts");

class InjectFactory {
  constructor() {}

  get(binding, args) {
    if (binding == null) {
      throw new Error("InjectorFactory cannot act on null binding");
    }

    let bindingType = binding.getBindingType();

    switch (bindingType) {
      case "Singleton":
        return this.singletonOf(binding, args);
        break;

      case "Value":
        return this.getValueOf(binding);
        break;

      default:
        break;
    }

    return this.instanceOf(binding, args);
  }

  instanceOf(binding, args) {
    if (binding.value != null) {
      return this.createFromValue(binding.value, args);
    }

    let value = this.generateImplicit(binding.key, args);
    return this.createFromValue(value, args);
  }

  createFromValue(c, args) {
    let instance = null;

    try {
      if (args == null || args.length == 0) {
        instance = new c();
      } else {
        instance = new c(args);
      }
    } catch (_a) {}

    return instance;
  }

  generateImplicit(key, args) {
    if (!key) return null;

    if (_Bind_Binding__WEBPACK_IMPORTED_MODULE_0__["Binding"].isConstructor(key)) {
      return this.createFromValue(key, args);
    }

    throw new Error("InjectorFactory can't instantiate an Interface or Abstract Class. Class: " + key.ToString());
  }

  singletonOf(binding, args) {
    if (binding.value != null) {
      let o = this.createFromValue(binding.value, args);
      if (o == null) return null;
      binding.setValue(o);
    } else {
      binding.setValue(this.generateImplicit(binding.key, args));
    }

    return binding.value;
  }

  getValueOf(binding) {
    return binding.value;
  }

}

/***/ }),

/***/ "./src/Injector/Injector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
/* harmony import */ var _InjectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Injector/InjectFactory.ts");

class Injector {
  constructor() {
    this.factory = null;
    this.binder = null;
    this.injectClassBinder = null;
    this.factory = new _InjectFactory__WEBPACK_IMPORTED_MODULE_0__["InjectFactory"]();
  }

  uninject(target, userClass) {
    if (!this.binder || !target) throw new Error("Attempt to inject into Injector without a Binder or null instance");
    let type = typeof target;

    if (type === "string" || type === "boolean" || type === "number" || type === "symbol" || type === "undefined" || type === "function") {
      return target;
    }

    if (!userClass) {
      userClass = target.constructor;
    }

    let injectClass = this.injectClassBinder.get(userClass);
    this.decoratorUnInject(target, injectClass);
  }

  decoratorUnInject(target, injectClass) {
    let that = this;
    injectClass.list.forEach(binding => {
      let injectBinding = that.binder.getBinding(binding.value, binding.name);

      if (injectBinding) {
        target[binding.property] = null;
      }
    });
  }

  instantiate(binding, tryInjectHere) {
    if (!this.binder || !this.factory) throw new Error("Attempt to instantiate from Injector without a Binder or inject into Injector without a Factory");
    let constructor = null;
    let instance = null;

    if (binding.isValueConstructor) {
      constructor = binding.value;
    } else {
      instance = binding.value;
    }

    if (!constructor && binding.isKeyConstructor) {
      constructor = binding.key;
    }

    if (!instance && constructor) {
      let args = binding.getArgs();
      instance = this.factory.get(binding, args);

      if (tryInjectHere) {
        this.tryInject(binding, instance);
      }
    }

    return instance;
  }

  tryInject(binding, target) {
    if (target != null) {
      if (binding.isInject()) {
        target = this.inject(target);
      }

      if (binding.getBindingType() == "Singleton" || binding.getBindingType() == "Value") {
        binding.toInject(false);
      }
    }

    return target;
  }

  inject(target, userClass) {
    if (!this.binder || !target) throw new Error("Attempt to inject into Injector without a Binder or null instance");
    let type = typeof target;

    if (type === "string" || type === "boolean" || type === "number" || type === "symbol" || type === "undefined" || type === "function") {
      return target;
    }

    if (!userClass) {
      userClass = target.constructor;
    }

    let injectClass = this.injectClassBinder.get(userClass);
    this.decoratorInject(target, injectClass);
    return target;
  }

  decoratorInject(target, injectClass) {
    let that = this;
    injectClass.list.forEach(binding => {
      let injectBinding = that.binder.getBinding(binding.value, binding.name);

      if (injectBinding) {
        let instance = that.getInjectValue(injectBinding.key, injectBinding.name);
        target[binding.property] = instance;
      }
    });
  }

  getInjectValue(type, name) {
    let binding = this.binder.getBinding(type, name);
    if (!binding) return null;

    if (binding.getBindingType() === "Value") {
      if (binding.isInject()) {
        let injv = this.inject(binding.value);
        binding.toInject(false);
        return injv;
      } else {
        return binding.value;
      }
    } else if (binding.getBindingType() == "Singleton") {
      if (binding.isValueConstructor || binding.value == null) {
        this.instantiate(binding, true);
      }

      return binding.value;
    } else {
      return this.instantiate(binding, true);
    }
  }

}

/***/ }),

/***/ "./src/IocConst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonEnum", function() { return CommonEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IocError", function() { return IocError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConstructorName", function() { return IConstructorName; });
var CommonEnum;

(function (CommonEnum) {
  CommonEnum["Context"] = "Context";
  CommonEnum["Root"] = "Root";
})(CommonEnum || (CommonEnum = {}));

var IocError;

(function (IocError) {
  IocError.IC_ERROR = "can't implement class that is only as interface";
})(IocError || (IocError = {}));

class IConstructorName {}

/***/ }),

/***/ "./src/Pool.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolOverflowBehavior", function() { return PoolOverflowBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingConstraintType", function() { return BindingConstraintType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolInflationType", function() { return PoolInflationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NInstanceProvider", function() { return NInstanceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pool", function() { return Pool; });
/* harmony import */ var _Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Injector/InjectDecorator.ts");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Stack.ts");
/* harmony import */ var _Prototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Prototype.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PoolOverflowBehavior;

(function (PoolOverflowBehavior) {
  PoolOverflowBehavior[PoolOverflowBehavior["EXCEPTION"] = 0] = "EXCEPTION";
  PoolOverflowBehavior[PoolOverflowBehavior["WARNING"] = 1] = "WARNING";
  PoolOverflowBehavior[PoolOverflowBehavior["IGNORE"] = 2] = "IGNORE";
})(PoolOverflowBehavior || (PoolOverflowBehavior = {}));

var BindingConstraintType;

(function (BindingConstraintType) {
  BindingConstraintType[BindingConstraintType["ONE"] = 0] = "ONE";
  BindingConstraintType[BindingConstraintType["MANY"] = 1] = "MANY";
  BindingConstraintType[BindingConstraintType["POOL"] = 2] = "POOL";
})(BindingConstraintType || (BindingConstraintType = {}));

var PoolInflationType;

(function (PoolInflationType) {
  PoolInflationType[PoolInflationType["INCREMENT"] = 0] = "INCREMENT";
  PoolInflationType[PoolInflationType["DOUBLE"] = 1] = "DOUBLE";
})(PoolInflationType || (PoolInflationType = {}));

class NInstanceProvider {
  get constructorName() {
    return "IInstanceProvider";
  }

}
class Pool {
  constructor() {
    this.instancesAvailable = new _Stack__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
    this.instancesInUse = new Set();
  }

  Pool() {
    this.size = 0;
    this.constraint = BindingConstraintType.POOL;
    this.uniqueValues = true;
    this.overflowBehavior = PoolOverflowBehavior.EXCEPTION;
    this.inflationType = PoolInflationType.DOUBLE;
  }

  bind(type) {
    this.poolType = type;
  }

  add(value) {
    this.failIf(!_Prototype__WEBPACK_IMPORTED_MODULE_2__["Prototype"].isProtetype(value, this.poolType), " Pool Type mismatch. Pools must consist of a common concrete type.\n\t\tPool type: " + this.poolType + "\n\t\tMismatch type: " + value);
    this._instanceCount++;
    this.instancesAvailable.push(value);
    return this;
  }

  addList(list) {
    if (list && list.length > 0) {
      list.forEach(item => {
        this.add(item);
      });
    }

    return this;
  }

  remove(value) {
    this._instanceCount--;
    this.removeInstance(value);
    return this;
  }

  removeList(list) {
    if (list && list.length > 0) {
      list.forEach(item => {
        this.remove(item);
      });
    }

    return this;
  }

  get value() {
    return this.getInstance();
  }

  get instanceCount() {
    return this._instanceCount;
  }

  getInstance() {
    if (this.instancesAvailable.size > 0) {
      let retv = this.instancesAvailable.pop();
      this.instancesInUse.add(retv);
      return retv;
    }

    let instancesToCreate = 0;

    if (this.size > 0) {
      if (this.instanceCount == 0) {
        instancesToCreate = this.size;
      } else {
        this.failIf(this.overflowBehavior == PoolOverflowBehavior.EXCEPTION, "A pool has overflowed its limit.\n\t\tPool type: " + this.poolType);

        if (this.overflowBehavior == PoolOverflowBehavior.WARNING) {}

        return null;
      }
    } else {
      if (this.instanceCount == 0 || this.inflationType == PoolInflationType.INCREMENT) {
        instancesToCreate = 1;
      } else {
        instancesToCreate = this.instanceCount;
      }
    }

    if (instancesToCreate > 0) {
      this.failIf(this.instanceProvider == null, "A Pool of type: " + this.poolType + " has no instance provider.");

      for (let a = 0; a < instancesToCreate; a++) {
        let newInstance = this.instanceProvider.getInstance(this.poolType);
        this.add(newInstance);
      }

      return this.getInstance();
    }

    return null;
  }

  returnInstance(value) {
    if (this.instancesInUse.has(value)) {
      value.restore();
      this.instancesInUse.delete(value);
      this.instancesAvailable.push(value);
    }
  }

  clean() {
    this.instancesAvailable.clear();
    this.instancesInUse = new Set();
    this._instanceCount = 0;
  }

  get available() {
    return this.instancesAvailable.size;
  }

  restore() {
    this.clean();
    this.size = 0;
  }

  retain() {
    this.isRetain = true;
  }

  release() {
    this.isRetain = false;
  }

  removeInstance(value) {
    this.failIf(value != this.poolType, "Attempt to remove a instance from a pool that is of the wrong Type:\n\t\tPool type: " + this.poolType.toString() + "\n\t\tInstance type: " + value.toString());

    if (this.instancesInUse.has(value)) {
      this.instancesInUse.delete(value);
    } else {
      this.instancesAvailable.pop();
    }
  }

  failIf(condition, message) {
    if (condition) {
      throw new Error(message);
    }
  }

}

__decorate([Object(_Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_0__["inject"])(NInstanceProvider)], Pool.prototype, "instanceProvider", void 0);

/***/ }),

/***/ "./src/Prototype.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prototype", function() { return Prototype; });
class Prototype {
  static isProtetype(type, prototype) {
    return type instanceof prototype;
  }

  static getPrototypeListByInst(target) {
    return this.getPrototypeList(target.constructor);
  }

  static getPrototypeList(target) {
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

  static hasPrototypeList(target) {
    if (this.prototypeMap.has(target)) {
      return true;
    } else {
      return false;
    }
  }

}
Prototype.prototypeMap = new Map();

/***/ }),

/***/ "./src/Signal/Signal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NSignal", function() { return NSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signal", function() { return Signal; });
class NSignal {
  get constructorName() {
    return "ISignal";
  }

}
class Signal {
  constructor() {
    this._listener = [];
    this._onceListener = [];
  }

  dispatch(...args) {
    let that = this;
    let ret;
    let retOne;
    let results = null;

    if (that._listener && that._listener.length != 0) {
      this._listener.forEach(function (action) {
        ret = action(that, ...args);

        if (ret !== null) {
          results = [];

          if (Array.isArray(ret)) {
            results.push(...ret);
          } else {
            results.push(ret);
          }
        }
      });
    }

    if (that._onceListener && that._onceListener.length != 0) this._listener.forEach(function (action) {
      retOne = action(that, ...args);

      if (retOne !== null) {
        if (!results) results = [];

        if (Array.isArray(retOne)) {
          results.push(...retOne);
        } else {
          results.push(retOne);
        }
      }
    });
    this._onceListener.length = 0;
    return results;
  }

  dispatchSole(...args) {
    let that = this;
    let result = null;

    if (that._listener && that._listener.length != 0) {
      this._listener.forEach(function (action) {
        result = action(that, ...args);
      });
    }

    if (that._onceListener && that._onceListener.length != 0) this._listener.forEach(function (action) {
      result = action(that, ...args);
    });
    this._onceListener.length = 0;

    if (result.length != 0) {
      return result[0];
    } else {
      return null;
    }
  }

  dispatchAsync(...args) {
    let that = this;
    let result;
    let p = [];

    if (that._listener && that._listener.length != 0) {
      that._listener.forEach(function (action) {
        result = action(that, ...args);
        if (result) p.push(...result);
      });
    }

    if (that._onceListener && that._onceListener.length != 0) that._listener.forEach(function (action) {
      result = action(that, ...args);
      if (result) p.push(...result);
    });
    this._onceListener.length = 0;
    return Promise.all(p);
  }

  addListener(callback) {
    this._listener = this.addUnique(this._listener, callback);
  }

  addOnceListener(callback) {
    this._onceListener = this.addUnique(this._onceListener, callback);
  }

  removeAllListeners() {
    this._listener.length = 0;
    this._onceListener.length = 0;
  }

  addUnique(listeners, callback) {
    if (listeners) {
      let isUnique = false;

      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i] === callback) {
          isUnique = true;
          break;
        }
      }

      if (!isUnique) {
        listeners.push(callback);
      }
    }

    return listeners;
  }

  getTypes() {
    let retv = [];
    return retv;
  }

}

/***/ }),

/***/ "./src/Signal/SignalManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NSignalManager", function() { return NSignalManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalManager", function() { return SignalManager; });
/* harmony import */ var _Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Signal/Signal.ts");

class NSignalManager {
  get constructorName() {
    return "ISignalManager";
  }

}
class SignalManager {
  constructor() {
    this._signal_dic = new Map();
    this.info = "this is a signal manager";
  }

  finish(symbol) {}

  get(symbol) {
    if (this._signal_dic.has(symbol)) {
      return this._signal_dic.get(symbol);
    } else {
      let _signal = new _Signal__WEBPACK_IMPORTED_MODULE_0__["Signal"]();

      if (typeof symbol == "string") _signal.symbol = symbol;

      this._signal_dic.set(symbol, _signal);

      return _signal;
    }
  }

  delete(symbol) {
    if (this._signal_dic.has(symbol)) {
      return this._signal_dic.delete(symbol);
    }
  }

}

/***/ }),

/***/ "./src/Stack.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
class Item {
  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }

  set value(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set next(next) {
    this._next = next;
  }

  get next() {
    return this._next;
  }

}
class Stack {
  constructor() {
    this._size = 0;
    this._header = new Item(null);
  }

  top() {
    if (this._size === 0) {
      return null;
    }

    return this._header.next.value;
  }

  push(item) {
    let newItem = new Item(item);
    newItem.next = this._header.next;
    this._header.next = newItem;
    this._size++;
  }

  pop() {
    if (this._size === 0) {
      return null;
    }

    let item = this._header.next;
    this._header.next = item.next;
    this._size--;
    item.next = null;
    return item.value;
  }

  clear() {
    let item;
    let tmp = this._header;

    while (this._size !== 0) {
      item = tmp.next;
      tmp = item;
      item.next = null;
      this._size--;
    }

    this._header = null;
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

}

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/Stack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return _Stack__WEBPACK_IMPORTED_MODULE_0__["Stack"]; });

/* harmony import */ var _IocConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/IocConst.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IConstructorName", function() { return _IocConst__WEBPACK_IMPORTED_MODULE_1__["IConstructorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonEnum", function() { return _IocConst__WEBPACK_IMPORTED_MODULE_1__["CommonEnum"]; });

/* harmony import */ var _Bind_Binder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Bind/Binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binder", function() { return _Bind_Binder__WEBPACK_IMPORTED_MODULE_2__["Binder"]; });

/* harmony import */ var _Bind_Binding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Bind/Binding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _Bind_Binding__WEBPACK_IMPORTED_MODULE_3__["Binding"]; });

/* harmony import */ var _Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/Bind/BindConst.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingConst", function() { return _Bind_BindConst__WEBPACK_IMPORTED_MODULE_4__["BindingConst"]; });

/* harmony import */ var _Prototype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/Prototype.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prototype", function() { return _Prototype__WEBPACK_IMPORTED_MODULE_5__["Prototype"]; });

/* harmony import */ var _Decorator_DecoratorClassBinder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/Decorator/DecoratorClassBinder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecoratorClassBinder", function() { return _Decorator_DecoratorClassBinder__WEBPACK_IMPORTED_MODULE_6__["DecoratorClassBinder"]; });

/* harmony import */ var _Decorator_DecoratorClassBinding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/Decorator/DecoratorClassBinding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecoratorClassBinding", function() { return _Decorator_DecoratorClassBinding__WEBPACK_IMPORTED_MODULE_7__["DecoratorClassBinding"]; });

/* harmony import */ var _Injector_InjectFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/Injector/InjectFactory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectFactory", function() { return _Injector_InjectFactory__WEBPACK_IMPORTED_MODULE_8__["InjectFactory"]; });

/* harmony import */ var _Decorator_DecoratorConst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/Decorator/DecoratorConst.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecoratorConst", function() { return _Decorator_DecoratorConst__WEBPACK_IMPORTED_MODULE_9__["DecoratorConst"]; });

/* harmony import */ var _Injector_Injector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/Injector/Injector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _Injector_Injector__WEBPACK_IMPORTED_MODULE_10__["Injector"]; });

/* harmony import */ var _Injector_InjectBinding__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/Injector/InjectBinding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectBinding", function() { return _Injector_InjectBinding__WEBPACK_IMPORTED_MODULE_11__["InjectBinding"]; });

/* harmony import */ var _Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/Injector/InjectBinder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectBinder", function() { return _Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_12__["InjectBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NInjectBinder", function() { return _Injector_InjectBinder__WEBPACK_IMPORTED_MODULE_12__["NInjectBinder"]; });

/* harmony import */ var _Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/Injector/InjectDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _Injector_InjectDecorator__WEBPACK_IMPORTED_MODULE_13__["inject"]; });

/* harmony import */ var _Pool__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/Pool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pool", function() { return _Pool__WEBPACK_IMPORTED_MODULE_14__["Pool"]; });

/* harmony import */ var _Command_CommandBinding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/Command/CommandBinding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBinding", function() { return _Command_CommandBinding__WEBPACK_IMPORTED_MODULE_15__["CommandBinding"]; });

/* harmony import */ var _Command_CommandBinder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/Command/CommandBinder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBinder", function() { return _Command_CommandBinder__WEBPACK_IMPORTED_MODULE_16__["CommandBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalCommandBinder", function() { return _Command_CommandBinder__WEBPACK_IMPORTED_MODULE_16__["SignalCommandBinder"]; });

/* harmony import */ var _Command_Command__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/Command/Command.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _Command_Command__WEBPACK_IMPORTED_MODULE_17__["Command"]; });

/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/Context/Context.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _Context_Context__WEBPACK_IMPORTED_MODULE_18__["Context"]; });

/* harmony import */ var _Command_ICommandBinder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/Command/ICommandBinder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NCommandBinder", function() { return _Command_ICommandBinder__WEBPACK_IMPORTED_MODULE_19__["NCommandBinder"]; });

/* harmony import */ var _Command_CommandConst__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/Command/CommandConst.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandConst", function() { return _Command_CommandConst__WEBPACK_IMPORTED_MODULE_20__["CommandConst"]; });

/* harmony import */ var _Signal_SignalManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/Signal/SignalManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalManager", function() { return _Signal_SignalManager__WEBPACK_IMPORTED_MODULE_21__["SignalManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NSignalManager", function() { return _Signal_SignalManager__WEBPACK_IMPORTED_MODULE_21__["NSignalManager"]; });

/* harmony import */ var _Context_IRoot__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/Context/IRoot.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NRoot", function() { return _Context_IRoot__WEBPACK_IMPORTED_MODULE_22__["NRoot"]; });


























/***/ })

/******/ });
//# sourceMappingURL=peng-ioc.js.map