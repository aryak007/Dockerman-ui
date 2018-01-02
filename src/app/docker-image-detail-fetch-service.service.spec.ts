import { TestBed, inject } from '@angular/core/testing';

import { DockerImageDetailFetchServiceService } from './docker-image-detail-fetch-service.service';

describe('DockerImageDetailFetchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerImageDetailFetchServiceService]
    });
  });

  it('should be created', inject([DockerImageDetailFetchServiceService], (service: DockerImageDetailFetchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
