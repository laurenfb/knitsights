import Backbone from 'backbone';

const Project = Backbone.Model.extend({

  initialize: function(options){
    this.set("name", options.name.toLowerCase())
    this.set("clusterID", options.cluster_id);
    this.set("photoURL", options.photo_url);
    this.set("timeInDays", options.time_in_days)

  }
});

export default Project;
