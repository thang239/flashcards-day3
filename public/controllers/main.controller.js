app.controller('MainCtrl', function ($scope, FlashCardFactory) {
    // make a query
    FlashCardFactory.getFlashCards()
    .then(function (cards) {
      FlashCardFactory.container=cards;
      $scope.flashCards = FlashCardFactory.container;
    })
    .catch(function (e) {
      console.log('e', e);
    })
    FlashCardFactory.container = $scope.flashCards;
    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.activeCat = null;

    $scope.filterByCategory = function (cat) {
      $scope.activeCat = cat;
      $scope.flashCards = null;
      FlashCardFactory.getFlashCards(cat)
      .then(function (cards) {
        FlashCardFactory.container=cards;
        $scope.flashCards = FlashCardFactory.container;
      });
    };
  })