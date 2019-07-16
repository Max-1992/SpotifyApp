import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  public busquedaArtist: any[];

  constructor( private spotify: SpotifyService ) { }

  buscar(artist:string){

    console.log( artist );
  
    this.spotify.getArtis( artist )
                .subscribe( ( dato:any ) => {
                  console.log( dato.artists.items );
                  this.busquedaArtist = dato.artists.items;
                })
    
  }
  
}
