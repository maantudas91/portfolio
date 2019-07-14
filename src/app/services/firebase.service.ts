import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getEducationData(): Observable<any> {
    return new Observable(obs => {
      return this.firestore
        .collection("education")
        .snapshotChanges()
        .subscribe(
          data => {
            obs.next(
              data.map(e => {
                return {
                  id: e.payload.doc.id,
                  ...e.payload.doc.data()
                };
              })
            );
          },
          err => {
            obs.error(err);
          }
        );
    });
  }
}
