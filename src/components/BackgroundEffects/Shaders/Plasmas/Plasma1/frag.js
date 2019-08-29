
export default `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

#define N 6

void main( void ) {
	vec2 v=(gl_FragCoord.xy-(u_resolution*0.5))/min(u_resolution.y,u_resolution.x)*10.0;
	float t=u_time * 0.4,r=0.0;
	for (int i=0;i<N;i++){
		float d=(3.14159265 / float(N))*(float(i)*5.0);
		r+=length(vec2(v.x,v.y))+0.01;
		v = vec2(v.x+cos(v.y+cos(r)+d)+cos(t),v.y-sin(v.x+cos(r)+d)+sin(t));
	}
        r = (sin(r*0.1)*0.5)+0.5;
	r = pow(r, 128.0);
	gl_FragColor = vec4(r,pow(max(r-0.75,0.0)*4.0,2.0),pow(max(r-0.875,0.0)*8.0,4.0), 1.0 );
}
`