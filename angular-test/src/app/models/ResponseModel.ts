import { PageInfo } from './PageInfo';
import { Item } from './Item';
export interface ResponseModel {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}
