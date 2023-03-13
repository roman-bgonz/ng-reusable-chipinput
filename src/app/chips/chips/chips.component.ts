import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  @Input() items: string[] = []
  @Input() placeholder: string = "Type..."
  @Input() removable: boolean = true

}
