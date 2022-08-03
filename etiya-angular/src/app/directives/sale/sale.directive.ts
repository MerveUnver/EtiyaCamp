import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective {
@Input() onSaleColor:string = 'yellow';
 
constructor(private elementRef:ElementRef) { 
    this.changeColor("green")
  }
@HostListener('mouseenter') onMouseEnter(){
  this.changeColor(this.onSaleColor)
}

@HostListener('mouseleave') onMouseLeave(){
  this.changeColor("green")
}
changeColor(color:string){
  this.elementRef.nativeElement.style.backgroundColor=color;
}

}
