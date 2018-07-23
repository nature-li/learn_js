function Dictionary() {
    var items = {};

    this.has = function (key) {
      return key in items;
    };

    this.set = function (key, value) {
        items[key] = value;
    };

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }

        return false;
    };

    this.get = function (key) {
      return this.has(key) ? items[key] : undefined;
    };

    this.keys = function () {
        var keys = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(k);
            }
        }

        return values;
    };

    this.values = function () {
      var values = [];
      for (var k in items) {
          if (this.has(k)) {
              values.push(items[k]);
          }
      }

      return values;
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };
}

module.exports=Dictionary;