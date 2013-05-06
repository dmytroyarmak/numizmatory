Numizmatory.QuestionView = Backbone.Marionette.Layout.extend({
  template: "#question-template",
  regions: {
    variantsRegion: "#variants"
  },
  initialize: function() {
    _.bindAll(this, "onVariantSubmited");
  },
  onRender: function() {
    var variants = new Numizmatory.VariantsCollection(this.model.get('variants'));
    variants.on("variant:submit", this.onVariantSubmited);
    this.variantsRegion.show(new Numizmatory.VariantsView({ collection: variants }))
  },
  onVariantSubmited: function(options) {
    this.model.set("answer", options.answer_id );
  }
});
