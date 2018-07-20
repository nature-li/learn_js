function isArray(obj) {
    if (Array.isArray) {
        return Array.isArray(obj);
    } else {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
}


console.log(isArray([]));
console.log(isArray({}));
console.log(isArray(Object()));
console.log(isArray(new Object()));