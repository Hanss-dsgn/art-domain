import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetApiService } from '../../services/met-api.service';

@Component({
  selector: 'app-sculptures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sculptures.html',
  styleUrls: ['./sculptures.css']
})
export class SculpturesComponent implements OnInit {
  artworks: any[] = [];
  allIds: number[] = [];
  displayCount = 20;

 constructor(private metApi: MetApiService) {}

 ngOnInit() {
  this.metApi.searchSculptures().subscribe(res => {
    const ids = res.objectIDs.slice(0, 20);

    ids.forEach((id: number, index: number) => {
      setTimeout(() => {
        this.metApi.getArtwork(id).subscribe(art => {
          if (art.primaryImageSmall) {
            this.artworks.push(art);
          }
        });
      }, index * 500); // ✅ 0.5 sec gap
    });
  });
}
}