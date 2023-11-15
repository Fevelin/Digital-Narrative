// how to position images making an arc in html and css

function arc(x) {
    var ySquare = 10000 - (x ) * (x )
    ySquare = Math.abs(ySquare)
    return Math.sqrt(ySquare)
  }

  $(".point").each(function(index) {
    var x = 50 * (2 * index / 10 - 1)
    var y = arc(x)
    
    $(this).css('left', (x + 200) + 'px')
    $(this).css('top', (200 - y) + 'px')
  })

  // https://www.phind.com/search?cache=d7ai4u2bssq0yiw1dui06mo1

  //