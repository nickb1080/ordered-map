// Generated by CoffeeScript 1.8.0
var OrderedMap;

OrderedMap = function() {
  var head, instance, size, storage, tail;
  storage = Object.create(null);
  head = null;
  tail = null;
  size = 0;
  instance = {
    push: function(key, value) {
      var item, prior_tail;
      if (instance.has(key)) {
        instance.remove(key);
      }
      prior_tail = tail;
      item = tail = storage[key] = {
        key: key,
        value: value,
        prev: prior_tail,
        next: null
      };
      if (prior_tail != null) {
        prior_tail.next = item;
      }
      if (head == null) {
        head = item;
      }
      return size += 1;
    },
    pop: function() {
      var prior_tail;
      if (!tail) {
        return null;
      }
      prior_tail = tail;
      tail = prior_tail.prev;
      if (tail != null) {
        tail.next = null;
      }
      size -= 1;
      return prior_tail.value;
    },
    unshift: function(key, value) {
      var item, prior_head;
      if (instance.has(key)) {
        instance.remove(key);
      }
      prior_head = head;
      item = head = storage[key] = {
        key: key,
        value: value,
        prev: null,
        next: prior_head
      };
      if (prior_head != null) {
        prior_head.prev = item;
      }
      if (!tail) {
        tail = item;
      }
      return size += 1;
    },
    shift: function() {
      var prior_head;
      if (!head) {
        return null;
      }
      prior_head = head;
      head = prior_head.next;
      if (head != null) {
        head.prev = null;
      }
      size -= 1;
      return prior_head.value;
    },
    get: function(key) {
      var ret, _ref;
      ret = (_ref = storage[key]) != null ? _ref.value : void 0;
      if (ret != null) {
        return ret;
      } else {
        return null;
      }
    },
    update: function(key, value) {
      var item;
      item = storage[key];
      if (item != null) {
        item.value = value;
        return true;
      }
      return null;
    },
    remove: function(key) {
      var item, _ref, _ref1;
      item = storage[key];
      if (item == null) {
        return null;
      }
      if (item === head) {
        return instance.shift();
      }
      if (item === tail) {
        return instance.pop();
      }
      if ((_ref = item.prev) != null) {
        _ref.next = item.next;
      }
      if ((_ref1 = item.next) != null) {
        _ref1.prev = item.prev;
      }
      size -= 1;
      return item.value;
    },
    keys: function() {
      var item, keys;
      keys = [];
      item = head;
      while (item != null) {
        keys.push(item.key);
        item = item.next;
      }
      return keys;
    },
    forEach: function(cb) {
      var item;
      item = head;
      while (item != null) {
        cb(item.key, item.value);
        item = item.next;
      }
      return void 0;
    },
    has: function(key) {
      return Object.prototype.hasOwnProperty.call(storage, key);
    },
    size: function() {
      return size;
    },
    last: function() {
      return tail.value;
    },
    first: function() {
      return head.value;
    },
    at: function(pos) {
      var i, item;
      i = 0;
      item = head;
      while (i < pos) {
        i += 1;
        item = item.next;
      }
      return (item != null ? item.value : void 0) || void 0;
    },
    clear: function() {
      head = null;
      tail = null;
      storage = Object.create(null);
      size = 0;
      return void 0;
    }
  };
  return instance;
};

module.exports = OrderedMap;
