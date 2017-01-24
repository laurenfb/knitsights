import Backbone from 'backbone';

const Project = Backbone.Model.extend({
  // url: 'https://knitsights-backend.herokuapp.com/api/project/laureneliz/delete',

  url: 'http://localhost:8000/api/projects/delete',

  toJSON: function(){
    let request = {
      "name": this.get("name"),
      "clusterID": this.get("clusterID"),
      "id": this.get("id")
    }
    return request
  },

  initialize: function(options){
    var name = options.name.toLowerCase();
    if (name.length >= 17) {
      var shortName = name.slice(0,13) + "...";
    } else {
      var shortName = name;
    }

    this.set("id", options.id);
    this.set("name", name);
    this.set("shortName", shortName);
    this.set("clusterID", options.cluster_id);
    this.set("photoURL", options.photo_url);
    this.set("timeInDays", options.time_in_days);

  }
});

export default Project;
