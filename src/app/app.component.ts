import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { FriendsboxComponent } from './friendsbox/friendsbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    ProposalsComponent,
    FriendsboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nameCollection = ['Bugs Bunny', 'Günther', 'Susanne', 'Herbert'];
  statusCollection = [
    'What’s up Doc?',
    'Howdy 🤠',
    'My best friend & me 💛',
    'I love Möhrchen 🥕',
  ];
  imageCollection = [
    './assets/img/Hase1.jpg',
    './assets/img/Hase2.jpg',
    './assets/img/Hase3.jpg',
    './assets/img/Hase4.jpg',
  ];
}
