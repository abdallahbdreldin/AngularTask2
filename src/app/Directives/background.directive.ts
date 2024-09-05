import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @HostBinding('style.backgroundColor') backgroundColor : string

  @Input() coloredColor : string;
  @Input() basicColor : string ;

  constructor() { }
  
  @HostListener('mouseover') mouseOver(eventData : Event){
    this.backgroundColor = this.coloredColor
  }
  
  @HostListener('mouseleave') mouseLeave(eventData : Event){
    this.backgroundColor = this.basicColor
  }

}
