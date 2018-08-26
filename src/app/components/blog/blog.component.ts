import { Component, OnInit } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import 'rxjs/operators';


// Angular firestore imports
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';


interface Blog {
  id?: string;
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
  snapshot: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.blogsCollection = this.afs.collection('adminBlog', ref => {
      return ref.orderBy('date'); // order or show your data in a certain way
    }); // reference
    this.blogs = this.blogsCollection.valueChanges(); // observable ofnotes data
    this.snapshot = this.blogsCollection.snapshotChanges();
  }

}
