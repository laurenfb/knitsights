import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ProjectView from './project_view';


const ClusterView = Backbone.View.extend({
  initialize: function(options){
    this.clusterT = _.template($('#cluster-template').html());
    this.user = options.user;
    // this.listenTo("saveClicked",this.model.calcAverageDays)
  },

  render: function() {
    // console.log("ClusterView rendered")
    // console.log('this.user in clusterview', this.user)
    let cluster = $(this.clusterT(this.model))
    this.$el.append(cluster);
    this.model.forEach(function(project) {
      let projectView = new ProjectView({
        model: project,
        user: this.user
      })
      cluster.append(projectView.render().$el);
    }, this);
    // this.delegateEvents(this.events);
    return this;
  }
});

export default ClusterView;
