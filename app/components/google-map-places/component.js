import Ember from 'ember';
import EmberGoogleMap from 'ember-google-map/components/google-map';

export default EmberGoogleMap.extend({
  _test: Ember.on('didInsertElement', function() {
    Ember.run('afterRender', function() {
      Ember.Logger.log('hit')

    })
  })
});
