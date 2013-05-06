Numizmatory.ActionView = Backbone.Marionette.ItemView.extend({
  template: "#actions-template",

  events: {
    "click button#start": "startGame"
  },

  ui: {
    start: "button#start"
  },

  initialize: function() {
    this.listenTo(Numizmatory, "game:finish", this.onGameFinish)
  },

  startGame: function() {
    this.ui.start.attr('disabled', 'disabled');
    this.$el.slideUp(100, function() {
      Numizmatory.trigger("game:start");
    });
  },
  onGameFinish: function() {
    this.ui.start.removeAttr("disabled");
  }
});

Numizmatory.addInitializer(function() {
  this.actionsRegion.show(new Numizmatory.ActionView());
});
