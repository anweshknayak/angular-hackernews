(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = ['TopStoriesService'];
  
  function TopStoriesController(TopStoriesService) {
    var vm = this;
    vm.stories = []; //stores data fetches from api
    
      TopStoriesService 
        .getStories()
        .then(function(res) {
          vm.stories = res.data;
        });

  
  }

})();