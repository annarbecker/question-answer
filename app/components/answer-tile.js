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
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    }
  },
  sortBy: ['timestamp:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy')
});
