import { expect } from 'chai';
import { describe, it, context, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';

describe('Integration | Component | hamster-state-switcher', function() {
  setupComponentTest('hamster-state-switcher', {
    integration: true
  });

  describe('render', function () {
    let actionTriggered, passedState;
    beforeEach(function () {
      actionTriggered = false;
      passedState = null;
      this.set('externalAction', function (state) {
        actionTriggered = true
        passedState = state
      });
    });
    context('when state is hungry', function () {
      beforeEach(function () {
        this.set('state', 'hungry');
        this.render(hbs`{{hamster-state-switcher currentState=state onChange=(action externalAction)}}`);
      });
      it('renders feed btn', function () {
        expect(find('button.ui.button')).to.have.text('feed');
      });
      describe('click on feed btn', function () {
        beforeEach(function () {
          click('button');
        });
        it("passes sleep as new state", function () {
          expect(passedState).to.eq('sleep');
        });
        it('triggers action', function () {
          expect(actionTriggered).to.be.true;
        });
      });
    });
    context('when state is sleep', function () {
      beforeEach(function () {
        this.set('state', 'sleep');
        this.render(hbs`{{hamster-state-switcher currentState=state onChange=(action externalAction)}}`);
      });
      it('renders wake up btn', function () {
        expect(find('button.ui.button')).to.have.text('wake up');
      });
      describe('click on feed btn', function () {
        beforeEach(function () {
          click('button');
        });
        it("passes sleep as new state", function () {
          expect(passedState).to.eq('evil');
        });
        it('triggers action', function () {
          expect(actionTriggered).to.be.true;
        });
      });
    });
    context('when state is evil', function () {
      beforeEach(function () {
        this.set('state', 'evil');
        this.render(hbs`{{hamster-state-switcher currentState=state onChange=(action externalAction)}}`);
      });
      it('renders caress btn', function () {
        expect(find('button.ui.button')).to.have.text('caress');
      });
      describe('click on caress btn', function () {
        beforeEach(function () {
          click('button');
        });
        it("passes sleep as new state", function () {
          expect(passedState).to.eq('hungry');
        });
        it('triggers action', function () {
          expect(actionTriggered).to.be.true;
        });
      });
    });
  });
});
