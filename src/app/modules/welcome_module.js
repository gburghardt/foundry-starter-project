WelcomeModule = Module.extend({

	prototype: {

		options: {
			backgroundColor: "#f0f0f0"
		},

		_ready: function _ready() {
			Module.prototype._ready.call(this);

			this.element.innerHTML = [
				'<h1>Welcome to Foundry!</h1>',
				'<p>To get you started, this example module was created in <code>app/modules/welcome_module.js</code>.</p>',
				'<p>You can change the background color of this module by adding a <code>data-module-options</code> attribute to this module\'s root element.</p>'
			].join("");

			this.element.style.backgroundColor = this.options.backgroundColor;
		}

	}

});
