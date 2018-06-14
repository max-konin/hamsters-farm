import Component from '@ember/component';
import { computed } from '@ember/object';

const EVENT_LABEL = {
  hungry: 'feed',
  sleep: 'wake up',
  evil: 'caress'
};

const NEXT_STATE = {
  hungry: 'sleep',
  sleep: 'evil',
  evil: 'hungry'
};

export default Component.extend({
  tagName: 'button',
  classNames: ['ui', 'button', 'primary'],
  eventLabel: computed('currentState', function () {
    return EVENT_LABEL[this.currentState];
  }),
  click() {
    this.onChange(NEXT_STATE[this.currentState]);
  }
});
