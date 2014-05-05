function Welcome(attrs) {
	this.title = attrs.title || "";
	this.body = attrs.body || "";
}

Welcome.prototype = {
	title: null,
	body: null,

	constructor: Welcome
};