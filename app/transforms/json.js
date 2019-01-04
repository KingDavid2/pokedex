import DS from "ember-data";

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return Ember.isBlank(serialized) ? {} : serialized;
  },
  serialize: function(deserialized) {
    return Ember.isBlank(deserialized) ? {} : deserialized;
  }
});
