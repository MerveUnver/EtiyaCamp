import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfNot]'
})
export class IfNotDirective {
  //Structual Directive
  //İlgili elemanın yapısını ele alır
  @Input('ngIfNotElse') elseTemplateRef!: TemplateRef<any>;

  private hasView:boolean = false;

  constructor(private viewContainerRef:ViewContainerRef, //directive uyguladığımız element
    private templateRef:TemplateRef<any> //directive uyguladığımız elemntin içindeki 
    ) { }

  @Input() set ngIfNot(condition:boolean){
    if(condition === false && !this.hasView){
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }else if(condition === true && this.hasView){
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.elseTemplateRef);
      this.hasView =false;
    }
  }

}