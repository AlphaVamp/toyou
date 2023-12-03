import { NgModule } from '@angular/core';
import { Session2Component } from './session2/session2.component';
import { Session3Component } from './session3/session3.component';
import { Session4Component } from './session4/session4.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'session2',
    component: Session2Component,
  },
  {
    path: 'session3',
    component: Session3Component,
  },
  {
    path: 'session4',
    component: Session4Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
