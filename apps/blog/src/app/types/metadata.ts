import { Jsonfeed } from "./jsonfeed";
import { Author } from "./author";
import { Feed } from "./feed";

export interface Metadata {
  title:       string;
  url:         string;
  language:    string;
  description: string;
  feed:        Feed;
  jsonfeed:    Jsonfeed;
  author:      Author;
}
