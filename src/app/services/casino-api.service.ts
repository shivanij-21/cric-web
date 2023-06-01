import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class CasinoApiService {
  private siteName = environment.siteName;
  private baseUrl: string;
  private casinoUrl: string;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private main: MainService) {
    main.apis2$.subscribe((res) => {
      this.baseUrl = res.ip;
      console.log(res.ip);
      
      this.casinoUrl = res.casApi;
    });
  }

  casinoRate(gtype: string) {
    let url = `${this.casinoUrl}/api/d_rate/${gtype}`;
    return this.http.get(url)
  }

  lastResult(gtype: string) {
    let url = `${this.casinoUrl}/api/l_result/${gtype}`;
    return this.http.get(url)

  }

  roundResult(gtype: string, roundId: number) {
    let url = `${this.casinoUrl}/api/r_result/${gtype}/${roundId}`;
    return this.http.get(url)

  }

  loadTable(casinoType) {
    return this.http.get(`${this.baseUrl}/loadTable/${casinoType}`);
  }

  placeTpBet(data: any) {
    return this.http.post(`${this.baseUrl}/TPplaceBets`, data
    );
  }

  listBooks(tableName: string, roundId: any, selectionId: any) {
    let url = `${this.baseUrl}/listBooks/${tableName}/${roundId}/${selectionId}`;
    return this.http.get(url)
  }
  supernowaAuth(params) {
    if(this.siteName == 'cricbuzzer'){
      return this.http.post(`https://sn.vrnl.net/pad=111/api/auth`, params);
    }else{
      return this.http.post(`https://sn.vrnl.net/pad=111/api/auth`, params);
    }
  }
  supernowaGameAssetsList(providerCode:string) {
    if(this.siteName == 'cricbuzzer'){
      return this.http.get(`https://sn.vrnl.net/pad=111/api/games/${providerCode}`);
    }else{
      return this.http.get(`https://sn.vrnl.net/pad=111/api/games/${providerCode}`);
    }
  }
  listProviders() {
    return this.http.get(`${this.baseUrl}/listProviders`);
  }
  slotlist(){
    return this.http.get(`https://slots.vrnl.net/pad=201/api/games`);
  }
  openGames(params){
    return this.http.post(`https://slots.vrnl.net/pad=201/api/openGame`, params);

  }

  pokerAuth(params){
    return this.http.post(`https://poker.vrnl.net/pad=300/api/auth`, params);
  }

  pokerQuit(params){
    return this.http.post(`https://poker.vrnl.net/pad=300/api/quit`, params);
  }
 awclist(){
    return this.http.get(`${this.baseUrl}/listAWCCasinoPlatforms`);
  }
  awcAuth(params){
    return this.http.post(`https://awc.vrnl.net/pad=500/api/auth`, params);
  }
  betgamesdata(data){
    return this.http.post(`https://betgames.cricbuzzer.io/pad=401/auth`, data);
  }
  
}
