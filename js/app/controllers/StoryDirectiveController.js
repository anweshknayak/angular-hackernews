(function() {
'use strict';

  angular
    .module('app')
    .controller('StoryDirectiveController', StoryDirectiveController);

  StoryDirectiveController.$inject = ['TopStoriesService'];

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