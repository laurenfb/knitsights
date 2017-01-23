import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const EditView = Backbone.View.extend({
  initialize: function(options) {
    this.editT = _.template($('#edit-template').html());
    this.dropdownEntryT = _.template($('#dropdown-entry-template').html())
    this.user = options.user;
    this.project = null;
  },

  render: function(project) {
    this.project = project;
    console.log("in the editview, here's the project!", this.project)

    $('#background-cover').show()
    this.$el.prepend(this.editT({
      name: project.get("name"),
      clusterName: project.collection.name
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
    'click': 'changeCluster',
    'click .category': 'changeCategory'
  },

  changeCluster: function(event){
    $('.edit-buttons').toggle();
    $('#category-dropdown').toggle();
  },

  changeCategory: function(event){

    if (window.confirm("change this?")) {
      console.log("hi")
    }
  }
});

export default EditView;
