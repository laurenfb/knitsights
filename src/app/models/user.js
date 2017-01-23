import Backbone from 'backbone';

const User = Backbone.Model.extend({
  // url: 'http://localhost:8000/api/projects/laureneliz',
  // url:  'https://knitsights-backend.herokuapp.com/api/get_projects/laureneliz',

  //more RESTful here, currently commented out while BE updated URL is not yet on production
  url: 'https://knitsights-backend.herokuapp.com/api/projects/laureneliz',

  parse: function(){},
  toJSON: function(){},

  initialize: function(options) {
    this.set("name", options.name);
    this.set("photoURL", options.photo_url);
    this.set("imported", options.imported)
  }

});

export default User;
