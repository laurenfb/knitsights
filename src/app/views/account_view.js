import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const AccountView = Backbone.View.extend({
  initialize: function(){

  },

  render: function() {
    $('.btn-save').hide();
    $('main').empty();
    console.log('accountview model', this.model)
    console.log("AccountView rendered")
  }
});

export default AccountView;
