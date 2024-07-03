import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  // @ContentChild('para1') para1Ele: ElementRef;

  // ngAfterViewInit(){
  // console.log(this.para1Ele.nativeElement.innerText);
  // }

  ngOnInit(): void {
  }

}
