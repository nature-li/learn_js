function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function (element) {
        var node = new Node(element);
        var current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head;
            var previous;
            var index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }

            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element);
            var current = head;
            var previous = null;
            var index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }

            length++;
            return true;
        } else {
            return false;
        }
    };

    this.toString = function () {
        var current = head;
        var string = '';

        while (current) {
            string += current.element;
            current = current.next;

            if (current) {
                string += ', ';
            }
        }

        return string;
    };

    this.indexOf = function (element) {
        var current = head;
        var index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }

            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return head;
    };
}


var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.toString());

console.log(list.indexOf(1));
console.log(list.indexOf(4));

list.removeAt(4);
console.log(list.toString());

