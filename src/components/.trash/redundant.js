/** */
function createTextSprite( text ) {
  let canvas = document.createElement( 'canvas' )
  let _canvas = canvas.getContext( '2d' )
  canvas.width = _canvas.measureText( text ).width
  _canvas.fillText( text, 0, 10 )
  return canvas.toDataURL()
}

