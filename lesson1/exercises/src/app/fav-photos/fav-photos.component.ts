import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images.pexels.com/photos/5246537/pexels-photo-5246537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  image3 = 'https://images.pexels.com/photos/5591890/pexels-photo-5591890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  image4 = 'https://i.pinimg.com/originals/79/39/df/7939df472d54342d3ed3f020f8d27c36.gif';

  constructor() { }

  ngOnInit() {
  }

}