import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridApplicationComponent } from './grid-application.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ImageRendererComponent } from '../image-renderer.component';
import { LinkRendererComponent } from '../link-renderer.component';

describe('GridApplicationComponent', () => {
  let component: GridApplicationComponent;
  let fixture: ComponentFixture<GridApplicationComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridApplicationComponent,
        ImageRendererComponent,
        LinkRendererComponent],
      imports: [
        AgGridModule.withComponents([ImageRendererComponent, LinkRendererComponent]),
        HttpClientModule]
    }).compileComponents();
    fixture = TestBed.createComponent(GridApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create grid component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have expected column headers', () => {
    fixture.detectChanges();

    const elm = fixture.nativeElement;
    const grid = elm.querySelector('ag-grid-angular');
    const headerCells = grid.querySelectorAll('.ag-header-cell-text');
    const headerTitles = Array.from(headerCells).map((cell: any) =>
        cell.textContent.trim()
    );
    expect(headerTitles).toEqual(['', 'Published On', 'Video Title', 'Description']);
});

  it('first row should have expected data', () => {
  fixture.detectChanges();

  const elm = fixture.nativeElement;
  const grid = elm.querySelector('ag-grid-angular');
  const firstRowCells = grid.querySelectorAll(
    'div[row-id="0"] .ag-cell-value'
);
  const values = Array.from(firstRowCells).map((cell: any) =>
      cell.textContent.trim()
  );
  expect(values).toEqual(['', '5/13/2011, 12:01:31 AM', 'https://www.youtube.com/watch?v=3fumBcKC6RE', 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.']);
});

});
