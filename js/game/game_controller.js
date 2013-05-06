Numizmatory.GameController = Marionette.Controller.extend({
  initialize: function() {
    _.bindAll(this, "submitAnswer");
    this.questions = new Numizmatory.QuestionsCollection();
    this.questions.fetch();
    this.questions.on("change:answer", this.submitAnswer);
  },
  showNextQuestion: function() {
    var question = this.questions.getUnansweredQuestion();
    if (question) {
      Numizmatory.mainRegion.show(new Numizmatory.QuestionView({ model: question}))
    } else {
      this.onGameFinish();
    };
  },
  submitAnswer: function(question) {
    if (Numizmatory.mainRegion.currentView.model.id === question.id) {
      this.showNextQuestion();
    };
  },
  onGameFinish: function() {
    Numizmatory.mainRegion.show(new Numizmatory.ResultView({ questions: this.questions }));
    Numizmatory.trigger("game:finish");
    this.close();
  }
});

Numizmatory.addInitializer(function(options) {
  this.on("game:start",function(){
    var game = new Numizmatory.GameController();
    game.showNextQuestion();
  });
});
