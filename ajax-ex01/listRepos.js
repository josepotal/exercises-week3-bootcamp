
$('#click-me').on('click', function () {  // when clickin on the button
  var username = $('#username').val()     // create a variable username, to take the val() of the input in the id='name'

  $.ajax({ // ajax call by passing the username in the input
    url: 'https://api.github.com/users/' + username + '/repos'
  })
  .done(function (myData) {
    var aListReposHtml = myData.map(function (elem) {
      return '<li>' + elem.full_name + '</li>'
    })

    $('#listRepos').html(aListReposHtml)
  })
})
