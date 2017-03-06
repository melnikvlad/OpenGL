#version 330 core
//in vec3 ourColor;
in vec2 TexCoord6;

out vec4 color;

// Texture samplers
uniform sampler2D ourTexture1;
//uniform sampler2D ourTexture2;

void main()
{
	color = texture(ourTexture1,TexCoord6);
	//color = mix(texture(ourTexture1, TexCoord), texture(ourTexture2, TexCoord), 0.2);
}