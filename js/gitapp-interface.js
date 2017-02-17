var Gitapp = require('./../js/gitapp.js').githubModule;

var displayGitInfo = function(user, userGitInfo) {
    $('.showUserName').text("Full Name of " + user + " is " + userGitInfo.name);
    $('.showCreationDate').text("The account was created on " + userGitInfo.created_at);
    $("#showUserImage").html("<img src="+ userGitInfo.avatar_url + ">");
};

$(document).ready(function() {
    var currentGitObject = new Gitapp();
    $('#userNameBtn').click(function() {
        var user = $('#username').val();
        $('#username').val("");
        currentGitObject.getGitInfo(user, displayGitInfo);
    });
});
