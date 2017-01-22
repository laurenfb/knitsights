import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


const ThumbnailView = Backbone.View.extend({
  className: "thumbnail",

  initialize: function(){
    this.thumbnailT = _.template($('#thumbnail-template').html())
  },

  render: function() {
    this.$el.append(this.thumbnailT(
      {model: this.model,
        photoURL: this.getPhoto(),
        avgDays: this.model.calcAverageDays(),
        name: this.model.name}))
    return this;
  },

  getPhoto: function(){
    return this.model.getRandomPhoto();
  }
});

export default ThumbnailView;
