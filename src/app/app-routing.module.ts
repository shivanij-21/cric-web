import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACasinoComponent } from './casino/a-casino/a-casino.component';
import { LcasinoComponent } from './casino/lcasino/lcasino.component';
import { FullWrapComponent } from './components/full-wrap/full-wrap.component';
import { FullmarketsComponent } from './components/fullmarkets/fullmarkets.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { HomeComponent } from './components/home/home.component';
import { InplayComponent } from './components/inplay/inplay.component';
import { MultiMarketsComponent } from './components/multi-markets/multi-markets.component';
import { RacesComponent } from './components/races/races.component';
import { VirtualsComponent } from './components/virtuals/virtuals.component';
import { AuthGuard } from './services/auth.guard';
import { AuthMaintananceGuard } from './services/auth.maintainance.guard';
import { TokenComponent } from './token/token.component';
import { XGameComponent } from './x-game/x-game.component';
import { OtherGamesComponent } from './other-games/other-games.component';
import { SnCasinoComponent } from './casino/sn-casino/sn-casino.component';
import { BetgamesComponent } from './casino/betgames/betgames.component';
import { SlotListComponent } from './casino/slot-list/slot-list.component';
import { SlotGameComponent } from './casino/slot-game/slot-game.component';
import { PokerCasinoComponent } from './casino/poker-casino/poker-casino.component';
import { TwainComponent } from './casino/twain/twain.component';
import { AwclistComponent } from './casino/awclist/awclist.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'regulations',
    loadChildren: () => import('./regulations/regulations.module').then((m) => m.RegulationsModule)
  },
  {
    path: 'fancyBetBook',
    loadChildren: () => import('./fancy-book/fancy-book.module').then((m) => m.FancyBookModule),
    canActivate: [AuthMaintananceGuard],
  },
  {
    path: 'announcement',
    loadChildren: () => import('./announcement/announcement.module').then((m) => m.AnnouncementModule),
    canActivate: [AuthMaintananceGuard],
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance.module').then((m) => m.MaintenanceModule)

  },
  {
    path: '',
    component: FullWrapComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dash' },
      { path: 'dash', component: HomeComponent },
      { path: 'virtuals', component: VirtualsComponent },
      { path: 'running', component: InplayComponent },
      { path: 'sport', component: HighlightsComponent },
      { path: 'sport/:eventTypeId', component: HighlightsComponent },
      { path: 'races/:eventTypeId', component: RacesComponent },
      { path: 'fullmarkets', component: FullmarketsComponent },
      { path: 'fullmarkets/:eventId', component: FullmarketsComponent },
      { path: 'fullmarkets/:eventId/:marketId/:port', component: FullmarketsComponent },
      { path: 'multimarkets', component: MultiMarketsComponent },
      { path: 'token/:token', component: TokenComponent },
      { path: 'x-game', component: XGameComponent },
      { path: 'tpp/:opentable', component: ACasinoComponent},
      { path: 'sncasino/:providerCode/:gameCode', component: SnCasinoComponent },
      { path: 'slotgame/:gameId', component: SlotGameComponent},
      { path: 'pokercasino', component: PokerCasinoComponent},
      { path: 'awc', component: AwclistComponent},
      { path: 'lcasino', component: LcasinoComponent },
      { path: 'Other-Games', component: OtherGamesComponent },
      { path: 'betgames', component: BetgamesComponent},
      { path: 'twain', component: TwainComponent},
      { path: 'slot-list', component: SlotListComponent },
      {
        path: 'casino',
        loadChildren: () => import('./casino/casino.module').then((m) => m.CasinoModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'exchange',
        loadChildren: () => import('./exchange-games/exchange-games.module').then((m) => m.ExchangeGamesModule),
        canActivate: [AuthGuard]
      },
    ],
    canActivate: [AuthMaintananceGuard],
  },
  //Wild Card Route for 404 request
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then((m) => m.PagenotfoundModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
