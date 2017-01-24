import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement : function(){
    this.$(".tlt").textillate({
      minDisplayTime: 1000,
      autoStart:true,
      initialDelay: 0,
      in: { effect: 'fadeInDown', sync: true },
      out: { effect: 'fadeOutDown', sync: true },
      autoStart: true,
      loop: true
    });
  }
});
