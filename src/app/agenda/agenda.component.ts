import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(
    private firestore: Firestore
  ) {
    const coleccion = collection(firestore, 'citas');
    collectionData(coleccion)
    .subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
