import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'params-cell',
    template: `<a href="https://www.youtube.com/watch?v={{params.value}}" target="_blank">https://www.youtube.com/watch?v={{params.value}}</a>`
})
export class LinkRenderer implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }
}