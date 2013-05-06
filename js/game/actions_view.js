Numizmatory.ActionView = Backbone.Marionette.ItemView.extend({
  template: "#actions-template"
});

Numizmatory.addInitializer(function() {
  this.actionsRegion.show(new Numizmatory.ActionView());
});
