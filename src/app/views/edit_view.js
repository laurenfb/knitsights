import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const EditView = Backbone.View.extend({
  initialize: function(options) {
    this.editT = _.template($('#edit-template').html());
    this.dropdownEntryT = _.template($('#dropdown-entry-template').html())
    this.user = options.user;
    // initialized as null, but once we get an editview later on, we'll put in (or change up) the project model stored here.
    this.project = null;
  },

  render: function(project) {
    this.project = project;
    $('#background-cover').show()

    // add the edit template
    this.$el.prepend(this.editT({
      name: project.get("name"),
      clusterName: project.collection.name
    }))

    let clusters = this.user.get("clusters")

    let self = this;
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
    'click .category': 'changeCategory',
    'click .remove-project': 'archiveProject'
  },

  changeCluster: function(event){
    $('.edit-buttons').toggle();
    $('#category-dropdown').toggle();
  },

  changeCategory: function(event){
    // toggle the buttons!
    this.changeCluster();
    // change things up.
    let newID = event.target.id;
    // check to make sure it's okay
    if (window.confirm("change this project to " + newID + "?")) {
      event.preventDefault();
      // grab the new collection (had to do this manually)
      let newCollection = this.findNewCluster(newID);
      // remove project from the old collection

      this.project.collection.remove(this.project);
      // add it to the new collection
      newCollection.add(this.project);
      this.project.set("clusterID", newCollection.id)
      // add it to the changed project array for the user
      this.user.get("changedProjects").push(this.project.toJSON())
      // console.log(this.user.get("changedProjects"))
    }
    // hide the modal after something is changed.
    this.$el.empty();
    $('#background-cover').hide();
  },

  findNewCluster: function(nameOfCluster) {
    let clusters = this.user.get("clusters");
    for (var i = 0; i < clusters.length; i++) {
      if (clusters[i].name == nameOfCluster) {
        return clusters[i];
      };
    };
  },

  archiveProject: function(){
    // destroying the project straight-up does NOT work. the request doesn't go along nicely for the backend to get it. sooooo we're saving it.
    if (window.confirm("delete this project?")) {
      this.project.collection.remove(this.project);
      this.project.save();
      this.$el.empty();
      $('#background-cover').hide();
    }
  }
});

export default EditView;
