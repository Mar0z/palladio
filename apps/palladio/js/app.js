var app = angular.module('palladioApp', [
	'palladio',
	'palladioApp.controllers',
	'palladioApp.services',
	'palladioApp.load',
	'palladioApp.directives',
	'palladioApp.filters',
	'ui.codemirror',
	'ui.router',

	'palladioDataUpload',
	'palladioDataDownload',
	
	// Filters
	'palladioTimelineFilter',
	'palladioFacetFilter',
	'palladioTimespanFilter',
	'palladioPartimeFilter',
	// Views
	'palladioListView',
	'palladioMapView',
	'palladioTableView',
	'palladioSelectionView',
	'palladioGraphView']
	)
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'partials/start.html',
			})
			.state('/upload', {
				url: '/upload',
				templateUrl: 'partials/upload.html',
				controller: 'UploadRefineCtrl'
			})
			.state('/link', {
				url: '/link',
				templateUrl: 'partials/link.html'
			})
			.state('/visualization', {
				url: '/visualization',
				templateUrl: 'partials/visualization.html',
				controller: 'VisualizationCtrl',
				resolve: {
					data: function (dataService) {
						return dataService.getData();
					}
				}
			});
	})
	.value('$strapConfig', {
		datepicker: {
			orientation : 'top'
		}
	});