import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[];


  constructor( private router: Router ) { }

  verArtis( item:any ){

    let artistId:string;

    if ( item.type === 'album' ){
        artistId = item.artists[0].id
    } else {
        artistId =  item.id
    }

    this.router.navigate( [ '/artists', artistId ] );

  }

  ngOnInit() {
  }

}
