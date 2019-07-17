import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "./../../services/firebase.service";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"]
})
export class EducationComponent implements OnInit {
  educationData: Array<any> = [];
  constructor(private firebaseService: FirebaseService) {}

  getDate(row): string {
    return `${row.startDate} - ${row.endDate}`;
  }

  ngOnInit() {
    this.firebaseService.getEducationData().subscribe(
      data => {
        this.educationData = data;
      },
      err => {
        console.error(err);
      }
    );
  }
}
