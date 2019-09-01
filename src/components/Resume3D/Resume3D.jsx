
import React, { useEffect, useState } from 'react'
import { WebGLRenderer, CSS3DRenderer, PerspectiveCamera, Scene, Group, CSS3DObject, MeshLambertMaterial, PlaneGeometry, Mesh, PointLight, AmbientLight } from 'three-full'
import { connect } from 'react-redux'
import Stats from 'stats-js'
import Resume from '../Resume/Resume'
import Configurator from '../../containers/Configurator'
import SourceButton from './components/SourceButton/SourceButton'
import BetaTag from './components/BetaTag/BetaTag'
// background effects
import VerticalLightening from '../BackgroundEffects/Shaders/Lightening/VerticalLightening'
// import HorizontalLightening from '../BackgroundEffects/Shaders/Lightening/HorizontalLightening'
// import HorizontalPulsar from '../BackgroundEffects/Shaders/Lightening/HorizontalPulsar'
import Plasma1 from '../BackgroundEffects/Shaders/Plasmas/Plasma1'
// import Plasma2 from '../BackgroundEffects/Shaders/Plasmas/Plasma2'
// import BasicColorChange from '../BackgroundEffects/Shaders/FlatColorShaders/BasicColorChange'
// screen effects
import ParticleAttraction from '../ScreenEffects/ParticleAttraction/ParticleAttraction'
import FrozenBrush from '../ScreenEffects/FrozenBrush/FrozenBrush.js'
import './Resume3D.scss'

let scene,
card,
renderer,
_renderer

function Resume3D( { state } ) {
  let camera,
  material,
  geometry,
  objects,
  lights,
  stats,
  pointLight,
  
  windowHalfX,
  windowHalfY,
  mouseX,
  mouseY,
  onWindowMouseWheel,
  onWindowMouseMove,
  id,

  cardWidth,
  cardHeight
  // uniforms,
  // cardFragShader,
  // constant,
  // resolution,
  // cardEffects

  // screen effects
  const [ particleAttraction, toggleParticleAttraction ] = useState(false)
  const [ frozenBrush, toggleFrozenBrush ] = useState(false)
  // background effects
  const [ verticalLightening, toggleVerticalLightening ] = useState(false)
  // const [ horizontalLightening, toggleHorizontalLightening ] = useState(false)
  // const [ horizontalPulsar, toggleHorizontalPulsar ] = useState(false)
  const [ plasma1, togglePlasma1 ] = useState(false)
  // const [ plasma2, togglePlasma2 ] = useState(false)
  // const [ basicColorChange, toggleBasicColorChange ] = useState(false)

  function removeCanvas( id ) {
    let canvas = document.getElementById( id )
    let child = canvas.childNodes
    child[0] && canvas.removeChild( child[0] )
  }

  /*eslint-disable*/
  // on mount
  useEffect(() => {
    if( window.innerWidth <= 768 ) return
    init( state.three )
    return function cleanup() {
      window.removeEventListener( 'wheel', onWindowMouseWheel )
      window.removeEventListener( 'mousemove', onWindowMouseMove )
    }
  }, [])

  // update threejs scene
  useEffect(() => {
    if(scene && card) {
      scene.background = state.three.backgroundColor
      card.material.visible = state.three.showCard
      card.material.color = state.three.cardColor
      // card.material.opacity = state.three.cardOpacity
    }
    
    /** spotlight updates */
    // pointLight.color = state.three.spotlightColor
    // pointLight.intensity = state.three.spotlightIntensity
    // pointLight.distance = state.three.spotlightDistance
  }, [state.three])

  
  // update background effect
  
  useEffect(() => {
    function removeBackgroundEffects() {
      delete scene.background
      renderer.setClearColor( 0xffffff, 0)
      id = 'background-effect'
      let el = document.getElementById( id )
      if( el.childNodes ) removeCanvas( id )
      // toggles
      toggleVerticalLightening(false)
      // toggleHorizontalLightening(false)
      // toggleHorizontalPulsar(false)
      togglePlasma1(false)
      // togglePlasma2(false)
      // toggleBasicColorChange(false)
    }
    switch (state.three.backgroundEffect) {
      case 'none': 
        removeBackgroundEffects()
        break
      case 'verticalLightening':
        removeBackgroundEffects()
        toggleVerticalLightening( true )
        break
      case 'horizontalLightening':
        removeBackgroundEffects()
        // toggleHorizontalLightening( true )
        break
      case 'horizontalPulsar':
        removeBackgroundEffects()
        // toggleHorizontalPulsar( true )
        break
      case 'plasma1':
        removeBackgroundEffects()
        togglePlasma1( true )
        break
      case 'plasma2':
        removeBackgroundEffects()
        // togglePlasma2( true )
        break
      case 'basicColorChange':
        removeBackgroundEffects()
        // toggleBasicColorChange( true )
        break
      default:
        break
    }
  }, [state.three.backgroundEffect])

  
  // update screen effects
  
  useEffect(() => {
    function removeScreenEffects() {
      let id = 'screen-effect'
      let el = document.getElementById( id )
      if( el.childNodes ) removeCanvas( id )
      toggleParticleAttraction( false )
      toggleFrozenBrush( false )
    }
    switch( state.three.screenEffect ) {
      case 'none':
        removeScreenEffects()
        break  
        
      case 'particleAttraction':
        removeScreenEffects()
        toggleParticleAttraction( true )
        break

      case 'frozenBrush':
        removeScreenEffects()
        toggleFrozenBrush( true )
        break
        
      default:
        break
    }
  }, [state.three.screenEffect])

  function init( { showCard, spotlightColor, cardColor, spotlightIntensity, spotlightDistance, cameraZoom, cardEffect } ) {
    windowHalfX = window.innerWidth / 2
    windowHalfY = window.innerHeight / 2
    mouseX = 0
    mouseY = 0
  
    stats = new Stats()
    stats.showPanel( 0 )
    document.body.appendChild( stats.dom )
  
    renderer = new WebGLRenderer({ alpha: true })
    renderer.setClearColor( 0xffffff, 0)
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.domElement.attributes.style.nodeValue += ' position: absolute; top: 0; background: none'
    renderer.domElement.id = 'resume-webgl-renderer'
  
    _renderer = new CSS3DRenderer({ alpha: true })
    _renderer.setSize( window.innerWidth, window.innerHeight )
    _renderer.domElement.attributes.style.nodeValue += ' position: absolute; top: 0; background: none'
    _renderer.domElement.id = "resume-css-renderer"
    
    document.getElementById('root').appendChild(renderer.domElement)
    document.getElementById('root').appendChild(_renderer.domElement)
    
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000)
    camera.position.set( 0, 0, 1500 )
  
    scene = new Scene()
    // scene.background = new Color( 'white' )
    // scene.position.y = 800
    // scene.autoUpdate = false
    // scene.matrixAutoUpdate = false
  
    let element = document.getElementById( 'resume' )
    objects = new Group()
    objects.name = "objects"
    let object =  new CSS3DObject( element ) 
    objects.add( object )
    scene.add( objects )
  
    // function createCardShader() {
    //   uniforms = UniformsUtils.merge([UniformsLib.ambient, UniformsLib.lights]);
    //   uniforms.u_resolution = {type: 'v2', value: resolution};
    //   uniforms.u_time = { type: 'f', value: 0.0 }
    //   material = new ShaderMaterial({
    //     uniforms: uniforms,
    //     fragmentShader: cardFragShader,
    //   })
    //   return material
    // }
  
    if ( showCard ) {
      if( !cardEffect ) {
        material = new MeshLambertMaterial( { color: cardColor, wireframe: false } )
      }
      // material = createCardShader()
      cardWidth = window.innerWidth * 1.2
      cardHeight = window.innerHeight * 5.0
      geometry = new PlaneGeometry( cardWidth, cardHeight )
      card = new Mesh( geometry, material )
        card.castShadow = false
        card.receiveShadow = false
      objects.add( card )
  
      scene.add( objects )
    }
  
    lights = new Group()
    let ambientLight = new AmbientLight( 0x404040 )
    lights.add( ambientLight )
  
    pointLight = new PointLight( spotlightColor, spotlightIntensity, spotlightDistance )
    pointLight.position.copy( camera.position )
    lights.add( pointLight )
  
    scene.add( lights )
  
    let [_onWindowMouseWheel, _onWindowMouseMove] = attachEventListeners()
    onWindowMouseMove = _onWindowMouseMove
    onWindowMouseWheel = _onWindowMouseWheel

    objects.position.y = -1750
  
    function animate() {
      requestAnimationFrame ( animate )
  
      camera.position.x += ( mouseX - camera.position.x ) * .05
      camera.position.y += ( mouseY - camera.position.y ) * .05  
      camera.position.z += cameraZoom
      camera.lookAt( scene.position )
  
      pointLight.position.copy( camera.position )
      _renderer.render( scene, camera )
      renderer.render( scene, camera )
  
      stats.update()
    }
    animate()
  }

  function attachEventListeners() {
    function onWindowMouseWheel( e ) {
      objects.position.y += e.deltaY * 0.5
    }
    function onWindowMouseMove( e ) {
      mouseX = ( e.clientX - windowHalfX ) 
      mouseY = ( e.clientY - windowHalfY ) 
    }
    // function onWindowTouchMove(){
    // }
    // function onWindowTouchStart(){
    // }
    function onWindowResize(){
      renderer.setSize( window.innerWidth, window.innerHeight )
      _renderer.setSize( window.innerWidth, window.innerHeight )
      // window.location.reload()
    }
    window.addEventListener( 'wheel', onWindowMouseWheel )
    window.addEventListener( 'mousemove', onWindowMouseMove )
    // window.addEventListener( 'touchmove', onWindowTouchMove )
    // window.addEventListener( 'touchstart', onWindowTouchStart )
    window.addEventListener( 'resize', onWindowResize )
  
    return [onWindowMouseWheel, onWindowMouseMove]
  }
  
  return(
    <React.Fragment>
      <Configurator />
      {/* Background Effects */}
      { verticalLightening && <VerticalLightening /> }
      {/* { horizontalLightening && <HorizontalLightening /> } */}
      {/* { horizontalPulsar && <HorizontalPulsar /> } */}
      { plasma1 && <Plasma1 /> }
      {/* { plasma2 && <Plasma2 /> } */}
      {/* { basicColorChange && <BasicColorChange /> } */}
      {/* Screen Effects */}
      { particleAttraction && <ParticleAttraction /> }
      { frozenBrush && <FrozenBrush /> }
      <SourceButton />
      <BetaTag />
      <Resume onScroll={onWindowMouseWheel} />
    </React.Fragment>
  )
}

function mapStateToProps( state ) {
  return { state }
}

export default connect( mapStateToProps )( Resume3D )