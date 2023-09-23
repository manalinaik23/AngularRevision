import { Directive, ElementRef,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private el: ElementRef) {
   
 }
 @Input()
 appHighlight='';

 @HostListener('mouseenter') onMouseEnter(){
  this.highlight(this.appHighlight);
 }

 @HostListener('mouseleave') onMouseLeave(){
  this.highlight("");
 }
 highlight(color:string){
  this.el.nativeElement.style.backgroundColor = color;
 }

}
