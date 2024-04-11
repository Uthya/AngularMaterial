import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
    {
      path:"service",
      loadChildren: () =>
        import("./pages/service/service.module").then(
          (m) => m.ServiceModule
        )
    },
    {
      path:"about",
      loadChildren: () =>
        import("./pages/about/about.module").then(
          (m) => m.AboutModule
        )
    },
    {
      path:"contact",
      loadChildren: () =>
        import("./pages/contact/contact.module").then(
          (m) => m.ContactModule
        )
    },
    {
      path:"home",
      loadChildren: () =>
        import("./pages/home/home.module").then(
          (m) => m.HomeModule
        )
    },
    {
      path:"help",
      loadChildren: () =>
        import("./pages/help/help.module").then(
          (m) => m.HelpModule
        )
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
