import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import EditView from './edit_view'

const ProjectView = Backbone.View.extend({
  className: "project",

  initialize: function(options){
    this.projectT = _.template($('#project-template').html());
    this.user = options.user
  },

  render: function() {
    this.$el.append(this.projectT(this.model.attributes))
    this.delegateEvents(this.events);
    return this;
  },

  events: {
    'click' : 'makeEditView'
  },

  makeEditView: function(e){
    var editV = new EditView({
      model: this.model,
      user: this.user
    });
    editV.render()
  }
});


export default ProjectView;
