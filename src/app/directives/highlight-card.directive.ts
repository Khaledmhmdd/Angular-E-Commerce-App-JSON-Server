import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone :true,  
})
export class HighlightCardDirective implements OnChanges {

  @Input() externalColor:string="black";
  @Input('appHighlightCard') defaultColor:string="orange";

  constructor(private ele:ElementRef) {

   // ele.nativeElement.style.background =this.defaultColor;
  }
  ngOnChanges(changes: SimpleChanges): void {
  this.ele.nativeElement.style.background =this.defaultColor;

  }

   @HostListener('mouseover') over(){
    this.ele.nativeElement.style.background =this.externalColor;
   }
   @HostListener('mouseout') out(){
    this.ele.nativeElement.style.background =this.defaultColor;
   }

}
