import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems = signal<Menu[]>([
    {
      id: 1,
      name: 'Home',
      route: '/home',
      icon: 'home',
      hasSubMenu: false,
    },
    {
      id: 2,
      name: 'About',
      route: '/about',
      icon: 'comments',
      hasSubMenu: false,
    },
    {
      id: 3,
      name: 'Help',
      route: '/help',
      icon: 'circle-info',
      hasSubMenu: false,
    },
    {
      id: 4,
      name: 'Contact',
      route: '/contact',
      icon: 'address-book',
      hasSubMenu: false,
    },
    {
      id: 5,
      name: 'Service',
      route: '/service',
      icon: '',
      hasSubMenu: false,
    },
    {
      id: 6,
      name: 'Payroll',
      route: '/payroll',
      icon: '',
      hasSubMenu: false,
    },
    {
      id: 7,
      name: 'To Do List',
      route: '/todolist',
      icon: 'repair',
      hasSubMenu: false,
    },
    {
      id: 8,
      name: 'Schedule',
      route: '/schedule',
      icon: '',
      hasSubMenu: false,
    },
    {
      id: 9,
      name: 'Settings',
      route: '/settings',
      icon: 'settings',
      hasSubMenu: false,
    },
  ]);
  label=false
  constructor() {}
  ngOnInit(): void {}
}
