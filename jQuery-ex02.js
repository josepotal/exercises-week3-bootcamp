$('li').each(function (index, elem) {
  if (index % 2 != 0) {
    console.log(index)
    $(elem).html(Number($(elem).text()) * 4000)
  }
})
