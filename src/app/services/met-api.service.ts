import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetApiService {
  constructor(private http: HttpClient) {}

  searchPaintings() {
    return this.http.get<any>(
      'https://collectionapi.metmuseum.org/public/collection/v1/search?q=painting&hasImages=true'
    );
  }

  searchSculptures() {
    return this.http.get<any>(
      'https://collectionapi.metmuseum.org/public/collection/v1/search?q=sculpture&hasImages=true'
    );
  }

  getArtwork(id: number) {
    return this.http.get<any>(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
  }
}