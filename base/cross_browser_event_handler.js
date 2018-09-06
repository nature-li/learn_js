var EventUtil = {
    getEvent: function(event) {
        return event ? event : window.event;
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function(event) {
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
    }
};


// Example
var link = document.getElementById("myLink");
link.onclick = function (event) {
  event = EventUtil.getEvent(event);
  var target = EventUtil.getTarget(event);
  EventUtil.preventDefault(event);
  EventUtil.stopPropagation(event);
};
