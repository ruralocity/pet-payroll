function RosterController($scope) {
  $scope.payroll = {};
  $scope.newPet = {};
  $scope.orderProp = 'firstname';

  $scope.pets = [
    { firstname: 'JoJo', species: 'Dog', salary: 50000 },
    { firstname: 'Amber', species: 'Cat', salary: 70000 },
    { firstname: 'Albert', species: 'Cat', salary: 100000 },
    { firstname: 'Maggie', species: 'Cat', salary: 80000 },
    { firstname: 'Yadier Molina', species: 'Cat', salary: 120000 },
    { firstname: 'Hermie', species: 'Cat', salary: 55000 }
  ];

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