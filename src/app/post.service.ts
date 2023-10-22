import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private posts: Post[] = [
    { id: 1, title: 'Meu primeiro post', content: 'Conteúdo do meu primeiro post.' },
    { id: 2, title: 'Outro post', content: 'Conteúdo de outro post.' }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}