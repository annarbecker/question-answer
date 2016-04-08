import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  timestamp: DS.attr(),

  favoritesList: Ember.inject.service(),
  inFavorites: Ember.computed('favoritesList.questions.[]', function() {
    return this.get('favoritesList').includes(this);
  })
});
