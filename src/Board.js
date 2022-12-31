import Grid from './Grid';
import Tile from './Grid';
import './App.css';
import React from 'react';

class Board extends React.Component {
 
    
    render(){
        const tiles = []; 

        for(var x=0;x<81;x+=1){
            tiles.push(<Tile row={x}/>);
        }
        return (
            <Grid>
                {tiles}
            </Grid>
          );
    }
}

  


export default Board; 