import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { AgGridNg2 } from 'ag-grid-angular';
import { ImageRendererComponent } from '../image-renderer.component';
import { LinkRendererComponent } from '../link-renderer.component';
import { Item } from '../../models/Item';


@Component({
  selector: 'app-grid-application',
  templateUrl: './grid-application.component.html',
  styleUrls: ['./grid-application.component.css']
})

export class GridApplicationComponent implements OnInit {

  constructor(private service: GetDataService) {}
  rowData: Item[] = [];
  totalCount: number;
  selectedRowsCount = 0;
  private frameworkComponents;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    {
      headerName: '',
      field: 'selectRowsColumn',
      checkboxSelection: true,
      width: 40,
      hide: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: '',
      field: 'snippet.thumbnails.default.url',
      sortable: true,
      filter: true,
      cellRenderer: 'imageRenderer',
      width: 220,
      autoHeight: true
  },
    {
      headerName: 'Published On',
      field: 'snippet.publishedAtDate',
      valueGetter: function aPlusBValueGetter(params) {
      return new Date(params.data.snippet.publishedAt).toLocaleString('en');
    },
      sortable: true,
      width: 270
    },
    {
      headerName: 'Video Title',
      field: 'id.videoId',
      sortable: true,
      cellRenderer: 'linkRenderer',
      width: 500,
      onCellContextMenu: this.getContextMenuItems
    },
    {
      headerName: 'Description',
      field: 'snippet.description',
      sortable: true,
      width: 950
    }
];

  ngOnInit() {

    this.service.getData().subscribe(data => {
      this.rowData = data;
    });

    this.frameworkComponents = {
      imageRenderer: ImageRendererComponent,
      linkRenderer: LinkRendererComponent
    };
  }


countDisplayedRows(params) {
  this.totalCount = params.api.getDisplayedRowCount();
}

countSelectedRows(event) {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  this.selectedRowsCount = selectedNodes.length;
}

switchedToSelectMode() {
  if (this.columnDefs[0].hide) {
    this.columnDefs[0].hide = false;
    this.agGrid.columnApi.setColumnsVisible(['selectRowsColumn'], true);
  } else {
    this.columnDefs[0].hide = true;
    this.agGrid.columnApi.setColumnsVisible(['selectRowsColumn'], false);
  }
}


getContextMenuItems(params) {
  const result = [
    {
      name: 'Open in new tab',
      action(url: string) {
        window.open('https://www.youtube.com/watch?v=' + params.value, '_blank');
      }
  },
      'separator',
      'copy',
      'copyWithHeaders'
  ];
  return result;
}


}
