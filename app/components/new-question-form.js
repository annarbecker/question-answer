import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        query: this.get('query'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('save', params);
    }
  }
});
