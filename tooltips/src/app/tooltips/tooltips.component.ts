import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent implements OnInit {
  showToolTip: boolean = false
  @Input() toolTipMsg: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  openToolTip(){
    if(this.showToolTip){
      this.showToolTip=false;
      return;
    }
    this.showToolTip = true
  }

  closeToolTip(e: any){
    e.preventDefault
    this.showToolTip = false
  }

}
