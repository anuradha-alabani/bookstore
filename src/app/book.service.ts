import { Injectable } from '@angular/core';
import { BookListItem } from './book-list/book-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
    private filters = new BehaviorSubject<string[]>([]);

    books: BookListItem[] = [{
        id: 1,
        title: "Book 1",
        price: 100.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'fiction'
    },
    {
        id: 2,
        title: "Book 2",
        price: 50.20,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'fiction'
    },
    {
        id: 3,
        title: "Book 3",
        price: 30.25,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'non-fiction'
    },
    {
        id: 4,
        title: "Book 4",
        price: 29.99,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'non-fiction'
    },
    {
        id: 5,
        title: "Book 5",
        price: 24.22,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'non-fiction'
    },
    {
        id: 6,
        title: "Book 6",
        price: 24.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'science'
    },
    {
        id: 7,
        title: "Book 7",
        price: 24.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'science'

    }, {
        id: 8,
        title: "Book 8",
        price: 24.00,
        description: "its a story of rama witten by vyasa",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF8fE83KkMnTAIWfS6lBStvPfWEr2uUE5ugYiDkbiVeSOujicy6pB9HZi2RnWArHgurQNm3heD2lODK1skm30SufzXXFtLDNIltkfiWcVx6T_0tNHShj35GcVR-0ph&usqp=CAc',
        type: 'science'

    }];

    setFilters(filters: string[]) {
        this.filters.next(filters);
    }

    getFilters() {
        return this.filters.asObservable();
    }

    getBookById(id: number) {
        return this.books.find(book => book.id === id);
    }
}
