import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  showInput = false;
  timerStarted = false;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  displayTime: string = '00:00:00';
  progressStroke: number = 282.6;
  remainingSeconds: number = 0;
  originalSeconds: number = 0;
  interval: any;

  toggleInput() {
    this.showInput = !this.showInput;
  }

  startTimer() {
    this.remainingSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
    if (this.remainingSeconds <= 0) return;

    this.originalSeconds = this.remainingSeconds;
    this.timerStarted = true;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateDisplay();

      if (this.remainingSeconds <= 0) {
        clearInterval(this.interval);
        const audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
        audio.play();
        this.timerStarted = false;
        this.showInput = false;
      }
    }, 1000);

    this.updateDisplay();
  }

  updateDisplay() {
    const h = Math.floor(this.remainingSeconds / 3600);
    const m = Math.floor((this.remainingSeconds % 3600) / 60);
    const s = this.remainingSeconds % 60;

    this.displayTime = `${this.pad(h)}:${this.pad(m)}:${this.pad(s)}`;
    this.progressStroke = 282.6 * (this.remainingSeconds / this.originalSeconds);
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}







