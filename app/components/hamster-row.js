import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'tr',
  classNameBindings: ['warning', 'error'],

  sleep:   equal('hamster.state', 'sleep'),
  error:   equal('hamster.state', 'evil'),
  warning: equal('hamster.state', 'hungry'),

  labelClass: computed('hamster.state', function () {
    if (this.sleep)   return 'green';
    if (this.error)   return 'red';
    if (this.warning) return 'yellow';
  })
});
