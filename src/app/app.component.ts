import { Component, signal, ViewChild } from '@angular/core';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SneakerListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedSneaker = signal<string | null>(null);

  @ViewChild('sneakerList') sneakerListComponent!: SneakerListComponent;

  constructor(private router: Router) {}

  get isHomeRoute(): boolean {
    return this.router.url === '/';
  }

  updateSelectedSneaker(name: string) {
    this.selectedSneaker.set(name);
  }

  onShopNow() {
    if (this.sneakerListComponent) {
      this.sneakerListComponent.scrollToList();
    } else {
      console.error('SneakerListComponent not available');
    }
  }
}
