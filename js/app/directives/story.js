(function() {
  'use strict';

  angular
    .module('app')
    .directive('story', story);

  story.$inject = ['TopStoriesService'];
  function story(TopStoriesService) {
    
    var directive = {
        bindToController: true,
        controller: StoryDirectiveController,
        controllerAs: 'vm',
        link: link,
        templateUrl: 'views/story.html',
        restrict: 'E',
        scope: {
          id: '=id'
        }
    };
    return directive;
    
    function link(scope, element, attrs) {
    }
  }

  function StoryDirectiveController (TopStoriesService) {
    var vm = this;


    TopStoriesService
      .getStory(vm.id)
      .then(function(res){
        vm.story = res.data;
        vm.title = vm.story.title;
        vm.url = vm.story.url;
      })
  }
})();