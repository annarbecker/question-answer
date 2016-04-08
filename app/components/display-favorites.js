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
      return Ember.String.htmlSafe("<a href='/'>Add Favorites</a>");
    } else {
      return Ember.String.htmlSafe("<p>Number of Favorites: " + listTotal + "</p>");
    }
  })
});
