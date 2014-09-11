function renderTemplate(templateId, container, model) {
   var templateString = $('#' + templateId).text();
   var templateFunction = _.template(templateString);
   var renderedTemplate = templateFunction(model);
   $(container).append(renderedTemplate);
}

$.getJSON("https://api.github.com/users/jacobthemyth/repos").done(function(repos){
  _.each(repos, function(repo) {
    renderTemplate('repo', 'body', repo);
  });
});

$.getJSON("https://api.github.com/users/jacobthemyth").done(function(user){
  renderTemplate('user', 'body', user);
});
