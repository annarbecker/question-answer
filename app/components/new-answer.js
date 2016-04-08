import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
      saveAnswer() {
        var params = {
          author: this.get('author'),
          response: this.get('response'),
          question: this.get('question'),
          timestamp: this.get('timestamp') ? this.get('timestamp') : moment().format('MMMM Do YYYY, h:mm a')
        };
        this.sendAction('saveAnswer', params);
        this.set('author', '');
        this.set('response', '');
      }
    }
  });
