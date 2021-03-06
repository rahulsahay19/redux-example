import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { REMOVE_ALL_TODOS } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearTodos(){
    this.ngRedux.dispatch({type:REMOVE_ALL_TODOS});
  }

}
