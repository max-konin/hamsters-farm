import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hamsters', function () {
    this.route('hamster', { path: '/:hamster_id' });
  });
});

export default Router;
