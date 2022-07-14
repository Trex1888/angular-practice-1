import { Component, OnInit } from '@angular/core';
import { PeopleService, Photo } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  loadPeople: Photo[] = [];

  constructor(private api: PeopleService) {}

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople() {
    this.api.getInfo().subscribe((people) => {
      this.loadPeople = people;
      console.log(people);
    });
  }
}
