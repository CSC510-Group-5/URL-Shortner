import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUrlComponent } from './delete-url/delete-url.component';
import { InputLongUrlComponent } from './input-long-url/input-long-url.component';
import { NoPageComponentComponent } from './no-page-component/no-page-component.component';
import { UpdateUrlComponent } from './update-url/update-url.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: InputLongUrlComponent},
  { path: 'update', component: UpdateUrlComponent},
  { path: 'delete', component: DeleteUrlComponent},
  { path: '404', component: NoPageComponentComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
