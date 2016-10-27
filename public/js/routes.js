angular.module('checkedPoint')
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: ''
    })
    .state('addpo', {
      url: '/addpo',
      templateUrl: './views/addpo.html',
      controller: 'addpoCtrl'
    })

})
