import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompositionListComponent } from './composition-list/composition-list.component';

const routes: Routes = [
  {path: 'composition', component: CompositionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
