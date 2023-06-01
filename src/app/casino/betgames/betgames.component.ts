import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CasinoApiService } from '../../services/casino-api.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-betgames',
  templateUrl: './betgames.component.html',
  styleUrls: ['./betgames.component.scss']
})
export class BetgamesComponent implements OnInit {
  accountInfo: any;
  Token: any;
  betgamesUrl: SafeResourceUrl;
  constructor(private casinoapiService: CasinoApiService,
    private sanitizer: DomSanitizer,
    private tokenService: TokenService,) { }

  ngOnInit(): void {
    this.accountInfo = this.tokenService.getUserInfo();
    this.betgamesdata();
   

  }
  betgamesdata() {
    let data = {
      "userName": this.accountInfo.userName,
    }
    this.casinoapiService.betgamesdata(data).subscribe((res: any) => {
      this.Token = res.token
      console.log(res.token)
      if(this.Token){
        let url=`https://webiframe.betgames.tv//#/auth?apiUrl=https://game3.betgames.tv/&partnerCode=lc247_co&partnerToken=${this.Token}&language=en&timezone=2`
        // let url = `https://integrations01-webiframe.betgames.tv//#/auth?apiUrl=https://integrations01.betgames.tv/&partnerCode=cricbuzzer_io_dev&partnerToken=${this.Token}&language=en&timezone=2`
        this.betgamesUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    })
  }


}
