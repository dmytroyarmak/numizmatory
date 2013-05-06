Numizmatory.ResultView = Backbone.Marionette.ItemView.extend({
  template: "#result-template",
  id: "result",
  initialize: function() {
    this.questions = this.options.questions;
  },
  render: function() {
    var data = {
      questions: this.questions.size(),
      correct:   this.questions.countCorreect(),
      incorrect: this.questions.countIncorreect(),
      score:     this.questions.countScore()
    };
    var template = this.getTemplate();
    var html = Marionette.Renderer.render(template, data);
    this.$el.html(html);

    return this;
  }
});
