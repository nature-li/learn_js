function Stack() {
    var items = [];

    this.push = function (element) {
        items.push(element);
    };

    this.pop = function () {
        return items.pop();
    };

    this.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length === 0;
    };

    this.size = function () {
        return items.length;
    };

    this.clear = function () {
        items = [];
    };

    this.print = function () {
        console.log(items.toString());
    }
}

function baseConvetor(decNumber, base) {
    var remStack = new Stack();
    var rem;
    var baseString = '';
    var digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

module.exports=Stack;