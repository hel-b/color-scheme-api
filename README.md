# Color Scheme API

This API generates color schemes from a single base color value. It accepts a
singular color value in hexadecimal format and returns each color scheme color
value in hexadecimal format.

**Link to project:** http://color-scheme-api.cyberalcove.com/

![demo video](/color-scheme-api.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express, color-convert, prism.js

The color-convert npm package takes incoming query values in hexadecimal format,
converts them into HSL values, and applies appropriate alterations in degrees to
the original hue value to populate color scheme color values. Those values are
then converted back hexadecimal before being sent back as a response.
