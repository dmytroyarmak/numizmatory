Numizmatory.QuestionModel = Backbone.Model.extend({
});

Numizmatory.QuestionsCollection = Backbone.Collection.extend({
  model: Numizmatory.QuestionModel
});

Numizmatory.addInitializer(function(options) {
  this.questions = new Numizmatory.QuestionsCollection(options.questions);
});
