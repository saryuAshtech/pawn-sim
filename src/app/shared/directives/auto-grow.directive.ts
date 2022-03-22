import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  /* Attribute */ selector: '[autoGrow]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    style: 'width:250px;%',
    '(ionFocus)': 'onFocus()', // binding this focus to onFocusEvent
    '(ionBlur)': 'onBlur()', // binding this blur to onBlurEvent
  },
})
export class AutoGrowDirective {
  originalColor = '';
  // private keyword will create an el field and set it with incoming value
  // tslint:disable-next-line: variable-name
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  onFocus() {
    this._renderer.setStyle(
      this._el.nativeElement,
      'text-transform',
      'uppercase'
    );
    this.originalColor =
      this._el.nativeElement.style.backgroundColor || 'white';
    this._renderer.setStyle(
      this._el.nativeElement,
      'backgroundColor',
      'yellow'
    );
    this._renderer.setStyle(this._el.nativeElement, 'width', '400px');
  }

  onBlur() {
    this._renderer.setStyle(
      this._el.nativeElement,
      'backgroundColor',
      this.originalColor
    );
    this._renderer.setStyle(this._el.nativeElement, 'width', '380px');
  }
}
