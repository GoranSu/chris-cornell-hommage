import { trigger, state, style, animate, transition } from '@angular/animations';

export function Fade(duration: number = 1000) {
  return trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  transition('void <=> *', animate(duration)),
]);
}

export let enterLeave = trigger('EnterLeave', [
  state('flyIn', style({ transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.5s 300ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
  ])
])

/* Example implementation
  <div (click)="changeBaloonState()"
    style="margin: 1rem;width:50px;height:50px; border-radius: 100%; background-color: green"
    [@balloonEffect]=baloonCurrentState>
  </div>

  TS
    baloonCurrentState = 'initial';
   changeBaloonState() {
    this.baloonCurrentState = this.baloonCurrentState === 'initial' ? 'final' : 'initial';
  }
*/
export let ballon = trigger('balloonEffect', [
  state('initial', style({
    backgroundColor: 'green',
    transform: 'scale(1)',
  })),
  state('final', style({
    backgroundColor: 'red',
    transform: 'scale(1.5)',
  })),
  transition('initial=>final', animate('0.5s')),
  transition('final=>initial', animate('0.1s'))
])

/* Example implementation
<div (click)="changeCubeState()"
      style="margin: 1rem;"
      [@changeDivSize]=cubeCurrentState>
</div>

TS
cubeCurrentState = 'initial';
changeCubeState() {
  this.cubeCurrentState = this.cubeCurrentState === 'initial' ? 'final' : 'initial';
}
*/
export let changeDivSize = trigger('changeDivSize', [
  state('initial', style({
    backgroundColor: 'green',
    width: '50px',
    height: '50px'
  })),
  state('final', style({
    backgroundColor: 'red',
    width: '100px',
    height: '100px'
})),
  transition('initial=>final', animate('0.5s')),
  transition('final=>initial', animate('0.1s'))
])
