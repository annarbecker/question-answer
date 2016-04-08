import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        response: this.get('response'),
        question: this.get('question'),
        timestamp: this.get('timestamp') ? this.get('timestamp') : moment().format('MMMM Do YYYY, h:mm a')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
