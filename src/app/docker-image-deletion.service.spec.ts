import { TestBed, inject } from '@angular/core/testing';

import { DockerImageDeletionService } from './docker-image-deletion.service';

describe('DockerImageDeletionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerImageDeletionService]
    });
  });

  it('should be created', inject([DockerImageDeletionService], (service: DockerImageDeletionService) => {
    expect(service).toBeTruthy();
  }));
});
