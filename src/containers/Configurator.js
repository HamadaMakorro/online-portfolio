// import dat from "dat.gui";
import { connect } from "react-redux";
import { 
  // changeCardOpacity, 
  changeScreenEffect, changeBackgroundEffect, changeBackgroundColor, showCard, changeCardColor, changeParticleSize, changeParticleCount, toggleWalls, multiplyForce, changeTimescale, changeCursorSize } from '../actions'
import dat from "dat.gui";

function Configurator({ dispatch }) {
  const gui = new dat.GUI( { width: 300 } );
  document.getElementsByClassName('dg ac')[0].style.zIndex = 1

  const params = {
    resume: {
      backgroundColor: "#ffffff",
      showCard: true,
      cardColor: '#ffffff',
      // cardEffects: 'none',
      // cardOpacity: 1,
    },
    lights:{
      spotlightColor: '#ffffff',
      spotlightIntensity: 1,
      spotlightDistance: 1,
    },
    screenEffects: {
      options: 'none'
    },
    backgroundEffects: {
      options: 'none'
    },
    particleProps: {
      particleSize: 20,
      particleCount: 7,
      // useSprite: () => createTextSprite( text ),
  
      multiplyForce: 1,
      timeScale: 0.4,
      cursorSize: 100,
      toggleWalls: true,
      // particleEffects: {}
    },
  };

  const resume = gui.addFolder("Resume");
        resume.addColor( params.resume, "backgroundColor").name("backgroundcolor").onChange( value => dispatch(changeBackgroundColor( value ) ) )
        resume.addColor(  params.resume, "cardColor").name( "cardColor" ).onChange( value => dispatch(changeCardColor(value) ) )
        resume.add(  params.resume, "showCard").name( "showCard" ).onChange( value => dispatch(showCard(value) ) )
        // resume.add(  params.resume, "cardOpacity", 0, 1).name( "cardOpacity" ).onChange( value => dispatch(changeCardOpacity(value) ) )
        // resume.add(  params.resume, "cardEffects", ['none', 'plasma1']).name( "cardEffects" )
        // .onChange( value => dispatch(changeCardEffect(value) ) )
  
  const backgroundEffects = gui.addFolder("Background Effects");
        backgroundEffects.add( params.backgroundEffects, "options", ['none', 'verticalLightening', 'plasma1',
        // 'horizontalLightening', 'plasma2', 'basicColorChange' // to reimpliment at a later time
        ] ).name('options')
        .onChange( value => dispatch(changeBackgroundEffect(value)) )
  const screenEffects = gui.addFolder("Screen Effects");
        screenEffects.add( params.screenEffects, "options", ['none', 'particleAttraction', 'frozenBrush']).name('options')
        .onChange( value => dispatch(changeScreenEffect(value)) )

  // const light = gui.addFolder("Lights")
      //   light.addColor( params, "spotlightColor").name( "color" ).onChange( value => dispatch(changeSpotlightColor(value) ) )
      //   light.add( params, "spotlightIntensity", - 5.0, 5.0).name( "intensity" ).onChange( value => dispatch(changeSpotlightIntensity(value) ) )
      //   light.add( params, "spotlightDistance", 0, 100).name( "distance" ).onChange( value => dispatch(changeSpotlightDistance(value) ) )

  const particles = gui.addFolder('particleAttraction Settings [Screen Effects]')
        particles.add( params.particleProps, "particleSize", 1.0, 50.0).name( "particleSize" ).onChange( value => dispatch(changeParticleSize(value) ) )
        particles.add( params.particleProps, "particleCount", 1.0, 10.0).name( "particleCount" ).onChange( value => dispatch(changeParticleCount(value) ) ) 
        particles.add( params.particleProps, "toggleWalls").name( "toggleWalls" ).onChange( value => dispatch(toggleWalls(value) ) )
        particles.add( params.particleProps, "multiplyForce", -10.0, 10.0).name( "multiplyForce" ).onChange( value => dispatch(multiplyForce(value) ) )
        particles.add( params.particleProps, "timeScale", 0.0, 2.0 ).name( "timeScale" ).onChange( value => dispatch(changeTimescale(value) ) )
        particles.add( params.particleProps, "cursorSize", 50, 300 ).name( "cursorSize" ).onChange( value => dispatch(changeCursorSize(value) ) )

  return null
}

export default connect()(Configurator);
