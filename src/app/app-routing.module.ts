import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

/* tslint:disable */ 
const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { 
    path: 'student-register/:action/:id', 
    loadChildren: './pages/student-register/student-register.module#StudentRegisterPageModule',
    canLoad: [AuthGuard] 
  },
  { 
    path: 'contact', 
    loadChildren: './pages/contact-us/contact-us.module#ContactUsPageModule' 
  },
  { 
    path: 'about-us', 
    loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' 
  },
  { 
    path: 'cms/:action', 
    loadChildren: './pages/cms/cms.module#CmsPageModule' 
  },
    { 
      path: 'service',
      loadChildren: './pages/service/service.module#ServicePageModule' 
    },
    { 
      path: 'news-details/:id', 
      loadChildren: './pages/news-details/news-details.module#NewsDetailsPageModule',

    },
    { 
      path: 'resources', 
      loadChildren: './pages/resources/resources.module#ResourcesPageModule' 
    },
    { 
      path: 'details/:action/:id', 
      loadChildren: './pages/details/details.module#DetailsPageModule' 
    },
    { 
      path: 'our-process', 
      loadChildren: './pages/our-process/our-process.module#OurProcessPageModule' 
    },
    {
      path: '**',   // redirects all other routes to the main page
      redirectTo: 'home'
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }