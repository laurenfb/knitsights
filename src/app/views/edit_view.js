import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const EditView = Backbone.View.extend({
  initialize: function() {
    this.editT = _.template($('#edit-template').html());
  },

  render: function() {
    $('#background-cover').show()
    $('main').prepend(this.editT({name: this.model.get("name")}))
    console.log('editview rendering')
    console.log(this.model)
    return this;
  }
});

export default EditView;
