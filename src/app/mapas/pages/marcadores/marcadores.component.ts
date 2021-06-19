import { ElementRef, AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
          width: 100%;
          height: 100%;
        }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [ -0.36042507119481876, 39.488717334091724 ];

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement ,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, // Longitud y latitud
      zoom: this.zoomLevel
    });

    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = "Hola";

    const marker = new mapboxgl.Marker({
      element: markerHtml
    })
      .setLngLat( this.center )
      .addTo( this.mapa );

  }

}
