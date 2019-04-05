import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { AgGridNg2 } from 'ag-grid-angular';
import { ParamsRenderer } from "../components/params-renderer";
import { LinkRenderer } from '../components/link-renderer';


@Component({
  selector: 'app-grid-application',
  templateUrl: './grid-application.component.html',
  styleUrls: ['./grid-application.component.css']
})
export class GridApplicationComponent implements OnInit {
  rowData = [];
  totalCount: number;
  selectedRowsCount;
  private frameworkComponents;
  private columnTypes;

  constructor(private service: GetDataService) {

    this.columnTypes = {
      dateColumn: {
        filter: "agDateColumnFilter",
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            var cellDate = new Date(cellValue);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          }
      }
    }
  }
   }
  @ViewChild('agGrid') agGrid: AgGridNg2;

  ngOnInit() {

    this.service.getData().subscribe(data => {
      this.rowData = data; 
      console.log(this.rowData);
    });
    
this.frameworkComponents = {
  paramsRenderer: ParamsRenderer,
  linkRenderer: LinkRenderer
};
  }


  columnDefs = [
    {field: 'checkbox', checkboxSelection: true, width: 40, hide: true, headerCheckboxSelection: true},
    
    {headerName: '', 
    field: 'snippet.thumbnails.default.url', 
    sortable: true, 
    filter: true, 
    cellRenderer: "paramsRenderer",
    width: 120,
    autoHeight: true
  },
    
    {headerName: 'Published On', field: 'snippet.publishedAtDate', 
    valueGetter: function aPlusBValueGetter(params) {;
      return new Date(params.data.snippet.publishedAt).toLocaleString('en');
    },
    sortable: true},
    {headerName: 'Video Title', field: 'id.videoId', sortable: true, cellRenderer: "linkRenderer"},
    {headerName: 'Description', field: 'snippet.description', sortable: true, width: 600}
];


countDisplayedRows(params) {
  this.totalCount = params.api.getDisplayedRowCount();
}

countSelectedRows(event) {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map( node => node.data );
  const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
  this.selectedRowsCount = selectedNodes.length;
}

switchedToSelectMode() {
  if(this.columnDefs[0].hide) {
    this.columnDefs[0].hide = false;
    this.agGrid.columnApi.setColumnsVisible(["checkbox"], true);
  }
  else {
    this.columnDefs[0].hide = true;
    this.agGrid.columnApi.setColumnsVisible(["checkbox"], false);
  }
}


getContextMenuItems(params) {
  console.log(params);
  const result = [
    {
      name: 'Open in new tab',
      action: function(url) {
        window.open('https://www.youtube.com/watch?v=' + params.value, '_blank');
      }
      
  },
      "separator",
      "copy",
      "copyWithHeaders"
  ];

  return result;
}


}
