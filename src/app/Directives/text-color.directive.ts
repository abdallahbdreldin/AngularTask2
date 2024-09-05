import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {


  @Input() mainColor : string;

  @HostBinding('style.color') textColor : string;
  constructor() {}

  @HostListener('mouseover') mouseOver(eventData : Event){
    this.textColor = this.mainColor
  }
  
  @HostListener('mouseleave') mouseLeave(EventData:Event){
    this.textColor = this.mainColor 
  }

}
