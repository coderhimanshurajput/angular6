import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight('red');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight('black');
  }
    
  
    private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}

