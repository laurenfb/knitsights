import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ProjectView from './project_view';


const ClusterView = Backbone.View.extend({
  initialize: function(){
    this.clusterT = _.template($('#cluster-template').html());
  },

  render: function() {
    console.log("ClusterView rendered")
    console.log(this.model)
    $('main').append(this.clusterT(this.model))
    this.model.models.forEach(function(project) {
      let projectView = new ProjectView({model: project})
      projectView.render();
    }, this);
    return this;
  }
});

export default ClusterView;
