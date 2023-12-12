import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/typeit-react/dist/index.es.js
var import_react = __toESM(require_react());
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _empty;
var empty_fn;
var _fire;
var fire_fn;
var _move;
var move_fn;
var _prepLoop;
var prepLoop_fn;
var _fireItemWithContext;
var fireItemWithContext_fn;
var _wait;
var wait_fn;
var _attachCursor;
var attachCursor_fn;
var _elementIsInput;
var elementIsInput_fn;
var _queueAndReturn;
var queueAndReturn_fn;
var _maybeAppendPause;
var maybeAppendPause_fn;
var _generateTemporaryOptionQueueItems;
var generateTemporaryOptionQueueItems_fn;
var _updateOptions;
var updateOptions_fn;
var _generateQueue;
var generateQueue_fn;
var _buildOptions;
var _prependHardcodedStrings;
var prependHardcodedStrings_fn;
var _setUpCursor;
var setUpCursor_fn;
var _addSplitPause;
var addSplitPause_fn;
var _type;
var type_fn;
var _delete;
var delete_fn;
var _removeNode;
var removeNode_fn;
var _getPace;
var getPace_fn;
var _derivedCursorPosition;
var derivedCursorPosition_get;
var _isInput;
var isInput_get;
var _shouldRenderCursor;
var shouldRenderCursor_get;
var _allChars;
var allChars_get;
var _a;
var isArray = (thing) => Array.isArray(thing);
var asArray = (value) => isArray(value) ? value : [value];
var Queue = function(initialItems) {
  let add = function(steps) {
    asArray(steps).forEach((step) => {
      var _a2;
      return _q.set(Symbol((_a2 = step.char) == null ? void 0 : _a2.innerText), buildQueueItem({ ...step }));
    });
    return this;
  };
  let getTypeable = () => rawValues().filter((value) => value.typeable);
  let set = function(index, item) {
    let keys = [..._q.keys()];
    _q.set(keys[index], buildQueueItem(item));
  };
  let buildQueueItem = (queueItem) => {
    queueItem.shouldPauseCursor = function() {
      return Boolean(this.typeable || this.cursorable || this.deletable);
    };
    return queueItem;
  };
  let reset = function() {
    _q.forEach((item) => delete item.done);
  };
  let wipe = function() {
    _q = /* @__PURE__ */ new Map();
    add(initialItems);
  };
  let getQueue = () => _q;
  let rawValues = () => Array.from(_q.values());
  let destroy = (key) => _q.delete(key);
  let getItems = (all = false) => all ? rawValues() : rawValues().filter((i) => !i.done);
  let done = (key, shouldDestroy = false) => shouldDestroy ? _q.delete(key) : _q.get(key).done = true;
  let _q = /* @__PURE__ */ new Map();
  add(initialItems);
  return {
    add,
    set,
    wipe,
    done,
    reset,
    destroy,
    getItems,
    getQueue,
    getTypeable
  };
};
var DATA_ATTRIBUTE = "data-typeit-id";
var CURSOR_CLASS = "ti-cursor";
var END = "END";
var DEFAULT_STATUSES = {
  started: false,
  completed: false,
  frozen: false,
  destroyed: false
};
var DEFAULT_OPTIONS = {
  breakLines: true,
  cursor: {
    autoPause: true,
    autoPauseDelay: 500,
    animation: {
      frames: [0, 0, 1].map((n) => {
        return { opacity: n };
      }),
      options: {
        iterations: Infinity,
        easing: "steps(2, start)",
        fill: "forwards"
      }
    }
  },
  cursorChar: "|",
  cursorSpeed: 1e3,
  deleteSpeed: null,
  html: true,
  lifeLike: true,
  loop: false,
  loopDelay: 750,
  nextStringDelay: 750,
  speed: 100,
  startDelay: 250,
  startDelete: false,
  strings: [],
  waitUntilVisible: false,
  beforeString: () => {
  },
  afterString: () => {
  },
  beforeStep: () => {
  },
  afterStep: () => {
  },
  afterComplete: () => {
  }
};
var PLACEHOLDER_CSS = `[${DATA_ATTRIBUTE}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;
var createElement = (el) => document.createElement(el);
var createTextNode = (content) => document.createTextNode(content);
var appendStyleBlock = (styles, id = "") => {
  let styleBlock = createElement("style");
  styleBlock.id = id;
  styleBlock.appendChild(createTextNode(styles));
  document.head.appendChild(styleBlock);
};
var calculateDelay = (delayArg) => {
  if (!isArray(delayArg)) {
    delayArg = [delayArg / 2, delayArg / 2];
  }
  return delayArg;
};
var randomInRange = (value, range2) => {
  return Math.abs(
    Math.random() * (value + range2 - (value - range2)) + (value - range2)
  );
};
var range = (val) => val / 2;
function calculatePace(options) {
  let { speed, deleteSpeed, lifeLike } = options;
  deleteSpeed = deleteSpeed !== null ? deleteSpeed : speed / 3;
  return lifeLike ? [
    randomInRange(speed, range(speed)),
    randomInRange(deleteSpeed, range(deleteSpeed))
  ] : [speed, deleteSpeed];
}
var toArray = (val) => Array.from(val);
var expandTextNodes = (element) => {
  [...element.childNodes].forEach((child) => {
    if (child.nodeValue) {
      [...child.nodeValue].forEach((c) => {
        child.parentNode.insertBefore(createTextNode(c), child);
      });
      child.remove();
      return;
    }
    expandTextNodes(child);
  });
  return element;
};
var getParsedBody = (content) => {
  let doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = content;
  return expandTextNodes(doc.body);
};
function walkElementNodes(element, shouldReverse = false, shouldIncludeCursor = false) {
  let cursor = element.querySelector(`.${CURSOR_CLASS}`);
  let walker = document.createTreeWalker(element, NodeFilter.SHOW_ALL, {
    acceptNode: (node) => {
      var _a2, _b;
      if (cursor && shouldIncludeCursor) {
        if ((_a2 = node.classList) == null ? void 0 : _a2.contains(CURSOR_CLASS)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        if (cursor.contains(node)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      return ((_b = node.classList) == null ? void 0 : _b.contains(CURSOR_CLASS)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let nextNode;
  let nodes = [];
  while (nextNode = walker.nextNode()) {
    if (!nextNode.originalParent) {
      nextNode.originalParent = nextNode.parentNode;
    }
    nodes.push(nextNode);
  }
  return shouldReverse ? nodes.reverse() : nodes;
}
function chunkStringAsHtml(string) {
  return walkElementNodes(getParsedBody(string));
}
function maybeChunkStringAsHtml(str, asHtml = true) {
  return asHtml ? chunkStringAsHtml(str) : toArray(str).map(createTextNode);
}
var isNumber = (value) => Number.isInteger(value);
var countStepsToSelector = ({
  queueItems,
  selector,
  cursorPosition,
  to
}) => {
  if (isNumber(selector)) {
    return selector * -1;
  }
  let isMovingToEnd = new RegExp(END, "i").test(to);
  let selectorIndex = selector ? [...queueItems].reverse().findIndex(({ char }) => {
    let parentElement = char.parentElement;
    let parentMatches = parentElement.matches(selector);
    if (isMovingToEnd && parentMatches) {
      return true;
    }
    return parentMatches && parentElement.firstChild.isSameNode(char);
  }) : -1;
  if (selectorIndex < 0) {
    selectorIndex = isMovingToEnd ? 0 : queueItems.length - 1;
  }
  let offset = isMovingToEnd ? 0 : 1;
  return selectorIndex - cursorPosition + offset;
};
var destroyTimeouts = (timeouts) => {
  timeouts.forEach(clearTimeout);
  return [];
};
var duplicate = (value, times) => new Array(times).fill(value);
var beforePaint = (cb) => {
  return new Promise((resolve) => {
    requestAnimationFrame(async () => {
      resolve(await cb());
    });
  });
};
var getAnimationFromElement = (element) => {
  return element == null ? void 0 : element.getAnimations().find((animation) => {
    return animation.id === element.dataset.tiAnimationId;
  });
};
var setCursorAnimation = ({
  cursor,
  frames,
  options
}) => {
  let animation = cursor.animate(frames, options);
  animation.pause();
  animation.id = cursor.dataset.tiAnimationId;
  beforePaint(() => {
    beforePaint(() => {
      animation.play();
    });
  });
  return animation;
};
var rebuildCursorAnimation = ({
  cursor,
  options,
  cursorOptions
}) => {
  if (!cursor || !cursorOptions)
    return;
  let animation = getAnimationFromElement(cursor);
  let oldCurrentTime;
  if (animation) {
    options.delay = animation.effect.getComputedTiming().delay;
    oldCurrentTime = animation.currentTime;
    animation.cancel();
  }
  let newAnimation = setCursorAnimation({
    cursor,
    frames: cursorOptions.animation.frames,
    options
  });
  if (oldCurrentTime) {
    newAnimation.currentTime = oldCurrentTime;
  }
  return newAnimation;
};
var execute = (queueItem) => {
  var _a2;
  return (_a2 = queueItem.func) == null ? void 0 : _a2.call(null);
};
var fireItem = async ({
  index,
  queueItems,
  wait: wait2,
  cursor,
  cursorOptions
}) => {
  let queueItem = queueItems[index][1];
  let instantQueue = [];
  let tempIndex = index;
  let futureItem = queueItem;
  let shouldBeGrouped = () => futureItem && !futureItem.delay;
  let shouldPauseCursor = queueItem.shouldPauseCursor() && cursorOptions.autoPause;
  while (shouldBeGrouped()) {
    instantQueue.push(futureItem);
    shouldBeGrouped() && tempIndex++;
    futureItem = queueItems[tempIndex] ? queueItems[tempIndex][1] : null;
  }
  if (instantQueue.length) {
    await beforePaint(async () => {
      for (let q of instantQueue) {
        await execute(q);
      }
    });
    return tempIndex - 1;
  }
  let animation = getAnimationFromElement(cursor);
  let options;
  if (animation) {
    options = {
      ...animation.effect.getComputedTiming(),
      delay: shouldPauseCursor ? cursorOptions.autoPauseDelay : 0
    };
  }
  await wait2(async () => {
    if (animation && shouldPauseCursor) {
      animation.cancel();
    }
    await beforePaint(() => {
      execute(queueItem);
    });
  }, queueItem.delay);
  await rebuildCursorAnimation({
    cursor,
    options,
    cursorOptions
  });
  return index;
};
var fireWhenVisible = (element, func) => {
  let observer = new IntersectionObserver(
    (entries, observer2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          func();
          observer2.unobserve(element);
        }
      });
    },
    { threshold: 1 }
  );
  observer.observe(element);
};
var generateHash = () => Math.random().toString().substring(2, 9);
var isInput = (el) => "value" in el;
var getAllChars = (element) => {
  if (isInput(element)) {
    return toArray(element.value);
  }
  return walkElementNodes(element, true).filter(
    (c) => !(c.childNodes.length > 0)
  );
};
var handleFunctionalArg = (arg) => {
  return typeof arg === "function" ? arg() : arg;
};
var select = (selector, element = document, all = false) => {
  return element[`querySelector${all ? "All" : ""}`](selector);
};
var isBodyElement = (node) => /body/i.test(node == null ? void 0 : node.tagName);
var insertIntoElement = (originalTarget, character) => {
  if (isInput(originalTarget)) {
    originalTarget.value = `${originalTarget.value}${character.textContent}`;
    return;
  }
  character.innerHTML = "";
  let target = isBodyElement(character.originalParent) ? originalTarget : (
    // If we add one-off fresh elements, there will be no
    // "originalParent", so always fall back to the default target.
    character.originalParent || originalTarget
  );
  target.insertBefore(
    character,
    select("." + CURSOR_CLASS, target) || null
  );
};
var isNonVoidElement = (el) => /<(.+)>(.*?)<\/(.+)>/.test(el.outerHTML);
var merge = (originalObj, newObj) => Object.assign({}, originalObj, newObj);
var processCursorOptions = (cursorOptions) => {
  var _a2, _b;
  if (typeof cursorOptions === "object") {
    let newOptions = {};
    let { frames: defaultFrames, options: defaultOptions } = DEFAULT_OPTIONS.cursor.animation;
    newOptions.animation = cursorOptions.animation || {};
    newOptions.animation.frames = ((_a2 = cursorOptions.animation) == null ? void 0 : _a2.frames) || defaultFrames;
    newOptions.animation.options = merge(
      defaultOptions,
      ((_b = cursorOptions.animation) == null ? void 0 : _b.options) || {}
    );
    newOptions.autoPause = cursorOptions.autoPause ?? DEFAULT_OPTIONS.cursor.autoPause;
    newOptions.autoPauseDelay = cursorOptions.autoPauseDelay || DEFAULT_OPTIONS.cursor.autoPauseDelay;
    return newOptions;
  }
  if (cursorOptions === true) {
    return DEFAULT_OPTIONS.cursor;
  }
  return cursorOptions;
};
var removeNode = (node, rootElement) => {
  if (!node)
    return;
  let nodeParent = node.parentNode;
  let nodeToRemove = nodeParent.childNodes.length > 1 || nodeParent.isSameNode(rootElement) ? (
    // This parent still needs to exist.
    node
  ) : (
    // There's nothing else in there, so just delete the entire thing.
    // By doing this, we clean up markup as we go along.
    nodeParent
  );
  nodeToRemove.remove();
};
var repositionCursor = (element, allChars, newCursorPosition) => {
  let nodeToInsertBefore = allChars[newCursorPosition - 1];
  let cursor = select(`.${CURSOR_CLASS}`, element);
  element = (nodeToInsertBefore == null ? void 0 : nodeToInsertBefore.parentNode) || element;
  element.insertBefore(cursor, nodeToInsertBefore || null);
};
function selectorToElement(thing) {
  return typeof thing === "string" ? select(thing) : thing;
}
var cursorFontStyles = {
  "font-family": "",
  "font-weight": "",
  "font-size": "",
  "font-style": "",
  "line-height": "",
  color: "",
  transform: "translateX(-.125em)"
};
var setCursorStyles = (id, element) => {
  let rootSelector = `[${DATA_ATTRIBUTE}='${id}']`;
  let cursorSelector = `${rootSelector} .${CURSOR_CLASS}`;
  let computedStyles = getComputedStyle(element);
  let customProperties = Object.entries(cursorFontStyles).reduce(
    (accumulator, [item, value]) => {
      return `${accumulator} ${item}: var(--ti-cursor-${item}, ${value || computedStyles[item]});`;
    },
    ""
  );
  appendStyleBlock(
    `${cursorSelector} { display: inline-block; width: 0; ${customProperties} }`,
    id
  );
};
function splitOnBreak(str) {
  return str.replace(/<!--(.+?)-->/g, "").trim().split(/<br(?:\s*?)(?:\/)?>/);
}
var updateCursorPosition = (steps, cursorPosition, printedCharacters) => {
  return Math.min(
    Math.max(cursorPosition + steps, 0),
    printedCharacters.length
  );
};
var wait = (callback, delay, timeouts) => {
  return new Promise((resolve) => {
    let cb = async () => {
      await callback();
      resolve();
    };
    timeouts.push(setTimeout(cb, delay || 0));
  });
};
var TypeIt$1 = (_a = class {
  constructor(element, options = {}) {
    __privateAdd(this, _empty);
    __privateAdd(this, _fire);
    __privateAdd(this, _move);
    __privateAdd(this, _prepLoop);
    __privateAdd(this, _fireItemWithContext);
    __privateAdd(this, _wait);
    __privateAdd(this, _attachCursor);
    __privateAdd(this, _elementIsInput);
    __privateAdd(this, _queueAndReturn);
    __privateAdd(this, _maybeAppendPause);
    __privateAdd(this, _generateTemporaryOptionQueueItems);
    __privateAdd(this, _updateOptions);
    __privateAdd(this, _generateQueue);
    __privateAdd(this, _prependHardcodedStrings);
    __privateAdd(this, _setUpCursor);
    __privateAdd(this, _addSplitPause);
    __privateAdd(this, _type);
    __privateAdd(this, _delete);
    __privateAdd(this, _removeNode);
    __privateAdd(this, _getPace);
    __privateAdd(this, _derivedCursorPosition);
    __privateAdd(this, _isInput);
    __privateAdd(this, _shouldRenderCursor);
    __privateAdd(this, _allChars);
    __publicField(this, "element");
    __publicField(this, "timeouts");
    __publicField(this, "cursorPosition");
    __publicField(this, "predictedCursorPosition");
    __publicField(this, "statuses", {
      started: false,
      completed: false,
      frozen: false,
      destroyed: false
    });
    __publicField(this, "opts");
    __publicField(this, "id");
    __publicField(this, "queue");
    __publicField(this, "cursor");
    __publicField(this, "unfreeze", () => {
    });
    __publicField(this, "is", function(key) {
      return this.statuses[key];
    });
    __privateAdd(this, _buildOptions, (options2) => {
      options2.cursor = processCursorOptions(
        options2.cursor ?? DEFAULT_OPTIONS.cursor
      );
      this.opts.strings = __privateMethod(this, _prependHardcodedStrings, prependHardcodedStrings_fn).call(this, asArray(this.opts.strings));
      this.opts = merge(this.opts, {
        html: !__privateGet(this, _isInput, isInput_get) && this.opts.html,
        nextStringDelay: calculateDelay(this.opts.nextStringDelay),
        loopDelay: calculateDelay(this.opts.loopDelay)
      });
    });
    this.opts = merge(DEFAULT_OPTIONS, options);
    this.element = selectorToElement(element);
    this.timeouts = [];
    this.cursorPosition = 0;
    this.unfreeze = () => {
    };
    this.predictedCursorPosition = null;
    this.statuses = merge({}, DEFAULT_STATUSES);
    this.id = generateHash();
    this.queue = Queue([{ delay: this.opts.startDelay }]);
    __privateGet(this, _buildOptions).call(this, options);
    this.cursor = __privateMethod(this, _setUpCursor, setUpCursor_fn).call(this);
    this.element.dataset.typeitId = this.id;
    appendStyleBlock(PLACEHOLDER_CSS);
    if (this.opts.strings.length) {
      __privateMethod(this, _generateQueue, generateQueue_fn).call(this);
    }
  }
  /**
   * Can only be called once.
   */
  go() {
    if (this.statuses.started) {
      return this;
    }
    __privateMethod(this, _attachCursor, attachCursor_fn).call(this);
    if (!this.opts.waitUntilVisible) {
      __privateMethod(this, _fire, fire_fn).call(this);
      return this;
    }
    fireWhenVisible(this.element, __privateMethod(this, _fire, fire_fn).bind(this));
    return this;
  }
  destroy(shouldRemoveCursor = true) {
    this.timeouts = destroyTimeouts(this.timeouts);
    handleFunctionalArg(shouldRemoveCursor) && this.cursor && __privateMethod(this, _removeNode, removeNode_fn).call(this, this.cursor);
    this.statuses.destroyed = true;
  }
  reset(rebuild) {
    !this.is("destroyed") && this.destroy();
    if (rebuild) {
      this.queue.wipe();
      rebuild(this);
    } else {
      this.queue.reset();
    }
    this.cursorPosition = 0;
    for (let property in this.statuses) {
      this.statuses[property] = false;
    }
    this.element[__privateMethod(this, _elementIsInput, elementIsInput_fn).call(this) ? "value" : "innerHTML"] = "";
    return this;
  }
  type(string, actionOpts = {}) {
    string = handleFunctionalArg(string);
    let { instant } = actionOpts;
    let bookEndQueueItems = __privateMethod(this, _generateTemporaryOptionQueueItems, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    let chars = maybeChunkStringAsHtml(string, this.opts.html);
    let charsAsQueueItems = chars.map((char) => {
      return {
        func: () => __privateMethod(this, _type, type_fn).call(this, char),
        char,
        delay: instant || isNonVoidElement(char) ? 0 : __privateMethod(this, _getPace, getPace_fn).call(this),
        typeable: char.nodeType === Node.TEXT_NODE
      };
    });
    let itemsToQueue = [
      bookEndQueueItems[0],
      { func: async () => await this.opts.beforeString(string, this) },
      ...charsAsQueueItems,
      { func: async () => await this.opts.afterString(string, this) },
      bookEndQueueItems[1]
    ];
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, itemsToQueue, actionOpts);
  }
  break(actionOpts = {}) {
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, {
      func: () => __privateMethod(this, _type, type_fn).call(this, createElement("BR")),
      typeable: true
    }, actionOpts);
  }
  move(movementArg, actionOpts = {}) {
    movementArg = handleFunctionalArg(movementArg);
    let bookEndQueueItems = __privateMethod(this, _generateTemporaryOptionQueueItems, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    let { instant, to } = actionOpts;
    let numberOfSteps = countStepsToSelector({
      queueItems: this.queue.getTypeable(),
      selector: movementArg === null ? "" : movementArg,
      to,
      cursorPosition: __privateGet(this, _derivedCursorPosition, derivedCursorPosition_get)
    });
    let directionalStep = numberOfSteps < 0 ? -1 : 1;
    this.predictedCursorPosition = __privateGet(this, _derivedCursorPosition, derivedCursorPosition_get) + numberOfSteps;
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, [
      bookEndQueueItems[0],
      ...duplicate(
        {
          func: () => __privateMethod(this, _move, move_fn).call(this, directionalStep),
          delay: instant ? 0 : __privateMethod(this, _getPace, getPace_fn).call(this),
          cursorable: true
        },
        Math.abs(numberOfSteps)
      ),
      bookEndQueueItems[1]
    ], actionOpts);
  }
  exec(func, actionOpts = {}) {
    let bookEndQueueItems = __privateMethod(this, _generateTemporaryOptionQueueItems, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, [bookEndQueueItems[0], { func: () => func(this) }, bookEndQueueItems[1]], actionOpts);
  }
  options(opts, actionOpts = {}) {
    opts = handleFunctionalArg(opts);
    __privateMethod(this, _updateOptions, updateOptions_fn).call(this, opts);
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, {}, actionOpts);
  }
  pause(milliseconds, actionOpts = {}) {
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, { delay: handleFunctionalArg(milliseconds) }, actionOpts);
  }
  delete(numCharacters = null, actionOpts = {}) {
    numCharacters = handleFunctionalArg(numCharacters);
    let bookEndQueueItems = __privateMethod(this, _generateTemporaryOptionQueueItems, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    let num = numCharacters;
    let { instant, to } = actionOpts;
    let typeableQueueItems = this.queue.getTypeable();
    let rounds = (() => {
      if (num === null) {
        return typeableQueueItems.length;
      }
      if (isNumber(num)) {
        return num;
      }
      return countStepsToSelector({
        queueItems: typeableQueueItems,
        selector: num,
        cursorPosition: __privateGet(this, _derivedCursorPosition, derivedCursorPosition_get),
        to
      });
    })();
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, [
      bookEndQueueItems[0],
      ...duplicate(
        {
          func: __privateMethod(this, _delete, delete_fn).bind(this),
          delay: instant ? 0 : __privateMethod(this, _getPace, getPace_fn).call(this, 1),
          deletable: true
        },
        rounds
      ),
      bookEndQueueItems[1]
    ], actionOpts);
  }
  freeze() {
    this.statuses.frozen = true;
  }
  /**
   * Like `.go()`, but more... "off the grid."
   *
   * - won't trigger `afterComplete` callback
   * - items won't be replayed after `.reset()`
   *
   * When called, all non-done items will be "flushed" --
   * that is, executed, but not remembered.
   */
  flush(cb = () => {
  }) {
    __privateMethod(this, _attachCursor, attachCursor_fn).call(this);
    __privateMethod(this, _fire, fire_fn).call(this, false).then(cb);
    return this;
  }
  getQueue() {
    return this.queue;
  }
  getOptions() {
    return this.opts;
  }
  updateOptions(options) {
    return __privateMethod(this, _updateOptions, updateOptions_fn).call(this, options);
  }
  getElement() {
    return this.element;
  }
  empty(actionOpts = {}) {
    return __privateMethod(this, _queueAndReturn, queueAndReturn_fn).call(this, { func: __privateMethod(this, _empty, empty_fn).bind(this) }, actionOpts);
  }
}, _empty = /* @__PURE__ */ new WeakSet(), empty_fn = async function() {
  if (__privateMethod(this, _elementIsInput, elementIsInput_fn).call(this)) {
    this.element.value = "";
    return;
  }
  __privateGet(this, _allChars, allChars_get).forEach(__privateMethod(this, _removeNode, removeNode_fn).bind(this));
  return;
}, _fire = /* @__PURE__ */ new WeakSet(), fire_fn = async function(remember = true) {
  this.statuses.started = true;
  let cleanUp = (qKey) => {
    this.queue.done(qKey, !remember);
  };
  try {
    let queueItems = [...this.queue.getQueue()];
    for (let index = 0; index < queueItems.length; index++) {
      let [queueKey, queueItem] = queueItems[index];
      if (queueItem.done)
        continue;
      if (!queueItem.deletable || queueItem.deletable && __privateGet(this, _allChars, allChars_get).length) {
        let newIndex = await __privateMethod(this, _fireItemWithContext, fireItemWithContext_fn).call(this, index, queueItems);
        Array(newIndex - index).fill(index + 1).map((x, y) => x + y).forEach((i) => {
          let [key] = queueItems[i];
          cleanUp(key);
        });
        index = newIndex;
      }
      cleanUp(queueKey);
    }
    if (!remember) {
      return this;
    }
    this.statuses.completed = true;
    await this.opts.afterComplete(this);
    if (!this.opts.loop) {
      throw "";
    }
    let delay = this.opts.loopDelay;
    __privateMethod(this, _wait, wait_fn).call(this, async () => {
      await __privateMethod(this, _prepLoop, prepLoop_fn).call(this, delay[0]);
      __privateMethod(this, _fire, fire_fn).call(this);
    }, delay[1]);
  } catch (e) {
  }
  return this;
}, _move = /* @__PURE__ */ new WeakSet(), move_fn = async function(step) {
  this.cursorPosition = updateCursorPosition(
    step,
    this.cursorPosition,
    __privateGet(this, _allChars, allChars_get)
  );
  repositionCursor(this.element, __privateGet(this, _allChars, allChars_get), this.cursorPosition);
}, _prepLoop = /* @__PURE__ */ new WeakSet(), prepLoop_fn = async function(delay) {
  let derivedCursorPosition = __privateGet(this, _derivedCursorPosition, derivedCursorPosition_get);
  derivedCursorPosition && await __privateMethod(this, _move, move_fn).call(this, { value: derivedCursorPosition });
  let queueItems = __privateGet(this, _allChars, allChars_get).map((c) => {
    return [
      Symbol(),
      {
        func: __privateMethod(this, _delete, delete_fn).bind(this),
        delay: __privateMethod(this, _getPace, getPace_fn).call(this, 1),
        deletable: true,
        shouldPauseCursor: () => true
      }
    ];
  });
  for (let index = 0; index < queueItems.length; index++) {
    await __privateMethod(this, _fireItemWithContext, fireItemWithContext_fn).call(this, index, queueItems);
  }
  this.queue.reset();
  this.queue.set(0, { delay });
}, _fireItemWithContext = /* @__PURE__ */ new WeakSet(), fireItemWithContext_fn = function(index, queueItems) {
  return fireItem({
    index,
    queueItems,
    wait: __privateMethod(this, _wait, wait_fn).bind(this),
    cursor: this.cursor,
    cursorOptions: this.opts.cursor
  });
}, _wait = /* @__PURE__ */ new WeakSet(), wait_fn = async function(callback, delay, silent = false) {
  if (this.statuses.frozen) {
    await new Promise((resolve) => {
      this.unfreeze = () => {
        this.statuses.frozen = false;
        resolve();
      };
    });
  }
  silent || await this.opts.beforeStep(this);
  await wait(callback, delay, this.timeouts);
  silent || await this.opts.afterStep(this);
}, _attachCursor = /* @__PURE__ */ new WeakSet(), attachCursor_fn = async function() {
  !__privateMethod(this, _elementIsInput, elementIsInput_fn).call(this) && this.cursor && this.element.appendChild(this.cursor);
  if (__privateGet(this, _shouldRenderCursor, shouldRenderCursor_get)) {
    setCursorStyles(this.id, this.element);
    this.cursor.dataset.tiAnimationId = this.id;
    let { animation } = this.opts.cursor;
    let { frames, options } = animation;
    setCursorAnimation({
      frames,
      cursor: this.cursor,
      options: {
        duration: this.opts.cursorSpeed,
        ...options
      }
    });
  }
}, _elementIsInput = /* @__PURE__ */ new WeakSet(), elementIsInput_fn = function() {
  return isInput(this.element);
}, _queueAndReturn = /* @__PURE__ */ new WeakSet(), queueAndReturn_fn = function(steps, opts) {
  this.queue.add(steps);
  __privateMethod(this, _maybeAppendPause, maybeAppendPause_fn).call(this, opts);
  return this;
}, _maybeAppendPause = /* @__PURE__ */ new WeakSet(), maybeAppendPause_fn = function(opts = {}) {
  let delay = opts.delay;
  delay && this.queue.add({ delay });
}, _generateTemporaryOptionQueueItems = /* @__PURE__ */ new WeakSet(), generateTemporaryOptionQueueItems_fn = function(newOptions = {}) {
  return [
    { func: () => __privateMethod(this, _updateOptions, updateOptions_fn).call(this, newOptions) },
    { func: () => __privateMethod(this, _updateOptions, updateOptions_fn).call(this, this.opts) }
  ];
}, _updateOptions = /* @__PURE__ */ new WeakSet(), updateOptions_fn = async function(opts) {
  this.opts = merge(this.opts, opts);
}, _generateQueue = /* @__PURE__ */ new WeakSet(), generateQueue_fn = function() {
  let strings = this.opts.strings.filter((string) => !!string);
  strings.forEach((string, index) => {
    this.type(string);
    if (index + 1 === strings.length) {
      return;
    }
    let splitItems = this.opts.breakLines ? [{ func: () => __privateMethod(this, _type, type_fn).call(this, createElement("BR")), typeable: true }] : duplicate(
      {
        func: __privateMethod(this, _delete, delete_fn).bind(this),
        delay: __privateMethod(this, _getPace, getPace_fn).call(this, 1)
      },
      this.queue.getTypeable().length
    );
    __privateMethod(this, _addSplitPause, addSplitPause_fn).call(this, splitItems);
  });
}, _buildOptions = /* @__PURE__ */ new WeakMap(), _prependHardcodedStrings = /* @__PURE__ */ new WeakSet(), prependHardcodedStrings_fn = function(strings) {
  let existingMarkup = this.element.innerHTML;
  if (!existingMarkup) {
    return strings;
  }
  this.element.innerHTML = "";
  if (this.opts.startDelete) {
    this.element.innerHTML = existingMarkup;
    expandTextNodes(this.element);
    __privateMethod(this, _addSplitPause, addSplitPause_fn).call(this, duplicate(
      {
        func: __privateMethod(this, _delete, delete_fn).bind(this),
        delay: __privateMethod(this, _getPace, getPace_fn).call(this, 1),
        deletable: true
      },
      __privateGet(this, _allChars, allChars_get).length
    ));
    return strings;
  }
  return splitOnBreak(existingMarkup).concat(strings);
}, _setUpCursor = /* @__PURE__ */ new WeakSet(), setUpCursor_fn = function() {
  if (__privateGet(this, _isInput, isInput_get)) {
    return null;
  }
  let cursor = createElement("span");
  cursor.className = CURSOR_CLASS;
  if (!__privateGet(this, _shouldRenderCursor, shouldRenderCursor_get)) {
    cursor.style.visibility = "hidden";
    return cursor;
  }
  cursor.innerHTML = getParsedBody(this.opts.cursorChar).innerHTML;
  return cursor;
}, _addSplitPause = /* @__PURE__ */ new WeakSet(), addSplitPause_fn = function(items) {
  let delay = this.opts.nextStringDelay;
  this.queue.add([{ delay: delay[0] }, ...items, { delay: delay[1] }]);
}, _type = /* @__PURE__ */ new WeakSet(), type_fn = function(char) {
  insertIntoElement(this.element, char);
}, _delete = /* @__PURE__ */ new WeakSet(), delete_fn = function() {
  if (!__privateGet(this, _allChars, allChars_get).length)
    return;
  if (__privateGet(this, _isInput, isInput_get)) {
    this.element.value = this.element.value.slice(0, -1);
  } else {
    __privateMethod(this, _removeNode, removeNode_fn).call(this, __privateGet(this, _allChars, allChars_get)[this.cursorPosition]);
  }
}, _removeNode = /* @__PURE__ */ new WeakSet(), removeNode_fn = function(node) {
  removeNode(node, this.element);
}, _getPace = /* @__PURE__ */ new WeakSet(), getPace_fn = function(index = 0) {
  return calculatePace(this.opts)[index];
}, _derivedCursorPosition = /* @__PURE__ */ new WeakSet(), derivedCursorPosition_get = function() {
  return this.predictedCursorPosition ?? this.cursorPosition;
}, _isInput = /* @__PURE__ */ new WeakSet(), isInput_get = function() {
  return isInput(this.element);
}, _shouldRenderCursor = /* @__PURE__ */ new WeakSet(), shouldRenderCursor_get = function() {
  return !!this.opts.cursor && !__privateGet(this, _isInput, isInput_get);
}, _allChars = /* @__PURE__ */ new WeakSet(), allChars_get = function() {
  return getAllChars(this.element);
}, _a);
var DynamicElementComponent = (0, import_react.forwardRef)((props, ref) => {
  const { as: As } = props;
  return import_react.default.createElement(As, { ref, ...props });
});
var defaultPropOptions = {};
var TypeIt = ({
  as = "span",
  options = defaultPropOptions,
  children = null,
  getBeforeInit = (instance) => instance,
  getAfterInit = (instance) => instance,
  ...remainingProps
}) => {
  const elementRef = (0, import_react.useRef)(null);
  const instanceRef = (0, import_react.useRef)(null);
  const [shouldShowChildren, setShouldShowChildren] = (0, import_react.useState)(true);
  const [instanceOptions, setInstanceOptions] = (0, import_react.useState)(null);
  function calculateOptions() {
    const optionsClone = Object.assign({}, options);
    if (children && elementRef.current) {
      optionsClone.strings = elementRef.current.innerHTML;
    }
    setInstanceOptions(optionsClone);
  }
  function generateNewInstance() {
    instanceRef.current = new TypeIt$1(elementRef.current, instanceOptions);
    instanceRef.current = getBeforeInit(instanceRef.current);
    instanceRef.current.go();
    instanceRef.current = getAfterInit(instanceRef.current);
  }
  (0, import_react.useEffect)(() => {
    calculateOptions();
    setShouldShowChildren(false);
  }, [options]);
  (0, import_react.useEffect)(() => {
    var _a2;
    if (!instanceOptions)
      return;
    ((_a2 = instanceRef.current) == null ? void 0 : _a2.updateOptions(instanceOptions)) || generateNewInstance();
  }, [instanceOptions]);
  (0, import_react.useEffect)(() => {
    return () => {
      var _a2;
      return (_a2 = instanceRef.current) == null ? void 0 : _a2.destroy();
    };
  }, []);
  return import_react.default.createElement(
    DynamicElementComponent,
    {
      ref: elementRef,
      as,
      children: shouldShowChildren ? children : null,
      style: { opacity: shouldShowChildren ? 0 : 1 },
      ...remainingProps
    }
  );
};
export {
  TypeIt as default
};
//# sourceMappingURL=typeit-react.js.map
