import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-promote-banner',
  templateUrl: './promote-banner.component.html',
  styleUrls: ['./promote-banner.component.scss']
})
export class PromoteBannerComponent implements OnInit,AfterViewInit {
  siteName = environment.siteName;
  isIcasino: boolean = environment.isIcasino;

  constructor() { }

  ngOnInit() {

 

  }

  ngAfterViewInit(): void {
    (<any>$('.promo-banner')).flexslider({
      start: function () {
        $(".promo-banner-wrap").addClass("active");
        $(".promo-banner").resize()
      },
      namespace: "promo-",
      animation: "slide",
      direction: "horizontal",
      slideshowSpeed: 4000,
      animationSpeed: 500,
      pauseOnHover: false,
      controlNav: true,
      directionNav: true,
      allowOneSlide: false,
      prevText: "",
      nextText: ""
    });
  }
}
