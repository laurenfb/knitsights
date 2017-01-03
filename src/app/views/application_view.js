import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const ApplicationView = Backbone.View.extend({
  initialize: function(){
    this.topNavT = _.template($('#top-nav-template').html())
  },

  render: function() {
    console.log("ApplicationView rendered")
    $('body').prepend(this.topNavT)
  }
});

export default ApplicationView;
