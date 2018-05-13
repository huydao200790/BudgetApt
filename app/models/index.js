import DS from 'ember-data';

export default DS.Model.extend({

  income:DS.attr('string'),
  spent: DS.attr('string'),
  email:DS.attr('string')
});
