    export interface PageInfo {
        totalResults: number;
        resultsPerPage: number;
    }

    export interface Id {
        kind: string;
        videoId: string;
    }

    export interface Default {
        url: string;
        width: number;
        height: number;
    }

    export interface Medium {
        url: string;
        width: number;
        height: number;
    }

    export interface High {
        url: string;
        width: number;
        height: number;
    }

    export interface Thumbnails {
        default: Default;
        medium: Medium;
        high: High;
    }

    export class Snippet {

        constructor() {
          this.publishedAtDate = new Date(this.publishedAt);            
        }
        publishedAt: Date;
        channelId: string;
        title: string;
        description: string;
        thumbnails: Thumbnails;
        channelTitle: string;
        liveBroadcastContent: string;
        publishedAtDate:Date;
    }

    export interface Item {
        kind: string;
        etag: string;
        id: Id;
        snippet: Snippet;
    }

    export interface RootObject {
        kind: string;
        etag: string;
        nextPageToken: string;
        regionCode: string;
        pageInfo: PageInfo;
        items: Item[];
    }