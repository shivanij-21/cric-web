import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasinoApiService } from 'src/app/services/casino-api.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-supernowa-casino',
  templateUrl: './supernowa-casino.component.html',
  styleUrls: ['./supernowa-casino.component.scss']
})
export class SupernowaCasinoComponent implements OnInit {
  SNcasinoList: any = [];
  providerList = [];
  providerCode:string="SN"
  
  @ViewChild('tab1', { read: ElementRef }) public tab: ElementRef<any>;
  loadrainbow: boolean=false;
  Update: any;

  constructor(private apiService: CasinoApiService,private route: ActivatedRoute,
    private shareService: ShareDataService) { 
    $('#page_loading').css('display', 'block');
  }

  ngOnInit(): void {
   this.getlanguages()
    this.listProviders();
    this.route.params.subscribe(params => {
      this.providerCode = params.providerCode;
      this.supernowaGameAssetsList(this.providerCode);
    })
    // this.SNcasinoList = [
    //   { "name": "Teen Patti", "providerCode": "SN", "code": "TP", "thumb": "Teen-Patti" },
    //   { "name": "Baccarat", "providerCode": "SN", "code": "BAC", "thumb": "Baccarat" },
    //   { "name": "Poker", "providerCode": "SN", "code": "PK", "thumb": "Poker" },
    //   { "name": "Worli Matka", "providerCode": "SN", "code": "WM", "thumb": "Worli-Matka" },
    //   { "name": "Akbar Romeo Walter", "providerCode": "SN", "code": "ARW", "thumb": "Akbar-Romeo-Walter" },
    //   { "name": "32 Cards", "providerCode": "SN", "code": "C32", "thumb": "Cards-32" },
    //   { "name": "Lucky 7", "providerCode": "SN", "code": "UD7", "thumb": "Lucky-7" },
    //   { "name": "King Race", "providerCode": "SN", "code": "CR", "thumb": "King-Race" },
    //   { "name": "3 Player Teen patti", "providerCode": "SN", "code": "D3TP", "thumb": "Player-Teen-Patti-3" },
    //   { "name": "Andar Bahar", "providerCode": "SN", "code": "ABC", "thumb": "Andar-Bahar" },
    //   { "name": "Roulette", "providerCode": "SN", "code": "RT", "thumb": "Roulette" },
    //   { "name": "Goa's Andar Bahar", "providerCode": "SN", "code": "AB2", "thumb": "Goas-Andar-Bahar" },
    //   { "name": "Dragon Tiger 2.0", "providerCode": "SN", "code": "DT7M", "thumb": "Dragon-Tiger" },
    //   { "name": "Teen patti face off", "providerCode": "SN", "code": "TPFO", "thumb": "Teen-Patti-Faceoff" },
    //   { "name": "Teen patti 2020", "providerCode": "SN", "code": "TP20", "thumb": "Teen-Patti-2020" },
    //   { "name": "Classic Andar Bahar", "providerCode": "SN", "code": "AB", "thumb": "Classic-Andar-Bahar" },
    //   { "name": "Muflis Teen patti", "providerCode": "SN", "code": "MTP7M", "thumb": "Muflis-Teen-Patti" },
    // ];
  }
  getlanguages() {
    this.shareService._lagugageSub$.subscribe(data => {
      if(data != null){
        this.Update = data
        }
      // console.log(this.Update);

    })
  }

  dosomething(){
    this.loadrainbow=true
  }
  supernowaGameAssetsList(providerCode){
    this.apiService.supernowaGameAssetsList(providerCode).subscribe((resp: any) => {
      console.log(resp);
      
      if (resp.status.code == "SUCCESS") {
        this.SNcasinoList = resp.games;
      }
      $('#page_loading').css('display', 'none');
    })
  }
  listProviders(){
    this.apiService.listProviders().subscribe((resp: any) => {
      console.log(resp.result);
      this.providerList = resp.result;
    })
  }
  public scrollRight(): void {
    this.tab.nativeElement.scrollTo({ left: (this.tab.nativeElement.scrollLeft + 200), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.tab.nativeElement.scrollTo({ left: (this.tab.nativeElement.scrollLeft - 200), behavior: 'smooth' });
  }

}
