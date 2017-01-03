import ApplicationView from 'app/views/application_view';
import $ from 'jquery';

$(document).ready(function() {
  var application = new ApplicationView({
    el: $('body')
  })

  application.render();
});
