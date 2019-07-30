import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') menuOpened: boolean = false;

  @HostListener('click') toggleOpen() {
    this.menuOpened = !this.menuOpened;
  }

}
