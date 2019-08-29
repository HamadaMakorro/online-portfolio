let params = {
  fontSize: 0,
  changeFont: () => 'something here goes',

  particleSize: 0,
  particleCount: 0,
  toggleWalls: true,
  useSpriteAsParticle: (  ) => 'something here goes',

  multiplyForce: { x: 0, y: 0 }, // use as a multiplier
  changeTimeScale: 0,

  backgroundColor: 0,
  backgroundOpacity: 0,
  backgroundShader: {},

  spotlightColor: 0,
  spotlightSize: 0,
  spotlightIntensity: 0,
}

let gui = new dat.GUI();

fonts = gui.addFolder( "Font" );
  fonts.add( params, "fontSize", 1.0, 500.0, 10.0 ).name( "shininess" ).onChange( render );
  fonts.add( params, "changeFont", 1.0, 500.0, 10.0 ).name( "shininess" ).onChange( render );

particles = gui.addFolder( "Particles" );
  particles.add( params, "particleSize", 1.0, 50.0, 1.0 ).name( "shininess" ).onChange( render );
  particles.add( params, "particleCount", 1.0, 100.0, 5.0 ).name( "shininess" ).onChange( render ) 
  particles.add( params, "toggleWalls", 0.0, 1.0, 0.025 ).name( "lightness" ).onChange( render );
  particles.add( params, "useSpriteAsParticle", 0.0, 1.0, 0.025 ).name( "lightness" ).onChange( render );

force = gui.addFolder( "Force" );
  force.add( params, "multiplyForce", -10.0, 10.0, 10.0 ).name( "shininess" ).onChange( render );
  force.add( params, "changeTimeScale", 0.0, 10.0, 0.5 ).name( "shininess" ).onChange( render );

background = gui.addFolder( "Background" );
  background.add( params, "backgroundColor", - 1.0, 1.0, 0.025 ).name( "x" ).onChange( render );
  background.add( params, "backgroundOpacity", - 1.0, 1.0, 0.025 ).name( "y" ).onChange( render );
  background.add( params, "backgroundShader", - 1.0, 1.0, 0.025 ).name( "z" ).onChange( render );

light = gui.addFolder( "Spotlight" );
  light.add( params, "spotlightColor", - 1.0, 1.0, 0.025 ).name( "x" ).onChange( render );
  light.add( params, "spotlightSize", - 1.0, 1.0, 0.025 ).name( "y" ).onChange( render );
  light.add( params, "spotlightIntensity", - 1.0, 1.0, 0.025 ).name( "z" ).onChange( render );



