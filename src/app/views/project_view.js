import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import EditView from './edit_view'

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
    console.log('we are making an editview')
    var editV = new EditView({
      model: this.model
    });
    editV.render()
  }
});


export default ProjectView;
