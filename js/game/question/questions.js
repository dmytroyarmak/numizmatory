Numizmatory.QuestionModel = Backbone.Model.extend({
  defaults: {
    image: "default.jpg",
    answer: null
  }
});

Numizmatory.QuestionsCollection = Backbone.Collection.extend({
  model: Numizmatory.QuestionModel,
  getUnansweredQuestion: function() {
    return this.findWhere({answer: null});
  },
  countCorreect: function() {
    return this.reduce(function(memo, question) {
      return memo + (question.get("answer") === question.get("right_answer") ? 1 : 0);
    }, 0);
  },
  countIncorreect: function() {
    return this.size() - this.countCorreect();
  },
  countScore: function() {
    return 100*this.countCorreect()/this.size();
  },
  fetch: function() {
    this.set(Numizmatory.someQuestionData);
  }
});
