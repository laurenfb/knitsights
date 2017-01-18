import Backbone from 'backbone';
import $ from 'jquery';
// below here, these import lines may not be needed in this file later
import Project from '../models/project'
import Cluster from '../collections/cluster'
import ClusterView from './cluster_view'
//
// var clusters = [{ "name": "sweaters", "projects": [
//   {clusterID: 1,
//     photoURL: "http://placebeyonce.com/250-250",
//     timeInDays: 28,
//     name: "blue sweater"},
//   {clusterID: 1,
//     photoURL: "http://placebeyonce.com/250-250",
//     timeInDays: 12,
//     name: "husband sweater"},
//   {clusterID: 1,
//     photoURL: "http://placebeyonce.com/250-250",
//     timeInDays: 100,
//     name: "customfit sweater"},
//   {clusterID: 1,
//     photoURL: "http://placebeyonce.com/250-250",
//     timeInDays: 29,
//     name: "cat sweater"}
//   ]},
//
//   {"name": "socks", "projects": [
//     {clusterID: 2,
//       photoURL: "http://placebeyonce.com/250-250",
//       timeInDays: 14,
//       name: "ctb socks"},
//     {clusterID: 2,
//       photoURL: "http://placebeyonce.com/250-250",
//       timeInDays: 12,
//       name: "socks for me"}
//   ]}
// ]

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
    // using these vars because the .fetch.done() doesn't let me use a foreach as nicely as an anon fx, so 'this' is not available inside.
    var clusCollect = this.clusterCollections
    var element = this.$el
    var self = this
    this.model.fetch().done(
      function(response){
      console.log(response["clusters"].length)
      for (var i = 0; i < response["clusters"].length; i++) {
        let clus = response["clusters"][i];
        // strangely, i am getting some empty clusters back which should not be possible but oh well!
        if (clus["projects"].length != 0) {
          let clusID = clus["projects"][0]["cluster_id"]
          let cluster =  new Cluster(null,
                                    {name: clus["name"],
                                    id: clusID});
          console.log(cluster)
          let clusterView = new ClusterView({
            model: cluster
          });

          self.putProjectsInClusters(cluster, clus["projects"])
          // for (var i = 0; i < clus["projects"].length; i++) {
          //   let project = new Project(clus["projects"][i])
          //   cluster.add(project)
          // }
          console.log(cluster)
          // add cluster to instance var
          clusCollect.push(cluster)
          // render cluster and append it to 'main'
          element.append(clusterView.render().$el);

        }


      }
    }
  )},

  events: {
    'click .btn-import-save': 'sendClusters'
  },

  sendClusters: function(){
    $('.btn-import-save').hide()
    this.trigger('clustersIncoming', this.clusterCollections)
  },

  putProjectsInClusters: function(cluster, listOfProjects) {
    for (var i = 0; i < listOfProjects.length; i++) {
      let project = new Project(listOfProjects[i])
      cluster.add(project)
    }
    return cluster
  }
});

export default ImportView;


// clusters.forEach( function(clus){
//   // grabbing this so i can make a special id in each div.
//   let clusID = clus["projects"][0]["clusterID"]
//   let cluster =  new Cluster(null, {name: clus["name"], id: clusID});
//   let clusterView = new ClusterView({
//     model: cluster
//   });
//   for (var i = 0; i < clus["projects"].length; i++) {
//     let project = new Project(clus["projects"][i])
//     cluster.add(project)
//   }
//   // add cluster to instance var
//   this.clusterCollections.push(cluster)
//   // render cluster and append it to 'main'
//   this.$el.append(clusterView.render().$el);
//
// }, this);
