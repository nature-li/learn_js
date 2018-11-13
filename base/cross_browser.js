var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },

    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    }
};


function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0);
    } catch (ex) {
        array = [];
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i]);
        }
    }

    return array;
}

(function (someNode) {
    if (someNode.nextSibling === null) {
        alert("Last node in the parent's childNodes list.");
    } else if (someNode.previousSibling === null) {
        alert("First node in the parent's childNodes list.");
    }
})(null);


function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
}

function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
