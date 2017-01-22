import Backbone from 'backbone';

const Project = Backbone.Model.extend({

  initialize: function(options){
    var name = options.name.toLowerCase();
    if (name.length >= 17) {
      var shortName = name.slice(0,13) + "...";
    } else {
      var shortName = name;
    }
    this.set("name", name);
    this.set("shortName", shortName);
    this.set("clusterID", options.cluster_id);
    this.set("photoURL", options.photo_url);
    this.set("timeInDays", options.time_in_days);

  }
});

export default Project;
