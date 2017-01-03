import Backbone from 'backbone';

const User = Backbone.Model.extend({
  url: 'this is the url for my flask API',
  parse: function(){
    // code here to pull user info from the flask API
  },
  toJSON: function(){
    // code here to set up a nice JSON to return. that returned JSON will then be saved by appview
    // var userToSave = {jsonstuff}
    // return userToSave
  }

});

export default User;
