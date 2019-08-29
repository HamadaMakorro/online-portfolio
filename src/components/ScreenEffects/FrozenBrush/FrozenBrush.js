import Delaunay from '../lib/delaunay'
import * as _p5 from 'p5'

export default function() {
  // remove effect if it already exists
  let domElement = 'screen-effect'
  let el = document.getElementById( domElement )
  if( el.childNodes ) removeCanvas()

  function init() {
    function sketch ( p5 ) {
      let allParticles = []
      let maxLevel = 5;
      let useFill = true;
      let data = [];
    
      /** Moves particle to a random direction and then comes to a stop.
       * Spawns other particles within its lifetime.
       */
      function Particle(x, y, level) {
        this.level = level;
        this.life = 0;
        this.pos = p5.createVector(x, y)
        this.vel = _p5.Vector.random2D()
        this.vel.mult(p5.map(this.level, 0, maxLevel, 5, 2));
        this.move = function () {
          this.life++;
          // Add friction.
          this.vel.mult(0.9);
          this.pos.add(this.vel);
          // Spawn a new particle if conditions are met.
          if (this.life % 30 === 0) {
            if (this.level > 0) {
              this.level -= 1;
              let newParticle = new Particle(this.pos.x, this.pos.y, this.level - 1);
              allParticles.push(newParticle);
            }
          }
        }
      }
    
      p5.setup = function() {
        // p5.frameRate( 10 )
        p5.blendMode(p5.MULTIPLY)
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.canvas.attributes.style.nodeValue += ' position: absolute; top: 0; z-index: 1; opacity: 1; mix-blend-mode: multiply;'
        p5.colorMode(p5.HSB, 300);
        p5.textAlign(p5.CENTER);
      }

      p5.draw = function () {
        /**
         * Move and spawn particles.
         * Remove any that is below the velocity threshold.
         */
        for (let i = allParticles.length - 1; i > -1; i--) {
          allParticles[i].move();
          
          if (allParticles[i].vel.mag() < 0.01) {
            allParticles.splice(i, 1);
          }
        }
    
        if (allParticles.length > 0) {
          // Run script to get points to create triangles with.
          data = Delaunay.triangulate(allParticles.map(function (pt) {
            return [pt.pos.x, pt.pos.y];
          }));
          // Display triangles individually.
          if ( data ) {
          for (let i = 0; i < data.length; i += 3) {
            // Collect particles that make this triangle.
              let p1 = allParticles[data[i]];
              let p2 = allParticles[data[i + 1]];
              let p3 = allParticles[data[i + 2]];
    
              // Don't draw triangle if its area is too big.
              let distThresh = 100;
    
              if (p5.dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y) > distThresh) {
                continue;
              }
    
              if (p5.dist(p2.pos.x, p2.pos.y, p3.pos.x, p3.pos.y) > distThresh) {
                continue;
              }
    
              if (p5.dist(p1.pos.x, p1.pos.y, p3.pos.x, p3.pos.y) > distThresh) {
                continue;
              }
              // Base its hue by the particle's life.
              if (useFill) {
                p5.noStroke();
                p5.fill(165 + p1.life * 1.5, 360, 360);
              } else {
                p5.noFill();
                p5.stroke(165 + p1.life * 1.5, 360, 360);
              }
              p5.triangle(
                p1.pos.x, p1.pos.y,
                p2.pos.x, p2.pos.y,
                p3.pos.x, p3.pos.y
                );
            }
          }
        }
        p5.mouseMoved = function () {
          allParticles.push(new Particle(p5.mouseX, p5.mouseY, maxLevel));
          p5._renderer && p5.clear()
        }
      }

      // function p5.mouseDragged() {
      // some sort of mouse drag effect
      //   allParticles.push(new Particle(mouseX, mouseY, maxLevel));
      // }
      // p5.touchStarted = function () {
      //   allParticles.push(new Particle(p5.mouseX, p5.mouseY, maxLevel));
      //   p5.clear()
      // }
      // p5.touchMoved = function () {
      //   allParticles.push(new Particle(p5.mouseX, p5.mouseY, maxLevel));
      //   p5.clear()
      // }
    }
    
    if( document.getElementById( domElement ) ){
      new _p5( sketch, domElement )
    }
    
  }

  function removeCanvas() {
    let canvas = document.getElementById( domElement )
    let child = canvas.childNodes
    child[0] && canvas.removeChild( child[0] )
  }  

  init()
  
  return null
}

/**
 * 
    Adapted for React by Hamada ( https://hamdada.me )

    ----

    Original author notes:
    
    Author: Jason Labbe
    Site: jasonlabbe3d.com
    Reference: https://www.openprocessing.org/sketch/413567/
    Inspired by: Makio135's sketch www.openprocessing.org/sketch/385808

    Uses Delaunay Algorithm to create crystal-like shapes.
    I did NOT develop delaunay.js, and not sure who the author really is to give proper credit.

 */
