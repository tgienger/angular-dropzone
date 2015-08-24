# Angular-Meteor Dropzone

A [DropzoneJS](http://www.dropzonejs.com/) directive for angular all wrapped up for Meteor.



modified from [meteor-dropzone](https://atmospherejs.com/dbarrett/dropzonejs).



## Compatibility
Intended for versions of Meteor 1.0

## Installation
```
    meteor add tgienger:angular-dropzone
```

## Usage
Inject into your app:
```
angular.module('app', ['angular-meteor', 'ngDropzone']);
```
In your Angular Template you place the dropZone directive:

```
    <drop-zone options="dropzoneOptions"></drop-zone>
```

### Options
In your controller, set the angular-dropzone options:

```
function Controller($scope) {
	$scope.dropzoneOptions = {
		...
	};
}
```
A full list of options can be found in the Dropzone [documentation](http://www.dropzonejs.com/)
______________
***Important***: _the URL option **is** required, however will default to
 'file-upload' if you don't enter one. 
I included this for those, like me, who use collectionFS 
to upload to s3 and do not require a url._
______________

## Usage With collectionFS (angular-meteor)
```
// controllerAs: drop
function CollectionController($scope) {

	// CollectionFS collection
	var imageCollection = $meteor.collectionFS(Images, false);
	
	// Dropzone options for use without a url
	this.dropzoneOptions = {
		accept: (file, done) => {
			imageCollection.save(file).then(() => {
				done();
			});
		}
	};
}
```
html:
```
<drop-zone options="drop.dropzoneOptions"></drop-zone>
```


**Like Meteor-Dropzone**:


Or you can set the default options that every dropzone instance is instantiated with globally:

```
	Meteor.Dropzone.options.maxFiles = 4;
```

These will be overridden by any parameters set in the scope variable.


## Example:
[Angular Dropzone - MeteorPad.com](http://meteorpad.com/pad/KvyQm7igGBAvootka/Angular-Dropzone-Example)


## Contributors
