import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  standalone: true,
  imports: [],
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.scss'
})
export class GifCardComponent {

  @Input() gif!: Gif;


}
