import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css'],
})
export class JoinusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.owl-carousel').owlCarousel({
      center: false,
      items: 5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
    });

    ///////////////////////////////
    ///////////////////////////////////
  }
}
