import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LupaswordPage } from './lupasword.page';

const routes: Routes = [
  {
    path: '',
    component: LupaswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LupaswordPageRoutingModule {}
