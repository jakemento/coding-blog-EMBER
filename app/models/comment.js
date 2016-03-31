import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  blog: DS.belongsTo('blog', {async: true})
});
