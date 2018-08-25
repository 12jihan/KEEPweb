import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


interface Blog {
  author: string;
  body: string;
  date: any;
  imgsrc: string;
  title: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogsCollection: AngularFirestoreCollection<Blog>;
  blogs: Observable<Blog[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.blogsCollection = this.afs.collection('blogs'); // reference
    this.blogs = this.blogsCollection.valueChanges(); // observable of blogs data
  }

}
