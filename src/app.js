import ApplicationView from 'app/views/application_view';
import $ from 'jquery';

$(document).ready(function() {
  var application = new ApplicationView({
    el: $('main')
    //, model: user // or something? there needs to be a model here eventually
  })

  application.render();
});
