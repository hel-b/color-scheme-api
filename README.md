# Color Scheme API

This API generates color schemes from a single base color value. It accepts a
singular color value in hexadecimal format and returns each color scheme color
value in hexadecimal format.

**Link to project:** http://color-scheme.cyberalcove.com

![demo video](/color-scheme-api.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express, color-convert, prism.js

The 'color-convert' npm package is utilized to convert hexadecimal color values
from incoming GET requests into HSL (hue, saturation, lightness) values. Hue
ranges from 0 to 360 degrees and traverses the color wheel. To assign colors for
each color scheme, the initial hue value is adjusted by the required number of
degrees. The HSL values for each color scheme are converted back to hexadecimal
format before being sent as a response.
