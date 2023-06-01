import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CasinoApiService } from 'src/app/services/casino-api.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sn-casino',
  templateUrl: './sn-casino.component.html',
  styleUrls: ['./sn-casino.component.scss']
})
export class SnCasinoComponent implements OnInit {
  supernowaUrl:SafeResourceUrl;
  gameCode:string;
  providerCode:string;
  token:string;
 
  constructor(private tokenService: TokenService, private sanitizer: DomSanitizer, private route: ActivatedRoute,private apiService: CasinoApiService,) { 
    $('#page_loading').css('display', 'block');
  }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
    this.route.params.subscribe(params => {
      this.gameCode = params.gameCode;
      this.providerCode = params.providerCode;
      let authData= {"token":this.token,"gameCode":this.gameCode,"providerCode":this.providerCode,"backUrl":"https://"+environment.domain}
      this.apiService.supernowaAuth(authData).subscribe((resp: any)=>{
        // console.log(resp);
        if (!resp) {
          alert('Games Under Maintenance');
        }
        if(resp.status.code == "SUCCESS"){
          this.supernowaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(resp.launchURL);
        }
        $('#page_loading').css('display', 'none');
      })
    })
  }


}
