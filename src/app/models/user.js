import Backbone from 'backbone';
import EditView from '../views/edit_view';
import $ from 'jquery';

const User = Backbone.Model.extend({
  // url: 'http://localhost:8000/api/projects/laureneliz',
  //
  url: 'https://knitsights-backend.herokuapp.com/api/projects/laureneliz',
  //
  parse: function(){},
  toJSON: function(){
    let request = {
      "user": this.get("name"),
      "imported": true,
      "projects": this.get("changedProjects")
    }
    return request
  },

  initialize: function(options) {
    this.set("name", options.name);
    this.set("photoURL", options.photo_url);
    this.set("imported", options.imported);
    this.set("clusters", [])
    this.set("changedProjects", [])
    // this.listenTo("hi", 'projectIncoming', this.makeEditView)
    this.editV = this.makeEditView();
  },

  makeEditView: function(model) {
    var editV = new EditView({
      el: $('#edit-holder'),
      user: this
    });
    return editV;
  },

  populateView: function(project) {
    this.editV.render(project);
  }
});

export default User;
