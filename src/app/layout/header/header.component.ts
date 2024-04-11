import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emitbo } from 'src/app/pages/pages.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
@Output() emitToSidebar = new EventEmitter<emitbo>();
checktoggle: boolean = false;
ngOnInit(): void {}

emitToggle() {
    this.emitToSidebar.emit({
      isToggle: !this.checktoggle,
    });
  }
}
