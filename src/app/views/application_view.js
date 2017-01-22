import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ImportView from './import_view';
import AccountView from './account_view'
import User from '../models/user'


const ApplicationView = Backbone.View.extend({
  initialize: function(){
    this.topNavT = _.template($('#top-nav-template').html())
  },

  render: function() {
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
    'click .btn-import-save': 'import',
    'click #background-cover': 'hideEditView'
  },

  import: function(event) {
    event.preventDefault();
    // i thought i needed to call to the backend here. but instead i will do that when they login.
    let importV = new ImportView({
      el: $('main'),
      model: new User({name: "laureneliz"})
    });
    importV.render();

    this.listenTo(importV, 'clustersIncoming', this.save)
  },

  save: function(clusterCollections) {
    let accountV = new AccountView({el: $('main'),
                                    clusterCollections: clusterCollections});
    accountV.render();
  },

  hideEditView: function() {
    $('#edit-cluster').remove()
    $('#background-cover').hide()
  }
});

export default ApplicationView;
