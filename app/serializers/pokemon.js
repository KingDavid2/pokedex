import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let attributes = payload;
    payload.type = 'pokemon';
    payload = { data: payload };
    payload.data.attributes = attributes;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
