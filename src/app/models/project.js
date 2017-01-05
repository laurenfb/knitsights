import Backbone from 'backbone';

const Project = Backbone.Model.extend({
  url: '',
  parse: function(){},
  toJSON: function(){},

  initialize: function(options){
    this.set("name", options.name)
    this.set("clusterID", options.clusterID);
    this.set("photoURL", options.photoURL);
    this.set("timeInDays", options.timeInDays)

  }
});

export default Project;
