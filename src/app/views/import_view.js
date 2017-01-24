import Backbone from 'backbone';
import $ from 'jquery';
// below here, these import lines may not be needed in this file later
import Project from '../models/project'
import Cluster from '../collections/cluster'
import ClusterView from './cluster_view'
import Spinner from 'spin.js'

var SPINNER_OPTIONS = {
lines:13,length:28,width:14,radius:42,scale:1,corners:1,color:'#000',opacity:0.25,rotate:0,direction:1,speed:1,trail:60,fps:20,zIndex:2e9,className:'spinner',top:'50%',left:'50%',shadow:false,hwaccel:false,position:'relative'
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
    this.fetchData();
    return this;
  },

  fetchData: function() {
    // make spinner
    // can't use jQuery here unless i get a special plugin. maybe later because it WORKS now.
    var target = document.getElementById('spinner-holder');
    var spin = new Spinner(SPINNER_OPTIONS).spin(target);
    $('#message').html("fetching your projects from ravelry. this may take a few moments.")

    // using these vars because the .fetch.done() doesn't let me use a foreach as nicely as an anon fx, so 'this' is not available inside.
    var self = this;
    this.model.fetch().done( function(response){
      self.renderClusters(response, self);
      $('#message').empty()
      spin.stop()
    }).fail( function(response) {
      spin.stop()
      self.onFailure(response, self);
    }).always(function(){
      self.model.set("clusters", self.clusterCollections);
      // console.log("this is the model", self.model)
      // console.log("this is clustercollections", self.clusterCollections);
    }) // end of anon fx with arg response// end of done()fail()always()
  },

  renderClusters: function(response, self) {
    for (var i = 0; i < response["clusters"].length; i++) {
      // console.log("self.model in importview", self.model)
      let clus = response["clusters"][i];
      // strangely, i am getting some empty clusters back which should not be possible but oh well! that's a problem for another time.
      if (clus["projects"].length != 0) {
        let clusID = clus["projects"][0]["cluster_id"];
        let cluster =  new Cluster(null,
                                  {name: clus["name"],
                                  id: clusID});
        let clusterView = new ClusterView({
          model: cluster,
          user: self.model
        });
        // when this functionality was in here instead of broken out into a separate function, it did not go well.
        self.putProjectsInClusters(cluster, clus["projects"])
        // render cluster and append it to 'main'
        self.$el.append(clusterView.render().$el);
        // re-render if projects are added or removed
        clusterView.listenTo(cluster, "add remove", clusterView.render)
      } // end of if statement
    } // end of for loop
  }, //  renderClusters fx

  events: {
    'click .btn-import-save': 'sendClusters'
  },

  sendClusters: function(){
    $('.btn-import-save').hide()
    this.model.save(this.model.toJSON(), {type: 'put'});
    this.trigger('clustersIncoming', this.clusterCollections)
  },

  putProjectsInClusters: function(cluster, listOfProjects) {
    for (var i = 0; i < listOfProjects.length; i++) {
      let project = new Project(listOfProjects[i])
      cluster.add(project)
    }
    this.clusterCollections.push(cluster)
    return cluster
  },

  onFailure: function(response, self) {
    $('#message').empty()
    $('#message').append('looks like we ran into an error. please refresh the page and try again!')
  }
});

export default ImportView;
