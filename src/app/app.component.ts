import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterState } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MainService } from './services/main.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  siteName = environment.siteName;
  intervalSub;
  click_id = ''
  aff_id=''
  offer_id =''

  constructor(
    public router: Router,
    private mainService: MainService,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private tokenService: TokenService
  ) {
      // this.handleRouteEvents();
    
    if (this.siteName == "exch1") {
      let siteName = "exchange 1";
      this.titleService.setTitle(siteName.toUpperCase());
    } else if (this.siteName == "nayaludis") {
      let siteName = "9WICKETS";
      this.titleService.setTitle(siteName.toUpperCase());
    } else {
      this.titleService.setTitle(this.siteName.toUpperCase());
    }
    // this.titleService.setTitle(this.siteName.toUpperCase());

    let favicon = this.document.querySelector('#appIcon') as HTMLLinkElement;
    favicon.href = "assets/images/" + this.siteName + "/favicon.ico";
    // this.loadStyle('assets/theme/' + this.siteName + '.css');
    let bodytag = document.getElementsByTagName("BODY")[0];
    bodytag.classList.add(this.siteName);


    this.getAllApi(null);

    this.intervalSub = setInterval(() => {
      this.getAllApi('data')
    }, 60000)
  }

  getAllApi(data) {
    this.mainService.getApis().subscribe((res: any) => {

      this.mainService.apis2$.next(res);
      if (!data) {
        this.mainService.apis$.next(data);
      }
    });
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }
  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href
        })
      }
    });
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }
  ngOnInit() {
    // if(this.siteName=='dreamcric'){
    //   const queryParams = new URLSearchParams(window.location.search);
    //   console.log('62'+queryParams)
    //   this.click_id = queryParams.get('aff_click_id');
    //     this.aff_id = queryParams.get('source');
    //     this.offer_id = queryParams.get('offer_id');
    //     if(this.click_id!=null){
    //       console.log(this.click_id)
    //       if(this.click_id!=null || this.click_id !=''){
    //         this.tokenService.setOfferId(this.offer_id);
    //         this.tokenService.setClickID(this.click_id);
    //         this.tokenService.setAffId(this.aff_id);
    //       }
    //     }
    // }
  }
  
  ngOnDestroy(): void {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

 
}
