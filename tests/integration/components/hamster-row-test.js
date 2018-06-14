import { expect } from 'chai';
import { describe, it, context, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | hamster-row', function() {
  setupComponentTest('hamster-row', {
    integration: true
  });

  describe('render', function () {
    context('when hamster is hungry', function () {
      beforeEach(function () {
        this.set('hamster', { state: 'hungry' });
        this.render(hbs`{{hamster-row hamster=hamster}}`);
      });
      it('renders warning tr', function () {
        expect(find('tr')).to.have.class('warning');
      });
      it('renders yellow label', function () {
        expect(find('tr span.label')).to.have.class('yellow');
      });
    });
    context('when hamster is sleep', function () {
      beforeEach(function () {
        this.set('hamster', { state: 'sleep' });
        this.render(hbs`{{hamster-row hamster=hamster}}`);
      });
      it('renders not warning tr', function () {
        expect(find('tr')).not.to.have.class('warning');
      });
      it('renders not error tr', function () {
        expect(find('tr')).not.to.have.class('error');
      });
      it('renders red label', function () {
        expect(find('tr span.label')).to.have.class('green');
      });
    });
    context('when hamster is evil', function () {
      beforeEach(function () {
        this.set('hamster', { state: 'evil' });
        this.render(hbs`{{hamster-row hamster=hamster}}`);
      });
      it('renders error tr', function () {
        expect(find('tr')).to.have.class('error');
      });
      it('renders red label', function () {
        expect(find('tr span.label')).to.have.class('red');
      });
    });
  });
});
