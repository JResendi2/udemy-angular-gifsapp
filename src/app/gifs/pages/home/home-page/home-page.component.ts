import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../components/search-box/search-box/search-box.component';
import { CardListComponent } from '../../../components/card-list/card-list.component';
import { GifsService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/gifs.interfaces';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{

  constructor(private gifsService: GifsService){}

  get listGifs() {
     return this.gifsService.gifList;
  }

}
