function MainController($scope) {
  $scope.name = 'Bill Gates'
}

angular
  .module('app')
  .controller('MainController', MainController);