Numizmatory.VariantModel = Backbone.Model.extend({
  defaults: {
    name: ""
  }
});

Numizmatory.VariantsCollection = Backbone.Collection.extend({
  model: Numizmatory.VariantModel
});
