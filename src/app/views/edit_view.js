import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const EditView = Backbone.View.extend({
  initialize: function(options) {
    this.editT = _.template($('#edit-template').html());
    this.dropdownEntryT = _.template($('#dropdown-entry-template').html())
    this.user = options.user;
    this.clusterName = options.clusterName;
  },

  render: function() {
    // console.log(this.$el)
    $('#background-cover').show()
    $('main').prepend(this.editT({
      name: this.model.get("name"),
      clusterName: this.clusterName
    }))

    var clusters = this.user.get("clusters")

    var self = this;
    for (var i = 0; i < clusters.length; i++) {
      $('#category-dropdown').append(
        self.dropdownEntryT({
          categoryName: clusters[i].name
        }));
    };
    return this;
  },

  events: {
    'click': 'changeCluster'
  },

  changeCluster: function(){
    console.log('hi!')
    $('#category-dropdown').show()
  }
});

export default EditView;
