import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){}

  get tags(){
    return this.gifsService.tagHistory;
  }

  searchTag(tag: string){
    this.gifsService.searchTag(tag);
  }

}
