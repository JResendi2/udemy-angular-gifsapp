import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifCardComponent } from '../gif-card/gif-card.component';

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [GifCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  @Input() listGifs: Gif[] = [];

}
