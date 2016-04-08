import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('question', {
      orderBy: 'category',
      equalTo: 'sports'
    });
  }
});
