app.controller('FlashCardCtrl', function ($scope, ScoreFactory) {
    $scope.answered = false;
    $scope.answeredCorrectly = null;

    $scope.answerQuestion = function(answer) {
      if($scope.answered) {
        return;
      }
      $scope.answered = true;
      if(answer.correct) {
        ScoreFactory.correct++;
        $scope.feedback = "Correct!";
        $scope.answeredCorrectly = true;
      } else {
        ScoreFactory.incorrect++;
        $scope.feedback = "Nice try";
      }
    };

    $scope.editCardButton = function(){
      $scope.edit=true;
      $scope.editCard = $scope.theCard;
    }


})
app.controller('EditFlashCardCtrl',function($scope,$http){
  $scope.editCardFnc = function(editCard){
    console.log(editCard);
      $http.put('/cards'+'/'+$scope.theCard._id,editCard)
        .success(function(card){
          $scope.edit=false;
        })
  }
})


