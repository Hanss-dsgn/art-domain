import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { GalleryComponent } from './pages/gallery/gallery';
import { CategoriesComponent } from './pages/categories/categories';
import { PaintingsComponent } from './pages/paintings/paintings';
import { SculpturesComponent } from './pages/sculptures/sculptures';
import { PhotographyComponent } from './pages/photography/photography';
import { DigitalArtComponent } from './pages/digital-art/digital-art';
import { ArtistComponent } from './pages/artist/artist';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { AboutComponent } from './pages/about/about';
import { DrawingsComponent } from './pages/drawings/drawings';
import { IllustrationsComponent } from './pages/illustrations/illustrations';
import { HelpComponent} from './pages/help/help';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'paintings', component: PaintingsComponent },
  { path: 'sculptures', component: SculpturesComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'digital-art', component: DigitalArtComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'drawings', component: DrawingsComponent },
  { path: 'illustrations', component: IllustrationsComponent },
  { path: 'help', component: HelpComponent }
];