import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimationControlService {

  constructor() { }

  private animationActivatedSubject = new BehaviorSubject<boolean>(false);
  animationActivated$ = this.animationActivatedSubject.asObservable();

  activateAnimation() {
    this.animationActivatedSubject.next(true);
  }

  deactivateAnimation() {
    this.animationActivatedSubject.next(false);
  }

}
