import { Injectable } from '@angular/core';
import { BookListItem } from './book-list/book-list.component';

@Injectable({ providedIn: 'root' })
export class BookService {
    books: BookListItem[] = [{
        id: 1,
        title: "Book 1",
        price: 100.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    },
    {
        id: 2,
        title: "Book 2",
        price: 50.20,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    },
    {
        id: 3,
        title: "Book 3",
        price: 30.25,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    },
    {
        id: 4,
        title: "Book 4",
        price: 29.99,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    },
    {
        id: 5,
        title: "Book 5",
        price: 24.22,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    },
    {
        id: 6,
        title: "Book 6",
        price: 24.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    },
    {
        id: 7,
        title: "Book 7",
        price: 24.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    }, {
        id: 8,
        title: "Book 8",
        price: 24.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc'
    }];

    getBookById(id: number) {
        return this.books.find(book => book.id === id);
    }
}
