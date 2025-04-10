import { Component, signal } from '@angular/core';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SneakerListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedSneaker = signal<string | null>(null);

  updateSelectedSneaker(name: string) {
    this.selectedSneaker.set(name);
  }
}
