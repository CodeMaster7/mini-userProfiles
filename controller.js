app.controller('MainController', function($scope, MainService) {
    
    $scope.getUsers = function() {
        $scope.users = MainService.getUsers();
    }
    
    $scope.getUsers()
    
    console.log($scope.users);
});