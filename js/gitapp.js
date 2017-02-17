var apiKey = require ('./../.env').apiKey;

Gitapp = function(){
}
Gitapp.prototype.getGitInfo = function(user, displayFunction) {
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response) {
    console.log(response);
    displayFunction(user, response.name);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
    $('.showuser').text(error.responseJSON.message);
  });
}

exports.githubModule = Gitapp;
