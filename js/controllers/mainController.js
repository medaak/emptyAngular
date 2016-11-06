// MAIN CONTROLLER
function mainController($scope) {

  $scope.addPerson = function(person) {
  $scope.persons.push(person);
  $scope.person={};
  };
  
    $scope.persons = [{
      lastName : "Fontaine",
      firstName : "Jean",
      email : "jeandlafont@gmail.com"
    },
    {
      lastName : "Truite",
      firstName : "Jeanne",
      email : "jeannedlatruite@gmail.com"
    }
  ];
}
