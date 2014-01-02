var DependencyConfig = {
	application: {
		className: "Foundry.Application",
		singleton: true,
		properties: {
			config: { id: "applicationConfig" },
			delegator: { id: "delegator" },
			eventDispatcher: { id: "globalEventDispatcher" },
			moduleManager: { id: "moduleManager" },
			objectFactory: { id: "objectFactory" }
		}
	},
	applicationConfig: {
		className: "Hash",
		singleton: true,
		constructorArgs: [{
			value: {
				// Global default application configs go here

				// Error handling:
				handleActionErrors: true,
				handleApplicationErrors: true,

				// Modules
				eagerLoadModules: true,
				lazyLoadModules: true
			}
		}]
	},
	delegator: {
		className: "dom.events.Delegator"
	},
	elementStore: {
		className: "ElementStore"
	},
	globalEventDispatcher: {
		className: "Events.Dispatcher",
		singleton: true
	},
	module: {
		abstract: true,
		properties: {
			delegator: { id: "delegator" },
			elementStore: { id: "elementStore" },
			eventDispatcher: { id: "globalEventDispatcher" },
			options: { id: "moduleOptions" }
		}
	},
	moduleFactory: {
		className: "Module.Factory",
		singleton: true,
		properties: {
			objectFactory: { id: "objectFactory" }
		}
	},
	moduleManager: {
		className: "Module.Manager",
		singleton: true,
		properties: {
			factory: { id: "moduleFactory" }
		}
	},
	moduleOptions: {
		className: "Hash",
		constructorArgs: [{
			value: {
				// Global default module options go here
			}
		}]
	},

	// Modules

	welcome: {
		className: "WelcomeModule",
		parent: "module"
	}
	/*
	Sample configs for specific modules:

	simpleTaskListModule: {
		className: "MyNamespace.TaskListModule",
		parent: "module"
	},

	advancedTaskListModule: {
		className: "MyNamespace.TaskListModule",
		parent: "module",
		constructorArgs: [{ // new MyNamespace.TaskListModule({}, 300);
			{ id: "foo" },
			{ value: 300 }
		}],
		properties: {
			selectionManager: { id: "selectionManager" }
		}
	}

	*/
};