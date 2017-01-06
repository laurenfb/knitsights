import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


const ThumbnailView = Backbone.View.extend({
  className: "thumbnail",

  initialize: function(){
    this.thumbnailT = _.template($('#thumbnail-template').html())
  },

  render: function() {
    console.log("ThumbnailClusterView rendered")
    console.log(this.$el)
    this.$el.append(this.thumbnailT(
      {model: this.model,
        photoURL: this.getPhoto(),
        avgDays: this.model.calcAverageDays(),
        name: this.model.name}))
    return this;
  },

  getPhoto: function(){
    console.log(this.model)
    return this.model.getRandomPhoto();
  }
});

export default ThumbnailView;
