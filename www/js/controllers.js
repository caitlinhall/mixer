angular.module('starter.controllers', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('DashCtrl', function($scope) {})

.controller('BarCtrl', function($scope) {})

.controller('WhoCtrl', function($scope) {})

.controller('ScopeCtrl', function($scope) {})

.controller('SmileCtrl', function($scope) {})

.controller('NewfriendCtrl', function($scope) {})

.controller('Newfriend2Ctrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends, $cordovaCamera) {
  $scope.friends = Friends.all();
  $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.FILE_URI, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function success (imageURI) {
            $scope.imgURI = imageURI;
        }, function error ( err) {
            // An error occured. Show a message to the user
        });
    }
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
