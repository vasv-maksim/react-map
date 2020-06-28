import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { countryiesData } from './SpatialData/SpatialData';
import GeoJSON from 'ol/format/GeoJSON';
import styleFunction from './Styles/Styles';

const basemap = new TileLayer({
    source: new XYZ({
      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
  });


  const countries = new VectorLayer({
    style: styleFunction,
    source: new VectorSource({
        features: (new GeoJSON()).readFeatures(countryiesData)
    })
  });

const MapLayers = [
    basemap,
    countries,
  ]

export default MapLayers;