import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  @ViewChild('contact') public contact: ElementRef;
  @ViewChild('bio') public bio: ElementRef;
  @ViewChild('github') public github: ElementRef;
  @ViewChild('stackoverflow') public stackoverflow: ElementRef;


  public routes = [
    {
      route: 'bio',
      isActive: true,
      caption: 'Bio',
      icon: 'fa fa-info-circle'
    },
    {
      route: 'contact',
      isActive: false,
      caption: 'Contact',
      icon: 'fa fa-id-card'
    },
    {
      route: 'github',
      isActive: false,
      caption: 'Github',
      icon: 'fa fa-github'
    },
    {
      route: 'stackoverflow',
      isActive: false,
      caption: 'Stackoverflow',
      icon: 'fa fa-stack-overflow'
    }
  ];

  constructor(private router: Router) {

  }

  internalRoute(segmantName: string) {
    this.routes.forEach(element => {
      element.isActive = false;
    });
    this.routes.find(x => x.route === segmantName).isActive = true;

    switch (segmantName) {
      case 'contact':
        this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        break;
      case 'bio':
        this.bio.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        break;
      case 'github':
        this.github.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        break;
      case 'stackoverflow':
        this.stackoverflow.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        break;
      default:
        break;
    }

  }

  ngOnInit() {
  }

}
