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
        user: this.user,
        cluster: this.model
      })
      cluster.append(projectView.render().$el);
      this.listenTo(projectView, 'projectEdit', this.sendProject);
    }, this);

    return this;
  },

  sendProject: function(project) {
    // send the project to the user to populate the user's editview.
    this.user.populateView(project);
  }
});

export default ClusterView;
