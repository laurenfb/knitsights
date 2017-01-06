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
    'click .btn-import': 'import',
    'click .btn-save': 'save'
  },

  import: function() {
    // i thought i needed to call to the backend here. but instead i will do that when they login.
    console.log("import function called")
    let importV = new ImportView({el: $('main')});
    importV.render();
  },

  save: function(event) {
    event.preventDefault();
    this.trigger('saveClicked', this)
  }
});

export default ApplicationView;
