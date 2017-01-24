import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ProjectView = Backbone.View.extend({
  className: "project",

  initialize: function(options){
    this.projectT = _.template($('#project-template').html());
    this.user = options.user;
    this.cluster = options.cluster;
  },

  render: function() {
    this.$el.append(this.projectT(this.model.attributes))
    this.delegateEvents(this.events);
    return this;
  },

  events: {
    'click' : 'popluateEditView'
  },

  popluateEditView: function(){
    this.trigger('projectEdit', this.model)
  }
});


export default ProjectView;
