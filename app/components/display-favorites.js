import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  listIsShowing: false,
  actions: {
    showList: function() {
      this.set('listIsShowing', true);
    },
    hideList: function() {
      this.set('listIsShowing', false);
    },
    removeFromList(question) {
      this.get('favoritesList').remove(question);
    },
    emptyList() {
      this.get('favoritesList').empty();
    }
  },
  total: Ember.computed('favoritesList.questions.[]', function() {
    var listTotal = 0;
    listTotal += this.get('favoritesList.questions.length');
  })
});
