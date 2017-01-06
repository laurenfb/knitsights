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
    // console.log("we've gotten to calcAverageDays")
    let total = 0;
    for (var i = 0; i < this.models.length; i++) {
      total += this.models[i].get("timeInDays")
    }
    let avg = total/this.models.length
    this.averageDays = avg;
  }


});

export default Cluster;
