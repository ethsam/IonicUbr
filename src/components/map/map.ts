import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapDirective implements OnInit {

  public map;

  constructor() {
    
  }

  ngOnInit() {
    this.map = this.createMap();
  }

  createMap(location = new google.maps.LatLng(-21.1352849, 55.3872221)){
    let mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
    let mapEl = document.getElementById('map');
    let map = new google.maps.Map(mapEl, mapOptions);

    return map;
  }

}
