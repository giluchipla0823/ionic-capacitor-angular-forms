import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-ticket',
  templateUrl: './card-ticket.component.html',
  styleUrls: ['./card-ticket.component.scss'],
})
export class CardTicketComponent implements OnInit {
  @Input() ticket: FormGroup;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
