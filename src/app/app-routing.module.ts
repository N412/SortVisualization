import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleComponent } from './sorting/bubble/bubble.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bubble' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path:'bubble', component: BubbleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
