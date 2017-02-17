var Gitapp = require('./../js/gitapp.js').githubModule;

var displayGitInfo = function(user, userGitInfo) {
  $('.showUser').text("User Information " + user + " is " + userGitInfo );
}

$(document).ready(function() {
  var currentGitObject = new Gitapp();
  $('#userNameBtn').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    currentGitObject.getGitInfo(user, displayGitInfo);
  });
});
