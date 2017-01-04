import Backbone from 'backbone';


const ProjectView = Backbone.View.extend({
  initialize: function(){

  },

  render: function() {
    console.log(this.model.get("timeInDays"))
  }
});

export default ProjectView;
