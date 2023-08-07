import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService) {}

  searchTag( tag: string ): void {
    this.gifsService.searchTag(tag);
  }

  get tagHistory() {
    return this.gifsService.tagsHistory;
  }

}
