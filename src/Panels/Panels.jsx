import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import './panels.css';

const Grid = WidthProvider(RGL);

const layouts = [
    {i: 'a', x: 0, y: 0, w: 1, h: 4, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 4, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 4}
  ];
  
  const getPanels = () => {
    const style = {
        backgroundColor: 'pink',
        color: 'white',
        border: '1px solid red',
        borderRadius: 5,
    };
    const panels = layouts.map( layout => <div key={layout.i} data-grid={layout} style={style} />);
    return panels;
}

const calculateMaxRows = () => {
    const heigt = document.documentElement.clientHeight;
    const rows = heigt/50; 
    // Check for very larg display
    const delta = rows > 50 ? 12 : 1; 
    const rowsCount = Math.trunc(rows) - delta;
    return rowsCount
}

const Panels = () => { 
    return (
        <Grid 
            compactType={null} 
            preventCollision={true} cols={12} 
            margin={[20, 10]} 
            maxRows={calculateMaxRows()} 
            rowHeight={50}>
            {getPanels()}
        </Grid>
    )
}

export default Panels;
