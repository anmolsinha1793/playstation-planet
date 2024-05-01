import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TypewriterService } from '../../../services/type-writer.service';
import { filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

const PlayStation_Planet = 'PlayStation Planet';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, AsyncPipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isHome = true;
  title: any = [PlayStation_Planet];
  constructor(private typeWriter: TypewriterService, private router: Router) {
    this.title = this.typeWriter
    .getTypewriterEffect(this.title)
    .pipe(map((text) => text));
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: any) => {  
      this.isHome = event.url.includes('home') || event.url === '/';  
    });
  }
}
