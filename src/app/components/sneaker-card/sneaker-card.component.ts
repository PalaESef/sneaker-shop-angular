import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sneaker } from '../../models/sneaker.model';

@Component({
  selector: 'app-sneaker-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sneaker-card.component.html',
  styleUrls: ['./sneaker-card.component.scss']
})
export class SneakerCardComponent {
  @Input() sneaker!: Sneaker;
  @Output() orderNow = new EventEmitter<string>();

  onOrderNow() {
    this.orderNow.emit(this.sneaker.name);
  }
}
