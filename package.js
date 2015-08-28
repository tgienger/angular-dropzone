Package.describe( {
  name: 'tgienger:angular-dropzone',
  summary: 'An angular-meteor directive for Dropzonejs v4.0.1',
  version: '0.1.2',
  git: 'https://github.com/tgienger/angular-dropzone.git'
} );

Package.onUse( function ( api ) {
  api.versionsFrom( '1.0' );

  api.use( [
    'underscore'
  ], 'client' );

  //add dropzone library 
  api.addFiles( [
    'lib/dropzone-4.0.1/dropzone.js',
    'lib/dropzone-4.0.1/css/basic.css',
    'lib/dropzone-4.0.1/css/dropzone.css',
  ], 'client' );

  //add dropzone template 
  api.addFiles( [
    'lib/ngDropzone.js'
  ], 'client' );
} );

Package.onTest( function ( api ) {
  api.use( [ 'tgienger:angular-dropzone', 'tinytest' ] );

  api.addFiles( [
    'test.js'
  ], 'client' );
} );