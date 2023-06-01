import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoListComponent } from './casino-list/casino-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CasinoGameComponent } from './casino-game/casino-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { LcasinoComponent } from './lcasino/lcasino.component';
import { IndianCasinoComponent } from './indian-casino/indian-casino.component';
import { InternationalCasinoComponent } from './international-casino/international-casino.component';
import { SupernowaCasinoComponent } from './supernowa-casino/supernowa-casino.component';
import { SlotListComponent } from './slot-list/slot-list.component';
import { SlotGameComponent } from './slot-game/slot-game.component';
import { BetgamesComponent } from './betgames/betgames.component';
import { TwainComponent } from './twain/twain.component';
import { AwclistComponent } from './awclist/awclist.component';
const routes: Routes = [
  {
    path: '',
    component: CasinoListComponent,
  },
  {
    path: 'tp/:tableId/:tableName/:gType',
    component: CasinoGameComponent,
  },
  {
    path: 'International-casino',
    component: InternationalCasinoComponent,
  },
  {
    path: 'Indian-casino',
    component: IndianCasinoComponent,
  },
  {
    path: 'supernowa-casino/:providerCode',
    component: SupernowaCasinoComponent,
  }

];

@NgModule({
  declarations: [
    CasinoListComponent,
    CasinoGameComponent,
    LcasinoComponent,
    IndianCasinoComponent,
    InternationalCasinoComponent,
    SupernowaCasinoComponent,
    SlotListComponent,
    SlotGameComponent,
    BetgamesComponent,
    TwainComponent,
    AwclistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  exports: [
    RouterModule
  ]
})
export class CasinoModule { }
