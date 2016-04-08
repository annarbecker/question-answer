import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  actions: {
    removeFromFavorites(question) {
      this.get('favoritesList').remove(question);
    },
    emptyList() {
      this.get('favoritesList').empty();
    }
  },
  total: Ember.computed('favoritesList.questions.[]', function() {
    var listTotal = 0;
    listTotal += this.get('favoritesList.questions.length');
    if(listTotal === 0) {
      return Ember.String.htmlSafe("<hr><button class='btn btn-default editBtn'>&#10141; Add Favorites</button>");
    }
  })
});
