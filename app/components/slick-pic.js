import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement : function(){
    this.$(".slick-pic").slick({
      autoplay: true
    });
  }
});
