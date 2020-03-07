import { trigger, state, style, animate, transition } from '@angular/animations';

export function Fade(duration: number = 1000) {
  return trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  transition('void <=> *', animate(duration)),
]);
}

