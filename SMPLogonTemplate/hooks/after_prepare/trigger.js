#!/usr/bin/env node

process.chdir('/Users/imranmohammed/Downloads/SAP_HAT_local-1.2.3');
var ap = require('child_process').spawn('node', ['afterprepare.js', 'EAMMobApp']);
ap.stdout.on('data', function (data) { process.stdout.write(data.toString()); });
ap.stdout.on('error', function (error) { process.stdout.write(error.toString()); });
