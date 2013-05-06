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
    Numizmatory.trigger("game:start");
    this.ui.start.attr('disabled', 'disabled');
  },
  onGameFinish: function() {
    this.ui.start.removeAttr("disabled");
  }
});

Numizmatory.addInitializer(function() {
  this.actionsRegion.show(new Numizmatory.ActionView());
});
