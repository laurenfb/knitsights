import Backbone from 'backbone';
import Project from 'app/models/project'

const Cluster = Backbone.Collection.extend({
  model: Project,
});

export default Cluster;
