import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiExecutor } from './domain/service/api-executor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [ApiExecutor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private _id = 0;

  private pipeBreaker = new Subscription();

  get id(): number {
    return this._id;
  }

  constructor(private readonly apiExecutor: ApiExecutor) {}
  
  ngOnInit(): void {
    this.pipeBreaker.add(
      this.apiExecutor.fetchId().subscribe((result) => {
        this._id = result.id;
      })
    )
  }
}
