module.exports = function(grunt) {
  var files = grunt.file.readJSON("config/files.json"),
      conf = {
        pkg: grunt.file.readJSON("package.json"),
         concat: {
          options: {
            banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
          }
        },
        min: {
        }
      },
      packages = [],
      keys = [],
      key, i;

  for (key in files) {
    if (files.hasOwnProperty(key)) {
      keys.push(key);
      packages.push("dist/<%= pkg.name %>-" + key + ".concat.js");
      conf.concat[key] = {
        src: files[key],
        dest: "dist/<%= pkg.name %>-" + key + ".concat.js"
      };
    }
  }

  for (i = 0; i < packages.length; i++) {
    key = keys[i];
    conf.min[key] = {
      src: packages[i],
      dest: "dist/<%= pkg.name %>-" + key + ".min.js"
    }
  }

  grunt.initConfig(conf);

  // grunt.initConfig({
  //   pkg: grunt.file.readJSON("package.json"),

  //   concat: {
  //     options: {
  //       banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
  //     },

  //     framework: {
  //       src: files.framework,
  //       dest: "dist/<%= pkg.name %>-framework.concat.js"
  //     },
  //     application: {
  //       src: files.application,
  //       dest: "dist/<%= pkg.name %>-application.concat.js"
  //     }
  //   },

  //   min: {
  //     framework: {
  //       src: "dist/<%= pkg.name %>-framework.concat.js",
  //       dest: "dist/<%= pkg.name %>-framework.min.js"
  //     },
  //     application: {
  //       src: "dist/<%= pkg.name %>-application.concat.js",
  //       dest: "dist/<%= pkg.name %>-application.min.js"
  //     }
  //   }
  // });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "min" task.
  grunt.loadNpmTasks('grunt-yui-compressor');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'min']);
};