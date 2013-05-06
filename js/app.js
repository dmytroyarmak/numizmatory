var Numizmatory = new Backbone.Marionette.Application();

Numizmatory.addRegions({
  actionsRegion: "#actions",
  mainRegion: "#main",
  detailsRegion: "#details"
});

Numizmatory.on("initialize:after", function(options){
  Backbone.history.start();
});
