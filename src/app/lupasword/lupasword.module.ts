import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LupaswordPageRoutingModule } from './lupasword-routing.module';

import { LupaswordPage } from './lupasword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LupaswordPageRoutingModule
  ],
  declarations: [LupaswordPage]
})
export class LupaswordPageModule {}
