import Backbone from 'backbone';

const User = Backbone.Model.extend({
  // url: 'http://lauren:thequickbrownfoxjumpsoverthelazydog@localhost:8000/api/get_projects/laureneliz',

  // url: 'https://' + VARS["username"] + ":" + VARS["password"] +'@ localhost:8000/api/get_projects/laureneliz',

  url:  'http://knitsights-backend.herokuapp.com/api/get_projects/laureneliz',

  parse: function(){

  },
  toJSON: function(){
    // code here to set up a nice JSON to return. that returned JSON will then be saved by appview
    // var userToSave = {jsonstuff}
    // return userToSave
  },

  initialize: function(options) {
    this.set("name", options.name);
    this.set("photoURL", options.photo_url);
    this.set("imported", options.imported)
  }

});

export default User;
