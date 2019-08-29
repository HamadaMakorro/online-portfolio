// screen effects

export function changeScreenEffect( value ) {
  return {
    type: 'SCREEN_EFFECT',
    value
  }
}

// background effects

export function changeBackgroundEffect( value ) {
  return {
    type: 'BACKGROUND_EFFECT',
    value
  }
}

// background and card

export function changeCardOpacity( value ) {
  return {
    type: 'CARD_OPACITY',
    value
  }
}

export function changeBackgroundColor( value ) {
  return {
    type: 'BACKGROUND_COLOR',
    value
  }
}

export function showCard( value ) {
  return {
    type: 'SHOW_CARD',
    value
  }
}

export function changeCardColor( value ) {
  return {
    type: 'CARD_COLOR',
    value
  }
}

// lights

export function changeSpotlightColor( value ) {
  return {
    type: 'SPOTLIGHT_COLOR',
    value
  }
}

export function changeSpotlightIntensity( value ) {
  return {
    type: 'SPOTLIGHT_INTENSITY',
    value
  }
}

export function changeSpotlightDistance( value ) {
  return {
    type: 'SPOTLIGHT_DISTANCE',
    value
  }
}

// particles 

export function changeParticleSize( value ) {
  return {
    type: 'SIZE',
    value
  }
}
export function changeParticleCount( value ) {
  return {
    type: 'COUNT',
    value
  }
}
export function toggleWalls( value ) {
  return {
    type: 'TOGGLE_WALLS',
    value
  }
}
export function multiplyForce( value ) {
  return {
    type: 'MULTIPLY_FORCE',
    value
  }
}
export function changeTimescale( value ) {
  return {
    type: 'TIMESCALE',
    value
  }
}
export function changeCursorSize( value ) {
  return {
    type: 'CURSOR_SIZE',
    value
  }
}
