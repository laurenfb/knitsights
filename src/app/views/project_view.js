import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ProjectView = Backbone.View.extend({
  initialize: function(options){
    this.projectT = _.template($('#project-template').html());
  },

  render: function() {
    console.log("projectview created", this.model.get("name"))
    let elementByClusID = ".cid" + this.model.get("clusterID")
    console.log(elementByClusID)
    $(elementByClusID).append(this.projectT(this.model.attributes))
  }
});


export default ProjectView;
