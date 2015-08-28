interface IDropzoneScope extends angular.meteor.IScope {
	options: {url: string};
	action: string;
	url: string;
}

function DropzoneDirective(): ng.IDirective {
	return {
		restrict: 'E',
		template: '<div id="{{options.id}}" class="dropzone"></div>',
		scope: { action: '=?', url: '=?', options: '=?' myDropzone: '=name'},
		link: (scope: IDropzoneScope, elem, attrs) => {
			var url;
			
			if (scope.options && scope.options.url) {
				url = scope.options.url;
			} else if (scope.action && scope.action) {
				url = scope.action;
			} else if (scope.url && scope.url) {
				url = scope.url;
			} else {
				url = 'file-upload';
			}
			
			var options = _.extend({}, Meteor.Dropzone.options, {url: url}, scope.options);
			
			var element = elem[0].querySelector('.dropzone');
			
			scope.myDropzone = new Dropzone(element, options);
			
		}
	}
}

Meteor.Dropzone = {
	options: {}
}

angular.module('ngDropzone', []).directive('dropZone', DropzoneDirective);