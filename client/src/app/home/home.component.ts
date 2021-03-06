import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Observable, merge, of, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        zIndex: 1
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {


  public showFixedNav: boolean;
  public routes = [
    {
      route: 'about-me',
      isActive: true,
      caption: 'Me',
    },
    {
      route: 'aaa',
      isActive: false,
      caption: 'Work samples',
      children: [
        {
          route: 'samples/student',
          isActive: false,
          caption: 'Student - CRUD'
        },
        {
          route: 'samples/chat',
          isActive: false,
          caption: 'ChatBox - Web socket'
        },
        {
          route: 'samples/big-table',
          isActive: false,
          caption: 'Big table using firebase'
        },
      ]
    },
    {
      route: 'house',
      isActive: false,
      caption: 'House'
    },
    {
      route: '../admin',
      isActive: false,
      caption: 'Admin'
    }
  ];


  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window.pageYOffset > 0) {
      this.showFixedNav = true;
    } else {
      this.showFixedNav = false;
    }
  }

  constructor(private router: Router) {
    router.events.subscribe(e => {
      this.routes.forEach(x => {
        if (this.router.url.search(x.route) >= 0) {
          x.isActive = true;
        } else {
          x.isActive = false;
        }
      });
    });
  }

  ngOnInit() {
  }
}
