import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGF0dGlpIiwiYSI6ImNqZWZ4eWM3NTI2cGszM2xpYXEyZndpd3IifQ.ifzbR45HecVGxChbdR2hiw';

export default class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/tattii/cjq1bfwal3vc92rs01s7npew2',
      center: [130.8537, 31.9288],
      zoom: 10,
      hash: true
    });

    this.map.on('load', () => {
      this.map.addSource('gsi-dem', {
        "type": "raster-dem",
        "encoding": "gsi",
        "tiles": [
			    "https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png"
        ],
        "tileSize": 256,
	    	"maxzoom": 14,
		    "attribution": '<a href="https://maps.gsi.go.jp/development/ichiran.html#dem" target="_blank">地理院標高タイル</a>'
      });
      this.map.addLayer({
        "id": "relief",
        "source": "gsi-dem",
        "type": "relief",
        "paint": {
          "relief-opacity": 0.7,
          "relief-gradation": true,
          "relief-colors": [
            0, "#2db4b4",
            100, "#71b42d",
            300, "#b4a72d",
            1000, "#b4562d",
            2000, "#b4491b",
            4000, "#b43d09",
            null, "#b43d09"
          ]
        }
      }, 'waterway-river-canal-shadow');
      this.map.addLayer({
        "id": "GSI dem",
        "source": "gsi-dem",
        "type": "hillshade",
      }, 'relief');
    });
  }


  render() {
    return (
      <div ref={el => this.mapContainer = el} id="map" />
    );
  }
}
