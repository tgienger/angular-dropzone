interface IDropzoneScope extends angular.meteor.IScope {
	options: {url: string};
	action: string;
	url: string;
}

function DropzoneDirective(): ng.IDirective {
	return {
		restrict: 'E',
		template: '<div id="{{options.id}}" class="dropzone"></div>',
		scope: { action: '=?', url: '=?', options: '=?' },
		link: (scope: IDropzoneScope, elem, attrs) => {
			var url = scope.options.url || scope.action || scope.url || 'file-upload';
			
			var options = _.extend({}, Meteor.Dropzone.options, {url: url}, scope.options);
			
			var element = elem[0].querySelector('.dropzone');
			
			var myDropzone = new Dropzone(element, options);
		}
	}
}

Meteor.Dropzone = {
	options: {}
}

angular.module('ngDropzone', []).directive('dropZone', DropzoneDirective);