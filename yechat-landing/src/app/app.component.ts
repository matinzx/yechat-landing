import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $: any;
declare var runMain: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'yechat-landing';
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    runMain();
    $(document).ready(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}