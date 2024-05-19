import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiExecutor } from './domain/service/api-executor.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  providers: [ApiExecutor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private _id = 0;

  private communicationResult = false;

  private pipes = new Subscription();

  get id(): number {
    return this._id;
  }

  get communicationResultMessagae(): string {
    return this.communicationResult ? 'success' : 'fail';
  }

  constructor(private readonly apiExecutor: ApiExecutor) {}
  
  ngOnInit(): void {
    this.pipes.add(
      this.apiExecutor.fetchId().subscribe({
        next: (result) => {
          this._id = result.id;
          this.communicationResult = true;
        },
        error: () => {
          this._id = NaN;
          this.communicationResult = false;
        }
      })
    )
  }

  ngOnDestroy(): void {
      this.pipes.unsubscribe();
  }
}
