import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'hamsters-farm/tests/helpers/start-app';
import destroyApp from 'hamsters-farm/tests/helpers/destroy-app';
import { visit, find } from 'ember-native-dom-helpers';

describe('Acceptance | cat page', function() {
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
  });
});
