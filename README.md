# grunt-xamarinbuildandsign

> Builds and signs your Xamarin.iOS and/or Xamarin.Android apps

Based off of a previous [blog post](http://thetechnologystudio.co.uk/blog/building-and-uploading-a-xamarin-forms-solution-using-grunt/) and [gist](https://gist.github.com/robert-waggott/5bb6ff4d52b211c2012a).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xamarinbuildandsign --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-XamarinBuildAndSign');
```

## The "XamarinBuildAndSign" task

### Overview
In your project's Gruntfile, add a section named `XamarinBuildAndSign` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  XamarinBuildAndSign: {
    type: "",
    project: "",
    configuration: "",
    keychainPassword: ""
  },
});
```

### Options

#### type
* Type: `String`
* Required: `Yes`

iOS (ipa also acceptable), or Android (apk also acceptable). Case insensitive. 

#### project
* Type: `String`
* Required: `Yes`

Full path to the project or solution you are attempting to build and sign. 

#### configuration
* Type: `String`
* Required: `Yes`

`Debug`, `Release` or whichever configuration is setup within your project. 

#### keychainPassword
* Type: `String`
* Required: `No`

If specified will attempt to unlock the keychain with the specified password. Often required by your iOS build when retrieving your cert/provisioning profile pair. Only use when `type` is set to `ios`.

### Usage Examples

```js
grunt.initConfig({
  XamarinBuildAndSign: {
    type: "ios",
    project: "/the/absolute/path/to/your/project.sln",
    configuration: "Release",
    keychainPassword: "password1"
  },
});
```
