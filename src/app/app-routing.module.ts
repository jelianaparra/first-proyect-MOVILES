import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'sesion',
    loadChildren: () =>
      import('./sesion/sesion.module').then((m) => m.SesionPageModule),
  },
  {
    path: 'yo',
    loadChildren: () => import('./yo/yo.module').then((m) => m.YOPageModule),
  },
  {
    path: 'miscomentarios',
    loadChildren: () =>
      import('./miscomentarios/miscomentarios.module').then(
        (m) => m.MiscomentariosPageModule
      ),
  },

  {
    path: 'clase-a',
    loadChildren: () =>
      import('./clase-a/clase-a.module').then((m) => m.ClaseAPageModule),
  },
  {
    path: 'clase-b',
    loadChildren: () =>
      import('./clase-b/clase-b.module').then((m) => m.ClaseBPageModule),
  },
  {
    path: 'clase-c',
    loadChildren: () =>
      import('./clase-c/clase-c.module').then((m) => m.ClaseCPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
