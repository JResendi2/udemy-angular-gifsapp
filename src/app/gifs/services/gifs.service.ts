import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _gifList: Gif[] = [];
  private _tagHistory: string[] = [];

  private API_KEY = "pgPXEwnQ8EvAInWc7xHZck9He0wo8d5D";
  private URL_BASE = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

  get tagHistory(){
    return [...this._tagHistory];
  }

  get gifList(){
    return this._gifList;
  }

  searchTag(tag:string): void{
    if(tag.trim().length === 0) return;

    // eliminar duplicados
    tag = tag.toLocaleLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagHistory.unshift(tag.trim());

    // limitar a solo 10 busquedas
    this._tagHistory = this._tagHistory.slice(0, 10);


    // hacer la busqueda en la api
    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('limit', 10)
    .set('q', tag);

    this.http.get<SearchResponse>(`${this.URL_BASE}/search`, {params}).subscribe(resp => {
      this._gifList = resp.data;
    })

  }
}
