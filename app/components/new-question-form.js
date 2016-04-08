import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        query: this.get('query'),
        author: this.get('author'),
        notes: this.get('notes'),
        timestamp: this.get('timestamp') ? this.get('timestamp') : moment().format('MMMM Do YYYY, h:mm a')
      };
      this.sendAction('save', params);
    }
  }
});
