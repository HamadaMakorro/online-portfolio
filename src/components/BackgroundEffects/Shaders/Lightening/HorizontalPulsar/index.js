import { Camera, Scene, UniformsLib, UniformsUtils, WebGLRenderer, Vector2, PlaneBufferGeometry, ShaderMaterial, Mesh } from 'three-full'
import fragShader from './frag'

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
element

export default function() {
  function init() {
    elementId = 'background-effect'
    element = document.getElementById( elementId )
    if( element.childNodes ) removeCanvas()

    camera = new Camera()
    scene = new Scene()
    
    renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    container = document.getElementById( elementId );
    container.appendChild(renderer.elementId)
    
    resolution = new Vector2(window.screen.height, window.screen.width)
    constant = new Vector2( 2.0, 3.0 )

    // TODO: Resize
    // window.addEventListener("resize", this.onWindowResize, false)

    geometry = new PlaneBufferGeometry( 2, 2 )
    material = new ShaderMaterial({
      uniforms: uniforms,
      fragmentShader: fragShader,
    })
    mesh = new Mesh(geometry, material)
    scene.add(mesh)
    
    uniforms = UniformsUtils.merge([UniformsLib.ambient, UniformsLib.lights]);
    uniforms.u_resolution = {type: 'v2', value: resolution};
    uniforms.u_time = { type: 'f', value: 0.0 }
    uniforms.u_constant = { type: 'v2', value: constant }
  
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

      uniforms.u_time = { type: 'f', value: now * 5 }
      renderer.render( scene, camera )
    }

    animate()
  }

  init()
}
