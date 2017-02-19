(function() {
  'use strict';

  angular
    .module('app')
    .directive('story', story);

  story.$inject = ['TopStoriesService'];
  function story(TopStoriesService) {
    
    var directive = {
        bindToController: true,
        controller: StoryController,
        controllerAs: 'vm',
        link: link,
        templateUrl: 'views/story.html',
        restrict: 'E',
        scope: {
          id: '='
        }
    };
    return directive;
    
    function link(scope, element, attrs) {
    } 
  }

  function StoryController (TopStoriesService) {
    var vm = this;

    function getFromUrl(url){
      var a = document.createElement('a');
      a.setAttribute('href', url);
      return '(' + a.hostname + ')';
    }

    function getHoursAgo(seconds) {
      var secondDifference = (Date.now()/1000) - seconds;
      
      if (secondDifference < 3600) {
        var minutesAgo = secondDifference/60;
        return Math.floor(minutesAgo) + ' minutes ago';
      } else {
        var hoursAgo = secondDifference/3600;
        return Math.floor(hoursAgo) + ' hours ago';
      }
    }

    TopStoriesService
      .getStory(vm.id)
      .then(function(res){
        vm.story = res.data;
        vm.title = vm.story.title;
        vm.url = vm.story.url;
        vm.author = vm.story.by;
        vm.score = vm.story.score;
        vm.domain = getFromUrl(vm.url);
        vm.time = getHoursAgo(vm.story.time);

      })
  }
  
})();