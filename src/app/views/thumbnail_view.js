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
        photoURL: this.model.getRandomPhoto(),
        avgDays: this.model.calcAverageDays(),
        shortest: this.model.getShortestProj(),
        longest: this.model.getLongestProj(),
        name: this.model.name}))
    return this;
  }
});

export default ThumbnailView;
