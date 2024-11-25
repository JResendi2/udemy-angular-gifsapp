import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../components/search-box/search-box/search-box.component';
import { CardListComponent } from '../../../components/card-list/card-list/card-list.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
