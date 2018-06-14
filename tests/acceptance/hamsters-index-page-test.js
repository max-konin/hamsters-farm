import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'hamsters-farm/tests/helpers/start-app';
import destroyApp from 'hamsters-farm/tests/helpers/destroy-app';
import { findAll, visit } from 'ember-native-dom-helpers';

describe('Acceptance | hamsters index page', function () {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('visit /hamsters page', function () {
    it('renders table with hamsters', async function () {
      server.createList('hamster', 3);
      await visit('/hamsters');
      expect(findAll('tr[data-test-hamster]')).to.have.lengthOf(3);
    });
  });
});
