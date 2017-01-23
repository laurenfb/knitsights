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
    'click .change-cluster': 'changeCluster',
    'click .category': 'changeCategory'
  },

  changeCluster: function(event){
    // event.stopPropagation()
    console.log('clicked the modal')
    $('.edit-buttons').toggle();
    $('#category-dropdown').toggle();
  },

  changeCategory: function(event){
    this.changeCluster();
    let newID = event.target.id;
    let clusterNames = [];
    if (window.confirm("change this project to " + newID + "?")) {
      event.preventDefault();
      // grab the new collection
      let newCollection = this.findNewCluster(newID);
      // remove project from the old collection
      this.project.collection.remove(this.project);
      // add it to the new collection
      newCollection.add(this.project);
      // console.log("new collection ", this.project.collection);
    }
  },

  findNewCluster: function(nameOfCluster) {
    let clusters = this.user.get("clusters");
    for (var i = 0; i < clusters.length; i++) {
      if (clusters[i].name == nameOfCluster) {
        return clusters[i];
      };
    };
  }
});

export default EditView;
