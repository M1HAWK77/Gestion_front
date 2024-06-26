import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './components/index-page/index-page.component';
 import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [
  {path:'', component:IndexPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }