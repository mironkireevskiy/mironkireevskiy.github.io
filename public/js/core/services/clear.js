'use strict';

HTMLElement.prototype.clear = function() {
    Array.from(this.children).forEach(child => child.remove());
    return this;
};