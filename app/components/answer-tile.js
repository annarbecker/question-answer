import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      if(confirm('Are you sure you want to remove this answer?')) {
       this.sendAction('deleteAnswer', answer);
     }
    },
     updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    }
  },
  sortBy: ['timestamp:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy')
});
