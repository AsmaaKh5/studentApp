import { Routes } from '@angular/router';
import { Home }     from './components/home/home';
import { About }    from './components/about/about';
import { Contact }  from './components/contact/contact';
import { Order }    from './components/order/order';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
 
    { path: '',        redirectTo: 'home', pathMatch: 'full' },

   
  { path: 'home',    component: Home    },
  { path: 'about',   component: About   },
  { path: 'contact', component: Contact },
  { path: 'courses', component: Order   },

 
  { path: '**',      component: NotFound }
];