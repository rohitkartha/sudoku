import Tile from './Tile';
import './App.css';

function Grid() {
    const tiles = []; 

    for(var x=0;x<81;x+=1){
        tiles.push(<Tile num={x}/>);
    }

    return (
    <div className="Grid">
        {tiles}
    </div>
    )
}
    



  


export default Grid; 