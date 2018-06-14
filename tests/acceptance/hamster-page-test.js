import { describe, it, beforeEach, afterEach, context } from 'mocha';
import { expect } from 'chai';
import startApp from 'hamsters-farm/tests/helpers/start-app';
import destroyApp from 'hamsters-farm/tests/helpers/destroy-app';
import { visit, find, findAll, click } from 'ember-native-dom-helpers';

describe('Acceptance | hamster page', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('visit hamster page', function () {
    let hamster;
    beforeEach(async function () {
      hamster = server.create('hamster');
      await visit(`/hamsters/${hamster.id}`);
    });
    it('renders an avatar', function () {
      expect(find('[data-test-avatar]')).to.exist;
    });
    it('renders list of slaves', function () {
      expect(findAll('[data-test-slave]')).to.have.lengthOf(3);
    });
  });
  describe('actions', function () {
    let hamster;
    context('when the hamster is hungry', function () {
      beforeEach(async function () {
        hamster = server.create('hamsters', { state: 'hungry'});
        await visit(`/hamsters/${hamster.id}`);
      });
      describe('click to "feed"', function () {
        beforeEach(async function () {
          await click('[data-test-switch-state] button');
        });
        it("changes hamster's state on the server", function () {
          expect(server.db.hamsters.find(hamster.id).state).to.eq('sleep');
        });
        it('changes state on UI', function () {
          expect(find('[date-test-state]')).to.have.text('sleep');
        })
      });
    });
    context('when the hamster is sleep', function () {
      beforeEach(async function () {
        hamster = server.create('hamsters', { state: 'sleep'});
        await visit(`/hamsters/${hamster.id}`);
      });
      describe('click to "wake up Neo"', function () {
        beforeEach(async function () {
          await click('[data-test-switch-state] button');
        });
        it("changes hamster's state on the server", function () {
          expect(server.db.hamsters.find(hamster.id).state).to.eq('evil');
        });
        it('changes state on UI', function () {
          expect(find('[date-test-state]')).to.have.text('evil');
        })
      });
    });
    context('when the hamster is evil', function () {
      beforeEach(async function () {
        hamster = server.create('hamsters', { state: 'evil'});
        await visit(`/hamsters/${hamster.id}`);
      });
      describe('click to switch state btn', function () {
        beforeEach(async function () {
          await click('[data-test-switch-state] button');
        });
        it("changes hamster's state on the server", function () {
          expect(server.db.hamsters.find(hamster.id).state).to.eq('hungry');
        });
        it('changes state on UI', function () {
          expect(find('[date-test-state]')).to.have.text('hungry');
        })
      });
    });
  });
});
