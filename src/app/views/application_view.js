import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ImportView from './import_view';



const ApplicationView = Backbone.View.extend({
  initialize: function(){
    this.topNavT = _.template($('#top-nav-template').html())
  },

  render: function() {
    console.log("ApplicationView rendered");
    // console.log(this.$el::before)
    $('body').prepend(this.topNavT);
    // check to see if import has happened; decide what to render based on that
    // checkImport();
    return this;
  },

  checkImport: function() {
    // if this.model.get("imported") == true, show import button
    // else, do not show it, and render account view
  },

  events: {
    'click .btn-import': 'import'
  },

  import: function() {
    // write code here that will call the API to authenticate user. or write that actual FUNCTION in the user model, but write the call to that here?
    console.log("import function called")
    let importV = new ImportView();
    importV.render();
  }
});

export default ApplicationView;
