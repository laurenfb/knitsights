import Backbone from 'backbone';
import $ from 'jquery';
// delete these lines later, it's just here now for testing
import ProjectView from './project_view';
import Project from '../models/project'
import Cluster from '../collections/cluster'
import ClusterView from './cluster_view'

var clusters = [{ "name": "sweaters", "projects": [
  {clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 28,
    name: "blue sweater"},
  {clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 12,
    name: "husband sweater"},
  {clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 100,
    name: "customfit sweater"},
  {clusterID: 1,
    photoURL: "http://placebeyonce.com/250-250",
    timeInDays: 29,
    name: "cat sweater"}
  ]},
  {"name": "socks", "projects": [
    {clusterID: 2,
      photoURL: "http://placebeyonce.com/250-250",
      timeInDays: 14,
      name: "ctb socks"},
    {clusterID: 2,
      photoURL: "http://placebeyonce.com/250-250",
      timeInDays: 12,
      name: "socks for me"}
  ]}
]

const ImportView = Backbone.View.extend({
  initialize: function(){
    $('.btn-import').hide();
  },

  render: function() {
    console.log("ImportView rendered")
    this.renderClusters();
  },

  renderClusters: function() {
    clusters.forEach( function(clus){
      // grabbing this so i can make a special class in each div.
      let clusID = clus["projects"][0]["clusterID"]

      let cluster =  new Cluster({name: clus["name"], id: clusID});
      let clusterView = new ClusterView({model: cluster});
      for (var i = 0; i < clus["projects"].length; i++) {
        let project = new Project(clus["projects"][i])
        cluster.add(project)
      }
      clusterView.render();
    });
  }
});

export default ImportView;
