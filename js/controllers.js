function RosterController($scope, $http) {
  $scope.payroll = {};
  $scope.newPet = {};
  $scope.orderProp = 'firstname';

  $http.get('./pets.json').success(function(data) {
    $scope.pets = data;
  });

  $scope.addPet = function () {
    $scope.pets.push({ firstname: $scope.newPet.name, species: $scope.newPet.species, salary: $scope.newPet.salary });
    $scope.newPet = {};
  };

  $scope.deletePet = function(i) {
    $scope.pets.splice(i,1);
  };

  $scope.setOrder = function(name) {
    $scope.orderProp = name;
  }

  $scope.$watch(function() {
    var total = 0;
    for (var i = 0; i < $scope.pets.length; i++) {
      total = total + $scope.pets[i].salary * 1.0;
    }
    $scope.payroll.total = total;
  });
}