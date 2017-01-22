import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ProjectView = Backbone.View.extend({
  className: "project",

  initialize: function(options){
    this.projectT = _.template($('#project-template').html());
  },

  render: function() {
    // console.log("projectview created", this.model.get("name"))
    this.$el.append(this.projectT(this.model.attributes))
    this.delegateEvents(this.events);
    return this;
  },

  events: {
    'click' : 'makeEditView'
  },

  makeEditView: function(e){
    alert(this.model.get("name"))
  }
});


export default ProjectView;
