import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
// import foundation from 'foundation';


$(document).ready(function() {
  // $(document).foundation();
  var application = new ApplicationView({
    el: $('body')
  });

  application.render();
});
