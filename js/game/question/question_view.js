Numizmatory.QuestionView = Backbone.Marionette.Layout.extend({
  template: "#question-template",
  regions: {
    variantsRegion: "#variants"
  },
  onRender: function() {
    var variants = new Numizmatory.VariantsCollection(this.model.get('variants'));
    this.variantsRegion.show(new Numizmatory.VariantsView({ collection: variants }))
  }
});
