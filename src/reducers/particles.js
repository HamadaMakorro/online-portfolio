const initial = {
  particleSize: 20,
  particleCount: 7,
  toggleWalls: true,
  // useSprite: () => createTextSprite( text ),

  multiplyForce: 1, // use as a multiplier between -2 -> 2
  timeScale: 0.4,
  cursorSize: 100,
  useSprite: false
  // particleEffects: {}
}

const particles = ( state = initial, action ) => {
  switch (action.type) {
    case 'SIZE':
      return {
        ...state,
        particleSize: action.value
      }
    case 'COUNT':
      return {
        ...state,
        particleCount: action.value
      }
    case 'TOGGLE_WALLS':
      return {
        ...state,
        toggleWalls: action.value
      }
    case 'MULTIPLY_FORCE':
      return {
        ...state,
        multiplyForce: action.value
      }
    case 'TIMESCALE':
      return {
        ...state,
        timeScale: action.value
      }
    case 'CURSOR_SIZE':
      return {
        ...state,
        cursorSize: action.value
      }
    default:
      return state
  }
}

export default particles