import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import ThumbnailView from './thumbnail_view';

const AccountView = Backbone.View.extend({
  initialize: function(options){
    this.clusters = options.clusterCollections
  },

  render: function() {
    $('.btn-save').hide();
    $('main').empty();
    this.renderClusters();
    return this;
  },

  renderClusters: function() {
    this.clusters.forEach( function(clus){
      let thumbnailV = new ThumbnailView({model: clus})
      this.$el.append(thumbnailV.render().$el);
    }, this)
  }
});

export default AccountView;
