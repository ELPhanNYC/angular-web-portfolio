import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1.5s', style({ opacity: 1 }))
  ]),
]);

export const cascadeFade1 = trigger('cascade1', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('2.5s', style({ opacity: 1 }))
  ]),
]);

export const cascadeFade2 = trigger('cascade2', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('3.5s', style({ opacity: 1 }))
  ]),
]);

export const cascadeFade3 = trigger('cascade3', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('4.5s', style({ opacity: 1 }))
  ]),
]);

export const cascadeFade4 = trigger('cascade4', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('5.5s', style({ opacity: 1 }))
  ]),
]);

