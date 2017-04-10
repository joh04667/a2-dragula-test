import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {

  @Input() title;
  @Input() message;
  
  constructor() { }

  ngOnInit() {
  }

}
