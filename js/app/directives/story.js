angular 
  .module('app')
  .directive('story', function(){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        id: '=id'
      },
      templateUrl: 'views/story.html',
      controller: function($scope, TopStoriesService) {
        var vm = this;
        
        TopStoriesService
          .getStory($scope.id)
          .then(function(res){
            vm.story = res.data; 
          });
      },
      controllerAs: 'story',
      link: function(scope, elem, attrs, ctrl) {
        
      }
    };
  });