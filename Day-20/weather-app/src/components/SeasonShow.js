import React from 'react';

const getSeason = (lat,month) => {
    if(month > 2 && month <9){
        return lat>0 ? 'Summer' : 'Winter';
    }else{
        return lat>0 ? 'Winter' : 'Summer';
    }
}


const SeasonShow = ({lat,long}) => {
    const season = getSeason(lat, new Date().getMonth());
    const text = season === 'Summer' ? "It's quite hot" : "It's chilly";
    return ( 
        <div style={{backgroundColor: 'red'}}>
              <h1>{text} </h1>
        </div>
     );
}
 
export default SeasonShow;