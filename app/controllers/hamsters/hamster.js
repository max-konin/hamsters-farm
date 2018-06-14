import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changeState(newState) {
      this.model.set('state', newState);
      this.model.save();
    }
  }
});
