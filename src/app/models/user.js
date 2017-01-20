import Backbone from 'backbone';

const User = Backbone.Model.extend({
  url:  'https://localhost:8000/api/get_projects/laureneliz',

  parse: function(){

  },
  toJSON: function(){
  },

  initialize: function(options) {
    this.set("name", options.name);
    this.set("photoURL", options.photo_url);
    this.set("imported", options.imported)
  }

});

export default User;
