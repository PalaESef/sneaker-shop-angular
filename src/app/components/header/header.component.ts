import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule,  RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() selectedSneaker: string | null = null;
  @Output() shopNowClick = new EventEmitter<void>();


  constructor(public searchService: SearchService) {}

  onShopNow() {
    this.shopNowClick.emit();
  }
}
