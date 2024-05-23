import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss']
})
export class MapDialogComponent implements OnInit {

  private map: L.Map | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([36.68, 10.14], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const startMarker = L.marker([36.68, 10.14]).addTo(this.map).bindPopup('starting point!').openPopup();
    const endMarker = L.marker([36.664839, 10.139351]).addTo(this.map).bindPopup('ending point!').openPopup();
    
    // const trail = L.polyline([
    //   [36.68, 10.14],
    //   [36.664839, 10.139351]
    // ], { color: 'blue' }).addTo(this.map);

    // Fit the map view to show both markers and the trail
    // this.map.fitBounds([startMarker.getLatLng(), endMarker.getLatLng(), trail.getLatLngs()]);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      alert('You clicked the map at ' + e.latlng);
    });
  }
}
