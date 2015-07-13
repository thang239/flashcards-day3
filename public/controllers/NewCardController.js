app.controller('NewCardController',function($scope,$http,FlashCardFactory){
	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	}
	$scope.submitCard = function(newCard){
			$http.post('/cards',newCard)
				.success(function(card){
					FlashCardFactory.container.push(card);				
					$scope.newCard = {
					    question: null,
					    category: null,
					    answers: [
					        { text: null, correct: false },
					        { text: null, correct: false },
					        { text: null, correct: false }
					    ]
						}
				})
		// } 


	}
})