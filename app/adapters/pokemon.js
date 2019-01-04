import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://pokeapi.co',
  namespace: 'api/v2',

  pathForType() {
    return 'pokemon';
  }
});
