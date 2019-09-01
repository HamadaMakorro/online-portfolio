import React, { useEffect } from 'react'
import { LineDashedMaterial, Line, Geometry, Vector3, PointLight, WebGLRenderer, CSS3DRenderer, AmbientLight, SphereBufferGeometry, MeshBasicMaterial, Mesh, PlaneGeometry, MeshStandardMaterial, CSS3DObject, Group, PerspectiveCamera, Scene, LinearFilter, PMREMCubeUVPacker, PMREMGenerator, UnsignedByteType, HDRCubeTextureLoader } from 'three-full'
import BusinessCard from '../BusinessCard/BusinessCard'
import VerticalLightening from '../BackgroundEffects/VerticalLightening'

/**
 * Author: Hamada (https://hamada.me)
 */

export default function() {
  let mouseX,
  mouseY,
  windowHalfX,
  windowHalfY,
  onWindowMouseMove,
   
  envmapParams

  function attachEventListeners() {
    function onWindowMouseMove( e ) {
      mouseX = ( e.clientX - windowHalfX ) / 4
      mouseY = ( e.clientY - windowHalfY ) / 4
    }
    window.addEventListener( 'mousemove', onWindowMouseMove )
    return onWindowMouseMove
  }
  
  function init(){
    let renderer, 
    _renderer,
    scene,
    camera,
    time,
    lights,
    objects,
    material,
    geometry,
    mesh,
    ambientLight,
    sphere,
    pointLight,

    hdrCubeMap,
    pmremGenerator, 
    pmremCubeUVPacker,
    hdrCubeRenderTarget,
    hdrUrls,

    cardElement,
    cardObject

    const POINTLIGHT_PATH_CONSTANTS = [
      0,    0,    0, // ambient light
      120,  160,  130, // red
      -120, 160,  130, // blue
      1,    160,  130, // green
      -180, -160, -90, // blue
      180,  -160, -90, // red
      1,    -160, -130, // yellow
    ]

    envmapParams = {
      envMap: 'HDR',
      roughness: 0.0,
      metalness: 0.6,
      exposure: 0.4,
      reflectivity: 0.6
    }

    time = 0
    mouseX = 0
    mouseY = 0

    windowHalfX = window.innerWidth / 2 
    windowHalfY = window.innerHeight / 2

    scene = new Scene()    
    camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000)
    camera.position.z = 1000

    lights = new Group()
    objects = new Group()

    cardElement = document.getElementById("business-card")
    cardElement.style.background = 'none'
    cardObject = new CSS3DObject( cardElement )
    objects.add( cardObject )

    // 3d card env map
    hdrUrls = [ 'px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr' ]
    hdrCubeMap = new HDRCubeTextureLoader()
    .setPath( 'textures/cubemap/pisaHDR/' )
    .load( UnsignedByteType, hdrUrls, function () {
      pmremGenerator = new PMREMGenerator( hdrCubeMap )
      pmremGenerator.update( renderer )
      pmremCubeUVPacker = new PMREMCubeUVPacker( pmremGenerator.cubeLods )
      pmremCubeUVPacker.update( renderer )
      hdrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget
      hdrCubeMap.magFilter = LinearFilter
      hdrCubeMap.needsUpdate = true
      pmremGenerator.dispose()
      pmremCubeUVPacker.dispose()
      createCard()
    })

    function createCard() {
      // material = new MeshPhysicalMaterial( { color: 0xd3d3d3, wireframe: false } )
      material = new MeshStandardMaterial( { color: 0xffffff, metalness: envmapParams.metalness, roughness: envmapParams.roughness })
      geometry = new PlaneGeometry( 350, 200 )
      mesh = new Mesh( geometry, material )
      mesh.material.envMap = hdrCubeRenderTarget.texture
      objects.add( mesh )
      scene.add( objects )
    }
    
    function createLight( color, group ) {
      sphere = new SphereBufferGeometry( 3.5, 16, 8 )
      pointLight = new PointLight( color, 1.0, 900 )
      pointLight.add( new Mesh( sphere, new MeshBasicMaterial( { color: color, opacity: 0.7 } ) ) )
      group.add( pointLight )
    }

    ambientLight = new AmbientLight( 0xffffff )
    lights.add( ambientLight )
    createLight( 0xff0040, lights ) // red
    createLight( 0x0040ff, lights ) // blue
    createLight( 0x80ff80, lights ) // green
    createLight( 0x0040ff, lights ) // blue
    createLight( 0xff0040, lights ) // red
    // createLight( 0x80ff80, lights ) // green
    createLight( 0xffaa00, lights ) // yellow
    scene.add( lights )

    /**
     * create one point light that follows camera for a subtle sheen effect
     * usecase: when not using env map, for MeshPhysicalMaterial
     */

    // pointLight = new PointLight( 0xffffff, 0.25, 0 )
    // pointLight.position.copy( camera.position )
    // scene.add( pointLight )  

    let numberOfPoints = 100
    let rings = 6
    let lines = new Group()
    let line

    /** Create atomic rings */
    for ( let i = 0; i < rings; i++ ) {
      let theta = 0
      geometry = new Geometry()
      for( let j = 0; j < numberOfPoints; j++ ) {
        theta += 0.1
        geometry.vertices.push(
          new Vector3(
            POINTLIGHT_PATH_CONSTANTS[i * 3 ] * Math.sin( theta ),
            POINTLIGHT_PATH_CONSTANTS[i * 3 + 1] * Math.cos( theta ),
            POINTLIGHT_PATH_CONSTANTS[i * 3 + 2] * Math.sin( theta )
          )
        )
      }
      material = new LineDashedMaterial({ color: 0x6666FF, dashSize: 10, gapSize: 10 })
      line = new Line( geometry, material )
      line.computeLineDistances();
      lines.add( line )
    }
    scene.add( lines )
    
    renderer = new WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.top = 0

    /** bunch of env map adjustments */
    // renderer.toneMapping = ReinhardToneMapping
    // renderer.gammaInput = true
    renderer.gammaOutput = true

    document.body.appendChild(renderer.domElement)
    
    _renderer = new CSS3DRenderer()
    _renderer.setSize(window.innerWidth, window.innerHeight)
    _renderer.domElement.style.position = 'absolute'
    _renderer.domElement.style.top = 0
    document.body.appendChild(_renderer.domElement)

    onWindowMouseMove = attachEventListeners()

    function render() {
      // cheap way to control time
      time += 0.030

      camera.position.x += ( mouseX - camera.position.x ) * .05
      camera.position.y += ( mouseY - camera.position.y ) * .05
      camera.lookAt( scene.position )

      pointLight.position.copy ( camera.position )

      lights.children.forEach( ( el, i ) => {
        el.position.x = POINTLIGHT_PATH_CONSTANTS[i * 3 ] * Math.sin( time )
        el.position.y = POINTLIGHT_PATH_CONSTANTS[i * 3 + 1] * Math.cos( time )
        el.position.z = POINTLIGHT_PATH_CONSTANTS[i * 3 + 2] * Math.sin( time )
      })

      renderer.render( scene, camera )
      _renderer.render( scene, camera )
    }

    function animate () {
      requestAnimationFrame( animate )
      render()
    }
    animate()
   }

   /*eslint-disable*/
   // on mount
  useEffect(() => {
    init()
    return function cleanup() {
      window.removeEventListener( 'mousemove', onWindowMouseMove )
    }
  }, []) 

  return(
    <React.Fragment>
      <VerticalLightening />
      <BusinessCard />
    </React.Fragment>
  )
}
 