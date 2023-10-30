import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();
  onClick(){
    // When the button is clicked, emit an event to notify others
    this.btnClick.emit();
  }
 
}
