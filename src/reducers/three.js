import { Color } from 'three-full'

const initial = {
  showCard: true,
  spotlightColor: new Color( '#ffffff' ),
  // backgroundColor: new Color( '#ffffff' ),
  cardColor: new Color( '#ffffff' ),
  cardOpacity: 1.0,
  spotlightIntensity: 1,
  spotlightDistance: -19,
  cameraZoom: 0,
  cardEffect: false
}

const three = ( state = initial, action ) => {
  switch (action.type) {
    case 'CARD_OPACITY':
      return {
        ...state,
        cardOpacity: action.value
      }
    case 'SCREEN_EFFECT':
      return {
        ...state,
        screenEffect: action.value
      }
    case 'BACKGROUND_EFFECT':
      return {
        ...state,
        backgroundEffect: action.value
      }
    case 'BACKGROUND_COLOR':
      return {
        ...state,
        backgroundColor: new Color( action.value )
      }  
    case 'SHOW_CARD':
      return {
        ...state,
        showCard: action.value
      }  
    case 'CARD_COLOR':
      return {
        ...state,
        cardColor: new Color( action.value )
      }  
    case 'SPOTLIGHT_COLOR':
      return {
        ...state,
        spotlightColor: new Color( action.value )
      }  
    case 'SPOTLIGHT_INTENSITY':
      return {
        ...state,
        spotlightIntensity: action.value
      }  
    case 'SPOTLIGHT_DISTANCE':
      return {
        ...state,
        spotlightDistance: action.value
      }  
    default:
      return state
  }
}

export default three