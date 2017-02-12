// js/app/controllers/TopStoriesController
(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = ['TopStoriesService'];
  function TopStoriesController(TopStoriesService) {
    var vm = this;
    vm.stories = [];
    

    activate();

    ////////////////

    function activate() {
      TopStoriesService 
        .getStories()
        .then(function(res) {
          vm.stories = res.data;
        });

    }
  }

})();