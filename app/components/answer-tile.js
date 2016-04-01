import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      if(confirm('Are you sure you want to remove this answer?')) {
       this.sendAction('deleteAnswer', answer);
     }
    }
  }
});
