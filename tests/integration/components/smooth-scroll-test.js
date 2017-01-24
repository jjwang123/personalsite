import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smooth-scroll', 'Integration | Component | smooth scroll', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{smooth-scroll}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#smooth-scroll}}
      template block text
    {{/smooth-scroll}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
