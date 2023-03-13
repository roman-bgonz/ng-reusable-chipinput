import {
  Component,
  forwardRef,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {
  items: string[] = [];
  @Input() placeholder: string = 'Type...';
  @Input() removable: boolean = true;

  @ViewChild('inputField') inputField: any;

  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor(private cd: ChangeDetectorRef) {}

  onChipBarClick = (): void => {
    this.inputField.nativeElement.focus();
  };

  removeItem = (index: number): void => {
    this.items.splice(index, 1);
    this.triggerChange(); // call trigger method
  };

  removeAll = () => {
    this.items = [];
    this.inputField.nativeElement.focus();
    this.triggerChange(); // call trigger method
  };

  onKeyDown = (event: any, value: string): void => {
    switch (event.keyCode) {
      case 13:
      case 188: {
        if (value && value.trim() !== '') {
          if (!this.items.includes(value)) {
            this.items = [...this.items, value];
            this.triggerChange(); // call trigger method
          }

          this.inputField.nativeElement.value = '';
          event.preventDefault();
        }
        break;
      }
      case 8: {
        if (!value && this.items.length > 0) {
          this.items.pop();
          this.items = [...this.items];
          this.triggerChange(); // call trigger method
        }
        break;
      }
      default:
        break;
    }
  };

  writeValue(value: any): void {
    this.items = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  triggerChange() {
    this.onChange(this.items);
  }
}
