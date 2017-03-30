import {Component, OnInit} from '@angular/core';
import { Hero } from './hero'
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
`,
  styleUrls: ['./../assets/hero.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of heros';
  heroes : Hero[];
  selectedHero : Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void { this.getHeroes(); }

  getHeroes(): void { this.heroService.getHeroes().then(heroes => this.heroes = heroes ); }


  onSelect(hero: Hero) : void { console.log('onSelect'); this.selectedHero = hero;  };

}
