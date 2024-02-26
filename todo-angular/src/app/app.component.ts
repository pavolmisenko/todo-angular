import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Item } from "./item";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = "Todo app"

  filter: "all" | "active" | "done" = "all"

  appItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "laugh", done: false },
    { description: "pray", done: false }
  ]

  get items() {
    if (this.filter === "all") {
      return this.appItems
    }
    return this.appItems.filter((item) => {
      this.filter === "done" ? item.done : !item.done
    });
  }

  addItem(description: string) {
    this.appItems.push({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.appItems.splice(this.appItems.indexOf(item), 1);
  }
}
