import { Id } from './Id';
import { Snippet } from "./Snippet";
export interface Item {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
}
