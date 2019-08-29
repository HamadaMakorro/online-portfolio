import { Camera, Scene, UniformsLib, UniformsUtils, WebGLRenderer, Vector2, PlaneBufferGeometry, ShaderMaterial, Mesh } from 'three-full'
import fragShader from './frag'


export default function() {
  let scene,
  camera,
  renderer,
  uniforms,
  geometry,
  material,
  mesh,
  resolution,
  constant,
  container,
  elementId,
  element,
  lighteningHorizontalPos
  
  function init() {
    elementId = 'background-effect'
    element = document.getElementById( elementId )
    if( element.childNodes ) removeCanvas()

    camera = new Camera()
    scene = new Scene()
    
    renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    container = document.getElementById( elementId );
    container.appendChild(renderer.domElement)
    
    resolution = new Vector2(window.screen.height, window.screen.width)
    // resolution.divideScalar(5.0) // bring down the resolution to make the compute more friendly for high-res screens
    constant = new Vector2( 2.0, 3.0 )

    function calcLighteningHorizontalPos() {
      let k = 0.44 // horizontal positioning factor
      let c = window.innerWidth / ( window.outerWidth / 5 )
      let width = c * k
      lighteningHorizontalPos = width
    }

    calcLighteningHorizontalPos()
    
    uniforms = UniformsUtils.merge([UniformsLib.ambient, UniformsLib.lights]);
    uniforms.u_resolution = {type: 'v2', value: resolution};
    uniforms.u_time = { type: 'f', value: 0.0 }
    uniforms.u_constant = { type: 'v2', value: constant }
    uniforms.u_horizontalPos = { type: 'f', value: lighteningHorizontalPos }
    
    geometry = new PlaneBufferGeometry( 2, 2 )
    material = new ShaderMaterial({
      uniforms: uniforms,
      fragmentShader: fragShader,
    })
    mesh = new Mesh(geometry, material)
    scene.add(mesh)

    function removeCanvas() {
      let canvas = document.getElementById( elementId )
      let child = canvas.childNodes
      child[0] && canvas.removeChild( child[0] )
    }  

    function animate() {
      requestAnimationFrame ( animate )
      render()
    }
    
    function render() {
      let now = performance.now()
      now *= 0.001

      uniforms.u_time = { type: 'f', value: now }
      renderer.render( scene, camera )
    }

    animate()
  }

  init()

  return null
}
