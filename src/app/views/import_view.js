import Backbone from 'backbone';
import $ from 'jquery';
// below here, these import lines may not be needed in this file later
import Project from '../models/project'
import Cluster from '../collections/cluster'
import ClusterView from './cluster_view'
import Spinner from 'spin.js'

var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}

const ImportView = Backbone.View.extend({
  initialize: function(){
    $('.btn-import-save').empty();
    $('.btn-import-save').append("save");
    // a list of all the cluster collections so that importview can send them to
    // appview, which will in turn send them to accountview
    this.clusterCollections = [];
  },

  render: function() {
    this.renderClusters();
    return this;
  },

  renderClusters: function() {
    // using these vars because the .fetch.done() doesn't let me use a foreach as nicely as an anon fx, so 'this' is not available inside.
    var self = this;
    // make spinner
    // can't use jQuery here unless i get a special plugin. maybe later because it WORKS now.
    var target = document.getElementById('spinner-holder');
    var spin = new Spinner(opts).spin(target);

    this.model.fetch().done(
      function(response){
      for (var i = 0; i < response["clusters"].length; i++) {
        let clus = response["clusters"][i];
        // strangely, i am getting some empty clusters back which should not be possible but oh well! that's a problem for another time.
        if (clus["projects"].length != 0) {
          let clusID = clus["projects"][0]["cluster_id"];
          let cluster =  new Cluster(null,
                                    {name: clus["name"],
                                    id: clusID});
          let clusterView = new ClusterView({
            model: cluster
          });
          // when this functionality was in here instead of broken out into a separate function, it did not go well.
          self.putProjectsInClusters(cluster, clus["projects"])
          // render cluster and append it to 'main'
          self.$el.append(clusterView.render().$el);
        } // end of if statement
      } // end of for loop
      spin.stop()
    } // end of anon fx with arg response
  )// end of done()
  }, //  renderClusters fx

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
    this.clusterCollections.push(cluster)
    return cluster
  }
});

export default ImportView;
