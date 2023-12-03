import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  ISBN: string;
  price: string;
  author: string;
}

@Component({
  selector: 'app-session3',
  templateUrl: './session3.component.html',
  styleUrls: ['./session3.component.css'],
})
export class Session3Component implements OnInit {
  books: Book[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if(localStorage.getItem("books") ){
      this.books=JSON.parse(localStorage.getItem("books") || '');
    }
  }

  addBook(name: string, ISBN: string, price: string, author: string) {
    const book:any = {
      name:name,
      ISBN: ISBN,
      price: price,
      author: author
    }
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  deleteBook(name:string){
    this.books =this.books.filter((book:Book)=>{
      return book.name != name
    })
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}


