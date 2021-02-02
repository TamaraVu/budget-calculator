import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItem} from '../shared/models/budget-item.model';
import {MatDialog} from '@angular/material/dialog';
import {EditItemModalComponent} from '../edit-item-modal/edit-item-modal.component';

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})


export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  // tslint:disable-next-line:typedef
  onCardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    });
  }
}
