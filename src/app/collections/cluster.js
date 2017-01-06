import Backbone from 'backbone';
import Project from 'app/models/project'

const Cluster = Backbone.Collection.extend({
  model: Project,

  initialize: function(models, options){
    // console.log("arguments",arguments)
    this.name = options.name
    this.id = options.id
  },

  calcAverageDays: function() {
    // console.log("we've gotten to calcAverageDays")
    let total = 0;
    for (var i = 0; i < this.models.length; i++) {
      total += this.models[i].get("timeInDays")
    }
    let avg = parseInt(total/this.models.length)
    return avg;
  },

  getRandomPhoto: function(){
    let min = 0;
    let max = this.models.length
    // taken from the internet, gets random number between min (incl) and max (excl)
    // exclsive bc if the length is 4 the highest index we'll want is 3.
    let random = Math.floor(Math.random() * (max - min)) + min;
    let photo = this.models[random].get("photoURL");
    return photo;
  }


});

export default Cluster;
