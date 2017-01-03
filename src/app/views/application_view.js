import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const ApplicationView = Backbone.View.extend({
  initialize: function(){
    this.topNavT = _.template($('#top-nav-template').html())
  },

  render: function() {
    console.log("ApplicationView rendered");
    this.$el.prepend(this.topNavT);
    // check to see if the import button needs to be rendered
    // checkButton();
  },

  checkButton: function() {
    // if this.model.get("imported") == true, do not hide button
    // else,
  },

  events: {
    'click .btn-import': 'callAPI'
  },

  callAPI: function() {
    // write code here that will call the API to authenticate user. or write that actual FUNCTION in the user model, but write the call to that here?
    console.log("API called")
  }
});

export default ApplicationView;
