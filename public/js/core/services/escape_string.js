'use string';

String.prototype.escape_string = function() {
	let string = this;
	
	if (!string) return;

    return string.replace(/</gm, "&lt;")
				 .replace(/>/gm, "&gt;");
				 // .replace(/&/gm, "&amp;")
};