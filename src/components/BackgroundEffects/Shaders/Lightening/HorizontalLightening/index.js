// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import * as THREE from 'three-full'
import fragShader from './frag'
// console.log('fragShader: ', fragShader);

let scene,
camera,
renderer,
uniforms,
geometry,
material,
mesh,
resolution,
constant,
elementId

export default function initHerticalLighteningBackground() {

  function init() {
    elementId = 'background-effect'
    let el = document.getElementById( elementId )
    if( el.childNodes ) removeCanvas()

    camera = new THREE.Camera()

    scene = new THREE.Scene()
    
    uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.ambient, THREE.UniformsLib.lights]);
    
    // let canvas = document.getElementById( 'resume-renderer' )
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    // renderer.domElement.id = 'background-effect'  

    let container = document.getElementById( 'background-effect' );
    container.appendChild(renderer.domElement)
    // window.addEventListener("resize", this.onWindowResize, false)

    resolution = new THREE.Vector2(window.screen.height, window.screen.width)
    console.log('resolution: ', resolution);
    constant = new THREE.Vector2( 2.0, 3.0 )
    console.log('constant: ', constant);
  
    geometry = new THREE.PlaneBufferGeometry( 2, 2 )

    // read('./VerticalLightening.frag', 'utf8', function(err, buffer) {
    //   console.log(buffer.toString())
    //   //=> 'some contents...'
    // });
        // fs.readFile('./VerticalLightening.frag', (err, data) => {
    //   if (err) throw err;
    //   console.log(data.toString());
    // });
  
    uniforms.u_resolution = {type: 'v2', value: resolution};
    uniforms.u_time = { type: 'f', value: 0.0 }
    uniforms.u_constant = { type: 'v2', value: constant }
  

  
    material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      // fragmentShader: document.getElementById( 'fragShaderLightening' ).textContent
      fragmentShader: fragShader,
    })
    mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    function removeCanvas() {
      let canvas = document.getElementById('background-effect')
      let child = canvas.childNodes
      child[0] && canvas.removeChild( child[0] )
    }  

    function animate() {
      requestAnimationFrame ( animate )
      _render()
    }
    
    function _render() {
      let now = performance.now()
      now *= 0.001
    
      uniforms.u_time = { type: 'f', value: now * 5 }
      renderer.render( scene, camera )
    }

    animate()
  
  }

  init()

}
