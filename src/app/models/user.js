import Backbone from 'backbone';

const User = Backbone.Model.extend({
  url:  'https://knitsights-backend.herokuapp.com/api/get_projects/laureneliz',

  parse: function(){},
  toJSON: function(){},

  initialize: function(options) {
    this.set("name", options.name);
    this.set("photoURL", options.photo_url);
    this.set("imported", options.imported);
    this.set("clusters", [])
  }

});

export default User;
