import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'hamsters-farm/tests/helpers/start-app';
import destroyApp from 'hamsters-farm/tests/helpers/destroy-app';
import { findAll, visit, find } from 'ember-native-dom-helpers';

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
  describe('render different tr color', function () {
    beforeEach(async function () {
      server.create('hamster', { state: 'hungry' });
      server.create('hamster', { state: 'evil' });
      server.create('hamster', { state: 'sleep' });
      await visit('/hamsters');
    });
    it('renders green tr', function () {
      expect(find('tr .green')).to.exist;
    });
    it('renders red tr', function () {
      expect(find('tr .red')).to.exist;
    });
    it('renders yellow tr', function () {
      expect(find('tr .yellow')).to.exist;
    });
  });
});
