import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    updateActionFromRentalJs(rental, params){

      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined){
          rental.set(key, params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },

    destroyRentalFromRentalJs(rental){
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
