/*
 * grunt-xamarinbuildandsign
 * https://github.com/robert-waggott/XamarinBuildAndSignGruntPlugin
 *
 * Copyright (c) 2015 robert.waggott
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        XamarinBuildAndSign: {
            ios: {
                type: "ios",
                project: "",
                configuration: "Debug"
            },
            ios: {
                type: "android",
                project: "",
                configuration: "Debug"
            }            
        }
    });

    grunt.loadTasks("tasks");

    grunt.registerTask("default", [
        "XamarinBuildAndSign:ios",
        "XamarinBuildAndSign:android"
    ]);
};