import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  newPost = 'NO CONTENT';
  enteredValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  public onAddPost(): void {
    this.newPost = this.enteredValue;
  }
}
