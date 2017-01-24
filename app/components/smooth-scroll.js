import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement : function(){
    this.$(".smooth-scroller").click(function(event){
      Ember.$('html,body').animate({scrollTop:Ember.$(this.hash).offset().top}, 800);
		  Ember.$(this).animate({});
    });
  }
});
