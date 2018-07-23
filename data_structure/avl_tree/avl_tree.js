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
Node.prototype.rotateLeft = function () {
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

var AvlTree = function (customCompare) {
    this._root = null;
    this._size = 0;

    if (customCompare) {
        this._compare = customCompare;
    }
};

/**
 * Compares two keys with each other.
 *
 * @param {Object} a
 * @param {Object} b
 * @private
 */
AvlTree.prototype._compare = function (a, b) {
    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
};

/**
 * Inserts a new node with a specific key into the tree.
 *
 * @param {Object} key
 * @param {Object} value
 */
AvlTree.prototype.insert = function (key, value) {
    this._root = this._insert(key, value, this._root);
    this._size++;
};

/**
 * Inserts a new node with a specific key into the tree.
 *
 * @param {Object} key
 * @param {Object} value
 * @param root
 * @private
 */
AvlTree.prototype._insert = function (key, value, root) {
    if (root === null) {
      return new Node(key, value);
    }

    if (this._compare(key, root.key) < 0) {
        root.left = this._insert(key, value, root.left);
    } else if (this._compare(key, root.key) > 0) {
        root.right = this._insert(key, value, root.right);
    } else {
        this._size--;
        return root;
    }

    root.height = Math.max(root.leftHeight(), root.rightHeight()) + 1;
    var blanceState = getBlanceState(root);
};