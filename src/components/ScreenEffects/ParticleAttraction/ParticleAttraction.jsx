import * as Matter from 'matter-js'
import { connect } from 'react-redux'
import { useEffect } from 'react'
// import SpriteText from 'three-spritetext'

/**
 * Author: Hamada (https://hamada.me)
 * Inspired by: https://soulwire.github.io/Coffee-Physics/
 * 
 * Could probably do with some work to make it more efficient. Feel free to modify.
 */

function ParticleAttraction( { state } ) {
  // remove element if it already exists 
  let domElement = 'screen-effect'
  let el = document.getElementById( domElement )
  if( el.childNodes ) removeCanvas()

  const { particles: { 
    particleSize, 
    particleCount, 
    toggleWalls, 
    multiplyForce, 
    timeScale, 
    cursorSize, 
    useSprite 
  } } = state

  function init() {

    let delta = 0
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Composites = Matter.Composites,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies;
  
    // create engine
    let engine = Engine.create({ timing: { timeScale: timeScale } }),
        world = engine.world;
  
    engine.world.gravity.y = 0;
  
    // create renderer
    let render = Render.create({
      element: document.getElementById( domElement ),
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        showAngleIndicator: false,
        wireframes: false,
      }
    });
  
    Render.run(render);
  
    // create runner
    let runner = Runner.create();
    Runner.run(runner, engine);
  
    render.canvas.attributes.style.nodeValue = 'background: none; z-index: 1; position: absolute; top: 0;'

    // add bodies
    let stack = Composites.stack(100, 185, particleCount, particleCount, 20, 0, function (x, y) {
      if( useSprite ) {
        return Bodies.rectangle(x, y, 64, 64, {
          render: {
              strokeStyle: '#ffffff',
              sprite: {
                  texture: useSprite
              }
          }
        }) } else {
          return Bodies.circle(x, y, Math.random() * particleSize );
      }
    })
  
    let planet = Bodies.circle(400, 300, cursorSize, { render: { visible: false } })
        Matter.Body.setMass(planet, 500000)
    
    function addWalls() {
      if( !toggleWalls ) return []
      return(
        [
          Bodies.rectangle(0, 0, window.innerWidth * 2, 2, { isStatic: true }), // top
          Bodies.rectangle(window.innerWidth, 0, 2, window.innerHeight * 2, { isStatic: true }), // right
          Bodies.rectangle(0, window.innerHeight, window.innerWidth * 2, 2, { isStatic: true }), // bottom
          Bodies.rectangle(0, 0, 2, window.innerHeight * 2, { isStatic: true }) // left
        ]
      )
    }
  
    World.add(world, [
      ...addWalls(),
      planet,
      stack
    ]);
  
    let mouse = Mouse.create(render.canvas)
    let mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });
    
    // Mouse.setElement(mouse, render.canvas)
    // World.add(world, mouseConstraint);
    
      
    // time for some elementary physics, let's put on our hat and use some college knowledge
    const G = 0.001
    let force = 0
    let angle = 0
    let distance = 0
    let xForce = 0
    let yForce = 0
  
    function calcForce(body) {
      distance = Math.pow((body.position.x - planet.position.x), 2) + Math.pow((body.position.y - planet.position.y), 2)
      force = (G * planet.mass * body.mass) / distance
      angle = Matter.Vector.angle(planet.position, body.position)
      return [force, angle]
    }
  
    function returnForce(body) {
      const [force, angle] = calcForce(body)
      xForce = force * Math.cos(angle) * multiplyForce
      yForce = force * Math.sin(angle) * multiplyForce
      return Matter.Body.applyForce(body, { x: mouse.position.x, y: mouse.position.y }, { x: - xForce, y: - yForce })
    }
  
    function applyForceToParticle(e) {
      Matter.Body.setPosition(planet, { x: mouse.position.x, y: mouse.position.y })
      world.composites[0].bodies.forEach(returnForce)
    }

    Matter.Events.on( mouseConstraint, "mousemove", applyForceToParticle, true )

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight }
    });
  
    function animate() {
      requestAnimationFrame(animate)
      delta = performance.now() * 0.001
      Engine.update(engine, delta)
    }
  
    animate()
  }

  function removeCanvas() {
    let canvas = document.getElementById( domElement )
    let child = canvas.childNodes
    child[0] && canvas.removeChild( child[0] )
  }  

  // on mount
  useEffect(() => {
    init()
  })

  return null
}

function mapStateToProps( state ) {
  return { state }
}

export default connect( mapStateToProps )( ParticleAttraction )

/**
 * FUTURE REFERENCE:
 * text as sprite reference: 
 * usecase: https://vasturiano.github.io/3d-force-graph/example/text-nodes/
 * module: https://github.com/vasturiano/three-spritetext
 */

