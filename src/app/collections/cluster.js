import Backbone from 'backbone';
import Project from 'app/models/project'

const Cluster = Backbone.Collection.extend({
  model: Project,

  initialize: function(models, options){
    // console.log("arguments",arguments)
    this.name = options.name
    this.id = options.id
    this.averageDays = null
  },

  calcAverageDays: function() {
    // this.model.
  }


});

export default Cluster;
