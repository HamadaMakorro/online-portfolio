export default `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

#define speed 0.3
#define freq 0.8
#define amp 0.9
#define phase 0.5


void main( void ) {

	vec2 p = ( gl_FragCoord.xy / u_resolution.xy );
	
	float sx = (amp)*1.9 * sin( 4.0 * (freq) * (p.x-phase) - 6.0 * (speed)*u_time);
	
	float dy = 43./ ( 60. * abs(4.9*p.y - sx - 1.2));
	
	//dy += 1./ (60. * length(p - vec2(p.x, 0.)));
	
	gl_FragColor = vec4( (p.x + 0.05) * dy, 0.2 * dy, dy, 2.0 );

}
`