import { Component, OnInit } from '@angular/core';
import {BudgetItem} from '../shared/models/budget-item.model';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }
  // tslint:disable-next-line:typedef
  deleteItem(item: BudgetItem){
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }
  // tslint:disable-next-line:typedef
  updateItem(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }


}
