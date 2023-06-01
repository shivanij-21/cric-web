import { Component, ElementRef, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CasinoApiService } from 'src/app/services/casino-api.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.scss']
})
export class SlotListComponent implements OnInit {


  @ViewChild('tab1', { read: ElementRef }) public tab: ElementRef<any>;
  slotlists: any;
  slotfilter: any;
  gameId: any;
  filterData: any[];
  slotfilters: any = "pragmatic";
  data: any[];
  loadrainbow: boolean = false;
  gameCode: any;
  accountInfo: any;
  slotUrl: string | URL;
  Update: any;

  constructor(private apiService: CasinoApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer,
    private tokenService: TokenService,private shareService: ShareDataService) {
    $('#page_loading').css('display', 'block');

  }
  // slotfilter = ["pragmatic", "amatic", "tomhorn", "novomatic_html5", "novomatic_deluxe", "novomatic_classic", "NetEnt", "habanero", "microgaming", "microgaming_html5", "igt", "igt_html5", "merkur", "egt", "aristocrat", "igrosoft", "fish", "live_dealers", "platipus", "scientific_games", "kajot", "ainsworth", "quickspin", "apollo", "fast_games", "habanero", "apex", "more_expensive", "wazdan", "netent_html5", "sport_betting",]
  // slotfilter = ["pragmatic", "amatic", "tomhorn", "novomatic_html5", "novomatic_deluxe", "NetEnt", "habanero", "microgaming", "microgaming_html5", "igt", "igt_html5", "merkur", "egt", "aristocrat", "igrosoft", "fish", "platipus", "scientific_games", "kajot", "ainsworth", "quickspin", "apollo", "fast_games", "habanero", "apex", "wazdan", "netent_html5",]

  ngOnInit(): void {
    this.getlanguages();
    this.accountInfo = this.tokenService.getUserInfo();
    this.route.params.subscribe(params => {
      this.gameId = params.gameId;
      console.log(this.gameId);

    })
    this.slotlist();
  }
  getlanguages() {
    this.shareService._lagugageSub$.subscribe(data => {
      if(data != null){
        this.Update = data
        }
      // console.log(this.Update);

    })
  }
  dosomething() {
    this.loadrainbow = true
  }
  opengame(o: any) {
    this.gameCode = o
    let data = {
      "userName": this.accountInfo.userName,
      "gameId": this.gameCode
    }
    console.log(data)
    this.apiService.openGames(data).subscribe((res: any) => {
      this.slotUrl = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(res.url));
      console.log(res.url)
      window.open(this.slotUrl, "_blank");
      $('#page_loading').css('display', 'none');
    })
  }
  slotlist() {
    this.apiService.slotlist().subscribe((resp: any) => {
      this.slotlists = resp.content.gameList;
      this.slotfilter = resp.content.gameLabels;

      this.slotfilter = this.slotfilter.filter((game) => {
        return !game.includes('live_dealers');
      });
      this.slotfilter = this.slotfilter.filter((game) => {
        return !game.includes('more_expensive');
      });
      if(this.accountInfo.currencyCode == 'INR'){
        this.slotfilter = this.slotfilter.filter((game) => {
          return !game.includes('altente');
        });
      }
      this.slotFilter('pragmatic')
      $('#page_loading').css('display', 'none');
    })
  }

  slotFilter(filter) {
    let filterData = []
    this.slotfilters = filter
    this.slotlists.forEach(element => {
      if (this.slotfilters == element.label) {
        filterData.push(element)
      }
    });
    this.data = filterData

  }

  public scrollRight(): void {
    this.tab.nativeElement.scrollTo({ left: (this.tab.nativeElement.scrollLeft + 200), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.tab.nativeElement.scrollTo({ left: (this.tab.nativeElement.scrollLeft - 200), behavior: 'smooth' });
  }


}
