import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
@HostBinding('style.text-transform') textTransform?: string;

@HostListener('mouseenter') onMouseEnter(){
  console.log('mouse enter');
  this.textTransform = 'uppercase';
}

@HostListener('mouseleave') onMouseLeave(){
  console.log('mouse leaves');
  this.textTransform = undefined;
  
}

}
