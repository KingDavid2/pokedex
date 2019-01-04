import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  height: attr('string'),
  weight: attr('string'),
  sprites: attr('json')
});
