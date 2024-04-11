import { Component, OnChanges, OnInit, SimpleChanges, computed, signal } from '@angular/core';
import { emitbo } from './pages.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {

  collapsed =signal(false);
  sidenavwidth =computed( ()=> this.collapsed()? '4rem': '14rem');
  ngOnInit(): void {}

  EmitFromHeaderComponent(event: emitbo) {
    document.getElementById('toggleclick')?.click();
  }
}
