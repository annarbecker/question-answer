import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('new-question');
  this.route('favorites');
  this.route('sports');
  this.route('tech');
  this.route('fashion');
  this.route('news');
  this.route('health');
});

export default Router;
