import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
})
export class StopWatchComponent implements OnInit {
  minutes = 0;
  seconds = 0;
  isRunning:boolean= false;
  timer:any;
  constructor() {}

  ngOnInit(): void {}

  startTimer() {
    if(!this.isRunning){
      this.isRunning=true;
      this.timer= setInterval(()=>{
        this.seconds++;
        if(this.seconds==60){
         this.minutes++;
         this.seconds=0
        }
       },1000);
    }
   
  }
  stopTimer() {
    this.isRunning=false;
    clearInterval(this.timer);
  }

  resumeTimer() {
    if(!this.isRunning && (this.minutes>0 || this.seconds>0)){
      this.isRunning=true;
      this.timer= setInterval(()=>{
        this.seconds++;
        if(this.seconds==60){
         this.minutes++;
         this.seconds=0
        }
       },1000);
    }


  }

  resetTimer() {
    this.isRunning=false;
    clearInterval(this.timer);
    this.minutes=0;
    this.seconds=0;
  }
}
