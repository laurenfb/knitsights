import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const EditView = Backbone.View.extend({
  initialize: function(options) {
    this.editT = _.template($('#edit-template').html());
    this.dropdownEntryT = _.template($('#dropdown-entry-template').html())
    this.user = options.user;
  },

  render: function() {
    $('#background-cover').show()
    $('main').prepend(this.editT({name: this.model.get("name")}))
    var clusters = this.user.get("clusters")
    for (var i = 0; i < clusters.length; i++) {
      console.log(clusters[i].name)
    }
    return this;
  }
});

export default EditView;
