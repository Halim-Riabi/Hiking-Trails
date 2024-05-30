import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as L from 'leaflet';
@Component({
  selector: 'app-hiker-map-dialog',
  templateUrl: './hiker-map-dialog.component.html',
  styleUrls: ['./hiker-map-dialog.component.scss']
})
export class HikerMapDialogComponent implements OnInit{

  private map: L.Map | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { startLat: number, startLng: number, endLat: number, endLng: number }) {}


  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.data.startLat, this.data.startLng], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const blueIcon = L.icon({
      iconUrl: 'assets/blue-marker.svg',
      iconSize: [40, 40], // Adjust size if necessary
      iconAnchor: [12, 24], // Adjust anchor if necessary
      popupAnchor: [0, -24]
    });

    const startMarker = L.marker([this.data.startLat, this.data.startLng], { icon: blueIcon } ).addTo(this.map).bindPopup('starting point!').openPopup();

    const orangeIcon = L.icon({
      iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij4KICA8cGF0aCBmaWxsPSIjRkZBNTAwIiBkPSJNMTIgMkM4LjEgMiA1IDUuMSA1IDljMCA1LjMgNyAxMyA3IDEzczctNy43IDctMTNjMC0zLjktMy4xLTctNy03em0wIDkuNWMtMS40IDAtMi41LTEuMS0yLjUtMi41UzEwLjYgNi41IDEyIDYuNXMyLjUgMS4xIDIuNSAyLjUtMS4xIDIuNS0yLjUgMi41eiIvPgo8L3N2Zz4=',
      iconSize: [40, 40], // Adjust size if necessary
      iconAnchor: [12, 24], // Adjust anchor if necessary
      popupAnchor: [0, -24]
    });

    const endMarker = L.marker([this.data.endLat, this.data.endLng], { icon: orangeIcon } ).addTo(this.map).bindPopup('ending point!').openPopup();
    
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
