// wie app.module.ts
// hier Komponenten registrieren

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component'; //wichtig!!!
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FriendsboxComponent } from './friendsbox/friendsbox.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    AppComponent,
    HeaderComponent,
    CardComponent,
    FriendsboxComponent,
  ],
};
