import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ProjectView = Backbone.View.extend({
  initialize: function(){
    this.projectT = _.template($('#project-template').html());
  },

  render: function() {
    console.log(this.model.get("timeInDays"))
    $('main').append(this.projectT(this.model.attributes))
  }
});

export default ProjectView;
