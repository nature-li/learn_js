'use strict';


/**
 *
 * @param {Object} key
 * @param {Object} value
 * @constructor
 */
var Node = function (key, value) {
    this.left = null;
    this.right = null;
    this.height = null;
    this.key = key;
    this.value = value;
};

/**
 * Performs a right rotate on this node.
 *
 *       b                           a
 *      / \                         / \
 *     a   e -> b.rotateRight() -> c   b
 *    / \                             / \
 *   c   d                           d   e
 *
 * @return {Node} The root of the sub-tree; the node where this node used to be.
 */
Node.prototype.rotateRight = function () {
    var other = this.left;
    other.right = this;
    this.left = other.right;

    this.height = Math.max(this.leftHeight(), this.rightHeight()) + 1;
    other.height = Math.max(other.leftHeight(), this.height) + 1;
    return other;
};

/**
 * Performs a left rotate on this node.
 *
 *     a                              b
 *    / \                            / \
 *   c   b   -> a.rotateLeft() ->   a   e
 *      / \                        / \
 *     d   e                      c   d
 *
 *
 */
Node.prototype.rotateLeft = function() {
    var other = this.right;
    other.left = this;
    this.right = other.left;

    this.height = Math.max(this.leftHeight(), this.rightHeight()) + 1;
    other.height = Math.max(other.leftHeight(), this.height) + 1;
    return other;
};

Node.prototype.leftHeight = function () {
  if (!this.left) {
      return -1;
  }

  return this.left.height;
};

Node.prototype.rightHeight = function () {
  if (!this.right) {
      return -1;
  }

  return this.right.height;
};

module.exports = Node;