import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Change';


  constructor(private data: DataService, private SwUpdate: SwUpdate) {
    SwUpdate.available.subscribe(event => {
      console.log('Event:', event)
      this.SwUpdate.activateUpdate().then(() => document.location.reload())
    })
    console.log('SwUpdate', SwUpdate)
    this.data.getData().subscribe(obj => {
      console.log(obj)
      this.title = obj.value
    },
      (error) => {
        console.log('error', error)
      })
  }

  ngOninit() {
    // this.data.getData().subscribe(obj => {
    //   console.log(obj)
    //   this.title = obj.value
    // })
  }

}
