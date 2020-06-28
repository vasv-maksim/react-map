import React, { useState, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import MapLayers from '../MapLayers/MapLayers';
import select from './Interactions/Interactions';
import './ol.css';

const Cartographic = () => {

    const [center, setCenter] = useState([0, 0]);
    const [zoom, setZoom] = useState(3);

    const olmap = new Map({
        layers: MapLayers,
        view: new View({
            center,
            zoom,
            projection: 'EPSG:4326',
        })
    });

    useEffect(() => {
        olmap.setTarget('map'); 
        olmap.addInteraction(select);
  
    });
  
      return (
          <div className='mapWrapper'>
              <div id='map' className='map' />
          </div>
  );
}

export default Cartographic;