// src/types/book.ts

export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    image: string;
    description?: string;
    isbn?: string;
}

// rewrite with the logic