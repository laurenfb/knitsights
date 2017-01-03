import Backbone from 'backbone';
import $ from 'jquery';


const ImportView = Backbone.View.extend({
  initialize: function(){
    $('.btn-import').hide();
  },

  render: function() {
    console.log("ImportView rendered")

  }
});

export default ImportView;
