import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatahubComponent } from './datahub/datahub.component';

const routes: Routes = [
  { path: 'datahub', component: DatahubComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
