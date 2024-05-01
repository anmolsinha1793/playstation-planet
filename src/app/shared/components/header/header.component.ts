import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TypewriterService } from '../../../services/type-writer.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const PlayStation_Planet = 'PlayStation Planet';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: any = [PlayStation_Planet];
  constructor(private typeWriter: TypewriterService) {
    this.title = this.typeWriter
    .getTypewriterEffect(this.title)
    .pipe(map((text) => text));
  }
}
