import { Page } from "./page";
import { Post } from "./post";

export interface Collections {
  all:   Page[][];
  posts: Post[];
}
