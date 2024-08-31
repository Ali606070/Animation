import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  @Input('title') title: any;
  isExpanded: any;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
