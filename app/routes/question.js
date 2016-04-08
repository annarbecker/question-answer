import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
       question.destroyRecord();
     });
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
    },
    updateAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
    },
    upVote(answer) {
      answer.incrementProperty('upVotes');
      answer.save();
    },
    downVote(answer) {
      answer.incrementProperty('downVotes');
      answer.save();
    }
  }
});
