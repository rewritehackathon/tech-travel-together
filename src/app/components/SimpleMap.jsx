import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components';

class SimpleMap extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
      travelData: null
    };
    this.fetchData = this.fetchData.bind(this);
	this.getRadius = this.getRadius.bind(this);
	this.getColor = this.getColor.bind(this);
	this.showToolip = this.showToolip.bind(this);
	
  }
getRadius(){
	let min = 65;
let max = 100;
// and the formula is:
let rad =  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rad + 'px');
	return rad + 'px';
}

showToolip(){
	const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 30px;
  background-color: grey;
  opacity:0.5;
  border: 2px solid blue;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => {
	  (props.onClick ? 'pointer' : 'default')}};
  &:hover {
    z-index: 1;
  }

`;

return <Wrapper/>;
}

getColor(){
	let min =1;
let max = 8;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
let level =  Math.floor(Math.random() * (max - min + 1)) + min;
	switch(level){
		case 1: 
		return '#FF0000'
		break;
		case 2: 
		return '#FF0000'
		break;
		case 3: 
		return '#FF0000'
		break;
		case 4: 
		return '#FFD700'
		break;
		case 5: 
		return '#FFD700'
		break;
		case 6: 
		return '#FFD700'
		break;
		case 7: 
		return '#228B22'
		break;
		case 8: 
		return '#228B22'
		break;
}
  }

  fetchData() {
    fetch("/data/getData")
	
      .then(response => {
        return response.json();
      })
      .then(json => {
		  
        this.setState({
          travelData: json.map((item) => {
			  item.color = this.getColor();
			  item.radius = this.getRadius();
			  return item
			  
		  })
        });
      });
  }

  componentWillMount() {
    this.fetchData();
  }
  static defaultProps = {
    center: {
      lat: 42.018452,
      lng: -74.307595
    },
    zoom: 11
  };
 
  render() {
	  const { travelData } = this.state;
	  if(!travelData){
		  return null;
	  }
	  console.log('travelData', travelData);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '520px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /*USE your API KEY*/
 }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
		  yesIWantToUseGoogleMapApiInternals
        >
		
		 
				  
				  {travelData.map((item, index) =>{
                    return <Marker
            lat={item.Latitude}
            lng={item.Longitude}
            text={'Hazard level'}
			color={item.color}
			radius={item.radius}
			onClick={this.showToolip}
			
          />
                  })}
				  	
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;