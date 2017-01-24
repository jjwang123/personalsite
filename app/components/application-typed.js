import Ember from 'ember';

export default Ember.Component.extend({
didInsertElement : function(){
  // Ember.run.schedule('afterRender', this, function() {
    this.$(".mytitle").typed({
    strings : ["^1000Hello!^2000"],
    typeSpeed : 0,
    // showCursor : false,
    loop : true
    });
  // });
}
});
