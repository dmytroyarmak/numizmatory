Numizmatory.VariantView = Backbone.Marionette.ItemView.extend({
  tagName: "span",
  template: _.template("<button><%= name %></button>")
});

Numizmatory.VariantsView = Backbone.Marionette.CollectionView.extend({
  itemView: Numizmatory.VariantView
});
