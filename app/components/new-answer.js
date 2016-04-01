import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      saveAnswer() {
        var params = {
          author: this.get('author'),
          response: this.get('response'),
          question: this.get('question')
        };
        this.sendAction('saveAnswer', params);
        this.set('author', '');
        this.set('response', '');
      }
    }
  });
