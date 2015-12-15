# google-map-styles
Node app for translating Snazzy maps output into URL parameters

Steps to use:

1) Paste Snazzy Maps output as ```in.js```
```
[{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
```

2) Run app: ```node index.js```

3) Read output from ```out.js```
```
"feature:landscape|element:undefined|hue:0xFFBB00|saturation:43.400000000000006|lightness:37.599999999999994|gamma:1",
"feature:road.highway|element:undefined|hue:0xFFC200|saturation:-61.8|lightness:45.599999999999994|gamma:1",
"feature:road.arterial|element:undefined|hue:0xFF0300|saturation:-100|lightness:51.19999999999999|gamma:1",
"feature:road.local|element:undefined|hue:0xFF0300|saturation:-100|lightness:52|gamma:1",
"feature:water|element:undefined|hue:0x0078FF|saturation:-13.200000000000003|lightness:2.4000000000000057|gamma:1",
"feature:poi|element:undefined|hue:0x00FF6A|saturation:-1.0989010989011234|lightness:11.200000000000017|gamma:1",
```

4) Use output to help you create Google maps url
```
http://maps.googleapis.com/maps/api/staticmap?{params}
  &style=feature:landscape|element:undefined|hue:0xFFBB00|saturation:43.400000000000006|lightness:37.599999999999994|gamma:1
  &style=feature:road.highway|element:undefined|hue:0xFFC200|saturation:-61.8|lightness:45.599999999999994|gamma:1
  &style=feature:road.arterial|element:undefined|hue:0xFF0300|saturation:-100|lightness:51.19999999999999|gamma:1
  &style=feature:road.local|element:undefined|hue:0xFF0300|saturation:-100|lightness:52|gamma:1
  &style=feature:water|element:undefined|hue:0x0078FF|saturation:-13.200000000000003|lightness:2.4000000000000057|gamma:1
  &style=feature:poi|element:undefined|hue:0x00FF6A|saturation:-1.0989010989011234|lightness:11.200000000000017|gamma:1
```
