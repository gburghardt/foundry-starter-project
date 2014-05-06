# Foundry Bootstrap

Use Foundry.Bootstrap to quickly get you started building an application with
Foundry. This serves as a starting point that works right out of the box.

## Getting Started

1. Install [NodeJS](http://nodejs.org/).
2. Install the [Bower JavaScript package manager](http://bower.io/).
3. Install [Grunt](http://gruntjs.com/)
4. Clone or [download the zip file](https://github.com/gburghardt/foundry.bootstrap/archive/master.zip) for this repository.
5. Rename `.bowerrc_example` to `.bowerrc`
6. Install the base dependencies from the command line:

        cd path/to/this/repository
        npm install
        bower install

7. Build the JavaScript packages

        grunt

8. Configure a web server with this as the root public directory
9. Open a Web browser and point it to the site you just created

7. Create a Virtual Directory/Virtual Host in the web server on your machine,
   pointing it to this directory.

8. View this index.html file in a Web browser.

If you already have NodeJS and Bower installed:

    bower install foundry.bootstrap

## Getting Help

The official [Foundry Documentation][https://gburghardt.github.io/foundry/] is
a great place to start.