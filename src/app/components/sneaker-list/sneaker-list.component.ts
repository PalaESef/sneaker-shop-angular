// src/app/components/sneaker-list/sneaker-list.component.ts
import { Component, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SneakerService } from '../../services/sneaker.service';
import { SneakerCardComponent } from '../sneaker-card/sneaker-card.component';
import { SearchService } from '../../services/search.service';
import { Sneaker } from '../../models/sneaker.model';


@Component({
  selector: 'app-sneaker-list',
  standalone: true,
  imports: [CommonModule, FormsModule, SneakerCardComponent],
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.scss']
})
export class SneakerListComponent {
  private sneakerService = inject(SneakerService);
  private searchService = inject(SearchService);

  selectedSneaker = signal<string | null>(null);

  @ViewChild('sneakerList') sneakerListRef!: ElementRef<HTMLDivElement>;

  get filteredSneakers(): Sneaker[] {
    const allSneakers = this.sneakerService.getSneakers()();
    const searchValue = this.searchService.search$.value.toLowerCase();
    return allSneakers.filter(s => s.name.toLowerCase().includes(searchValue));
  }

  onOrder(name: string) {
    this.selectedSneaker.set(name);
  }

  scrollToList() {
    console.log('scrollToList called');
    this.sneakerListRef?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
