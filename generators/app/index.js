var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    // constructor: function () {
    //     generators.Base.apply(this, arguments);

    //     this.argument('name', {type: String, required: true});
    //     this.name = _.camelCase(this.name);
    // },


    prompting: function () {
        var done = this.async();
        console.log("============" + this.sourceRoot() + "============");
        this.prompt({
            type: 'input',
            name: 'name',
            message: "Enter the name of your project",
            default : this.appname
        }, function(answers) {
            this.log("Your app will be named: " + answers.name);
            this.appname = answers.name;
            done();
        }.bind(this));
    },
    // Uncomment this when finished
    // install: function () {
    //     this.log("Installing Npm dependencies...");
    //     this.npmInstall([
    //         'grunt',
    //         'express',
    //         'body-parser',
    //         'cookie-parser',
    //         'morgan',
    //         'grunt-concurrent',
    //         'grunt-contrib-jshint',
    //         'grunt-contrib-sass',
    //         'grunt-contrib-watch',
    //         'grunt-sass',
    //         'serve-favicon',
    //         'grunt-contrib-clean',
    //         'grunt-contrib-copy',
    //         'grunt-contrib-uglify',
    //         'grunt-jsbeautifier',
    //         'grunt-prettify',
    //         'grunt-prettysass',
    //         'grunt-shell',
    //         'jshint-stylish']);
    // },

    writing: function () {
        // copy app.js
        this.fs.copyTpl(
            this.templatePath('app.js'),
            this.destinationPath('app.js')
        );
        //copy gruntfile
        this.fs.copyTpl(
            this.templatePath('Gruntfile.js'),
            this.destinationPath('Gruntfile.js')
        );
        //copy package.json
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {title: this.appname }
        );
        //copy express bin
        this.fs.copyTpl(
            this.templatePath('bin'),
            this.destinationPath('bin')
        );
        //copy routes directory
        this.fs.copyTpl(
            this.templatePath('routes'),
            this.destinationPath('routes')
        );
        //copy views directory
        this.fs.copyTpl(
            this.templatePath('views'),
            this.destinationPath('views'),
            {title: this.appname }
        );
        //copy public directory
        this.fs.copyTpl(
            this.templatePath('public'),
            this.destinationPath('public')
        );



        // this.gruntfile.insertConfig('jshint', "{files: ['./Gruntfile.js', 'public/javascripts/**/*.js'], options: { reporter: require('jshint-stylish'), globals: { jQuery: true }}");
        // this.gruntfile.insertConfig('shell', "options: { stderr: true }, runServer: { command: 'npm start & grunt concurrent:fast'}}");
        // this.gruntfile.insertConfig('watch', "sass: { options: { spawn: true }, files: ['public/stylesheets/**/*.scss'], tasks: ['prettysass:sass', 'sass:dev']}");
        // this.gruntfile.insertConfig('watch', "js: { options: spawn: true }, files: ['public/javascripts/**/*.js', './Gruntfile.js], tasks: ['jsbeautifier:js', 'jshint']}");
    },


});