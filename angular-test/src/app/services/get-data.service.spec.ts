// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { GetDataService } from './get-data.service';
// import { AgGridModule } from 'ag-grid-angular';
// import { ImageRendererComponent } from '../components/image-renderer.component';
// import { LinkRendererComponent } from '../components/link-renderer.component';

// describe('GetDataService', () => {
//   let httpTestingController: HttpTestingController;
//   let service: GetDataService;

//   const expectedData = {
//     etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\"',
//     videoId: '3fumBcKC6RE',
//     kind: 'youtube#searchResult',
//     title: 'Lil Wayne - John (Explicit) ft. Rick Ross'
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//     imports: [HttpClientTestingModule, AgGridModule.withComponents([ImageRendererComponent, LinkRendererComponent])],
//     providers: [GetDataService],
//     declarations:[ImageRendererComponent, LinkRendererComponent]
//   });
//     httpTestingController = TestBed.get(HttpTestingController);
//     service = TestBed.get(GetDataService);
// });

//   afterEach(() => {
//   httpTestingController.verify();
// });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('returned Observable should match the right data', () => {
//     service.getData().subscribe((data) => {
//       expect(data).toEqual(expectedData);
//     });

//     const req = httpTestingController.expectOne(service.url);
//     expect(req.request.method).toEqual('GET');
//     req.flush(expectedData);
//     service.getData()
//         .subscribe(rows => {
//           expect(rows[0].etag).toEqual('\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\"');
//           expect(rows[0].id.videoId).toEqual('3fumBcKC6RE');
//           expect(rows[0].kind).toEqual('youtube#searchResult');
//           expect(rows[0].snippet.title).toEqual('Lil Wayne - John (Explicit) ft. Rick Ross');
//         });

//     const req = httpTestingController.expectOne(
//         // tslint:disable-next-line:max-line-length
//         'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john'
//       );
//     req.flush(expectedData);
//     });
//  });
