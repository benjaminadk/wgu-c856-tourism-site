import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from "react-google-maps"

const MyMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -17.651, lng: -149.426 }}
    >
    </GoogleMap>
  )
})

export default class Map extends Component {
  render() {
    return (
      <MyMap
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />} 
      />
    )
  }
}