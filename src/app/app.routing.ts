import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'Services',
        loadChildren: './services/services.module#servicesModule'
      },
      {
        path: 'SubServices/:serviceId',
        loadChildren: './add-subservices/add-subservices.module#subServiceListModule'
      },
      {
        path: 'AddServices/:serviceId',
        loadChildren: './add-services/add-services.module#categoryListModule'
      },
      {
        path: 'ListRequests/:page',
        loadChildren: './list-requests/list-requests.module#ListRequestsModule'
      },
      {
        path: 'PostRequest/:requestId',
        loadChildren: './post-request/post-request.module#postRequestModule'
      },
      {
        path: 'UsersList/:page',
        loadChildren: './userslist/userslist.module#vendorsListModule'
      },
      {
        path: 'UserFeedback/:page',
        loadChildren: './customerservice/customerservice.module#customerserviceModule'
      },
      {
        path: 'SpareParts/:page',
        loadChildren: './spareparts/spareparts.module#sparepartsModule'
      },
      {
        path: 'AddMechanics',
        loadChildren: './mechanics/mechanics.module#mechanicsAddModule'
      },
      {
        path: 'Details',
        loadChildren: './Details/Details.module#DetailsModule'
      },
      {
        path: 'Pincode/:page',
        loadChildren: './pincode/pincode.module#pincodeListModule'
      },
      {
        path: 'Settings',
        loadChildren: './settings/settings.module#settingsModule'
      },
      {
        path: 'Extras',
        loadChildren: './extras/extras.module#extrasModule'
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
