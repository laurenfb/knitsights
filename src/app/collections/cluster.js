import Backbone from 'backbone';
import Project from 'app/models/project'

const Cluster = Backbone.Collection.extend({
  model: Project,

  initialize: function(options){
    this.name = options.name
    this.id = options.id
  }
});

export default Cluster;
