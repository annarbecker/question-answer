import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
       this.sendAction('delete', question);
       this.get('favoritesList').remove(question);
     }
   },
   addToFavorites(question) {
     this.get('favoritesList').add(question);
   }
 }
});
