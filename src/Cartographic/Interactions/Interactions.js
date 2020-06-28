import Select from 'ol/interaction/Select';
import { SelectStyle } from '../../MapLayers/Styles/Styles';

const select = new Select({
    //style: SelectStyle
});

select.on('select', (e) => { console.log(e) });

export default select;