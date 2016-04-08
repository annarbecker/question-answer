import Ember from 'ember';

export function noAnswer(params) {
  var noAnswer = params[0].get('answers');

  if(noAnswer.get('length') === 0) {
    return Ember.String.htmlSafe('<span>&#9744; </span>');
  } else {
    return Ember.String.htmlSafe('<span>&#9745; </span>');
  }
}

export default Ember.Helper.helper(noAnswer);
