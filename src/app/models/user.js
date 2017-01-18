import Backbone from 'backbone';
import Vars from '../vars'

const User = Backbone.Model.extend({
  url: 'http://' + Vars["username"] + ":" + Vars["password"] + '@knitsights-backend.herokuapp.com/api/get_projects/laureneliz',
  parse: function(){
    // code here to pull user info from the flask API
  },
  toJSON: function(){
    // code here to set up a nice JSON to return. that returned JSON will then be saved by appview
    // var userToSave = {jsonstuff}
    // return userToSave
  },

  initialize: function(options) {
    this.set("name", options.name);
    this.set("photoURL", options.photoURL);
    this.set("imported", options.imported)
  }

});

export default User;
