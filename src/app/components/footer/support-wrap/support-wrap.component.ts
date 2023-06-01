import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-support-wrap',
  templateUrl: './support-wrap.component.html',
  styleUrls: ['./support-wrap.component.scss']
})
export class SupportWrapComponent implements OnInit {
  isIcasino: boolean = environment.isIcasino;
  siteName = environment.siteName;
  whatsapp = environment.whatsapp;
  whatsapp1 = environment.whatsapp1;
  whatsapp2 = environment.whatsapp2;
  whatsapp3 = environment.whatsapp3;
  fullSiteName = window.location.hostname.replace('www.', '');
  isNayaLudisNet: boolean = environment.isNayaLudisNet;
  isNayaLudisSite: boolean = environment.isNayaLudisSite;
  
  
  supportOpen: string = "whatsapp";
  
  constructor() { }

  ngOnInit(): void {
  }

  openSupport(supportOpen) {
    this.supportOpen = supportOpen;
  }

}

