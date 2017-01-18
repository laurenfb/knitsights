import Backbone from 'backbone';
import $ from 'jquery';
// below here, these import lines may not be needed in this file later
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
    $('.btn-import-save').empty();
    $('.btn-import-save').append("save");
    // a list of all the cluster collections so that importview can send them to
    // appview, which will in turn send them to accountview
    this.clusterCollections = [];
  },

  render: function() {
    console.log("ImportView rendered")
    console.log(this.model.url)
    this.renderClusters();
    return this;
  },

  renderClusters: function() {
    clusters.forEach( function(clus){
      // grabbing this so i can make a special id in each div.
      let clusID = clus["projects"][0]["clusterID"]
      let cluster =  new Cluster(null, {name: clus["name"], id: clusID});
      let clusterView = new ClusterView({
        model: cluster
      });
      for (var i = 0; i < clus["projects"].length; i++) {
        let project = new Project(clus["projects"][i])
        cluster.add(project)
      }
      // add cluster to instance var
      this.clusterCollections.push(cluster)
      // render cluster and append it to 'main'
      this.$el.append(clusterView.render().$el);

    }, this);
  },

  events: {
    'click .btn-import-save': 'sendClusters'
  },

  sendClusters: function(){
    $('.btn-import-save').hide()
    this.trigger('clustersIncoming', this.clusterCollections)
  }
});

export default ImportView;
