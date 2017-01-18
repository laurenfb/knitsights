import Backbone from 'backbone';
import $ from 'jquery';
// below here, these import lines may not be needed in this file later
import Project from '../models/project'
import Cluster from '../collections/cluster'
import ClusterView from './cluster_view'

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
    this.renderClusters();
    return this;
  },

  renderClusters: function() {
    // using these vars because the .fetch.done() doesn't let me use a foreach as nicely as an anon fx, so 'this' is not available inside.
    var self = this

    this.model.fetch().done(
      function(response){
      for (var i = 0; i < response["clusters"].length; i++) {
        let clus = response["clusters"][i];
        // strangely, i am getting some empty clusters back which should not be possible but oh well! that's a problem for another time.
        if (clus["projects"].length != 0) {
          let clusID = clus["projects"][0]["cluster_id"]
          let cluster =  new Cluster(null,
                                    {name: clus["name"],
                                    id: clusID});
          let clusterView = new ClusterView({
            model: cluster
          });
          // when this functionality was in here instead of broken out into a separate function, it did not go well.
          self.putProjectsInClusters(cluster, clus["projects"])

          // add cluster to instance var this.clusterCollections
          self.clusterCollections.push(cluster)
          // render cluster and append it to 'main'
          self.$el.append(clusterView.render().$el);
        } // end of if statement
      } // end of for loop
    } // end of anon fx with arg response
  )}, // end of done() and renderClusters fx

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
