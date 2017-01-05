import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ImportView from './import_view';
// delete these lines later, it's just here now for testing
import ProjectView from './project_view';
import Project from '../models/project'
import Cluster from '../collections/cluster'
import ClusterView from './cluster_view'


var projects = [
  {
    clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 28,
    name: "blue sweater"
  },
  {
    clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 12,
    name: "husband sweater"
  },
  {
    clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 100,
    name: "1st customfit sweater"
  },
  {
    clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 29,
    name: "cat"
  }
]


const ApplicationView = Backbone.View.extend({
  initialize: function(){
    this.topNavT = _.template($('#top-nav-template').html())
  },

  render: function() {
    console.log("ApplicationView rendered");
    this.$el.prepend(this.topNavT);
    // check to see if import has happened; decide what to render based on that
    // checkImport();
    let cluster =  new Cluster();
    let clusterView = new ClusterView({model: cluster});
    for (var i = 0; i < projects.length; i++) {
      let project = new Project(projects[i])
      cluster.add(project)
    }
    clusterView.render();
    return this;
  },

  checkImport: function() {
    // if this.model.get("imported") == true, show import button
    // else, do not show it, and render account view
  },

  events: {
    'click .btn-import': 'import'
  },

  import: function() {
    // write code here that will call the API to authenticate user. or write that actual FUNCTION in the user model, but write the call to that here?
    console.log("import function called")
    let importV = new ImportView();
    importV.render();
  }
});

export default ApplicationView;
