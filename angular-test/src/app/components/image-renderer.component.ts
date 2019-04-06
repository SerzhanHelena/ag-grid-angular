import {Component} from '@angular/core';

import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
    selector: 'image-cell',
    template: `<img src="{{params.value}}" width="120" height="90">`
})
export class ImageRendererComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }
}