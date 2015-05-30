// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('tab.scope', {
    url: '/scope',
    views: {
      'tab-scope': {
        templateUrl: 'templates/tab-scope.html',
        controller: 'ScopeCtrl'
      }
    }
  })

  .state('dash', {
    url: '/dash',
    templateUrl: 'templates/tab-dash.html',
    controller: 'DashCtrl'
  })

  .state('bar', {
    url: '/bar',
    templateUrl: 'templates/bar.html',
    controller: 'BarCtrl'
  })

  .state('who', {
    url: '/who',
    templateUrl: 'templates/who.html',
    controller: 'WhoCtrl'
  })

  .state('smile', {
    url: '/smile',
    templateUrl: 'templates/smile.html',
    controller: 'SmileCtrl'
  })

  .state('newfriend', {
    url: '/newfriend',
    templateUrl: 'templates/newfriend.html',
    controller: 'NewfriendCtrl'
  })

  .state('newfriend2', {
    url: '/newfriend2',
    templateUrl: 'templates/newfriend2.html',
    controller: 'Newfriend2Ctrl'
  })

  .state('friends', {
    url: '/friends',
    templateUrl: 'templates/tab-friends.html',
    controller: 'FriendsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');

});
