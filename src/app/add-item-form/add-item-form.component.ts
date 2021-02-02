import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BudgetItem} from '../shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem: boolean;

  constructor() {
  }

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    }else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}