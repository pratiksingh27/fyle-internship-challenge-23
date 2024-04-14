// import { TestBed } from '@angular/core/testing';

// import { ApiService } from './api.service';

// describe('ApiService', () => {
//   let service: ApiService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ApiService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import axios from 'axios';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data from API', async () => {
    const mockData = { message: 'Mock data' };
    const getSpy = spyOn(axios, 'get').and.returnValue(Promise.resolve({ data: mockData }));

    const data = await service.getData();

    expect(data).toEqual(mockData);
    expect(getSpy).toHaveBeenCalled();
  });

  it('should handle error when fetching data from API', async () => {
    const error = new Error('Failed to fetch data');
    const getSpy = spyOn(axios, 'get').and.returnValue(Promise.reject(error));

    const data = await service.getData();

    expect(data).toBeUndefined();
    expect(getSpy).toHaveBeenCalled();
  });
});

