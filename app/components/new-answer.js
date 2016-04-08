import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        response: this.get('response'),
        question: this.get('question'),
        timestamp: this.get('timestamp') ? this.get('timestamp') : moment().format('MMMM Do YYYY, h:mm a'),
        upVotes: this.get('upVotes') ? this.get('upVotes') : '',
        downVotes: this.get('downVotes') ? this.get('downVotes') : ''
      };
      this.sendAction('saveAnswer', params);
      this.set('author', '');
      this.set('response', '');
    }
  }
  });
