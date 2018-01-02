import { TestBed, inject } from '@angular/core/testing';

import { DockerTagDeletionService } from './docker-tag-deletion.service';

describe('DockerTagDeletionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerTagDeletionService]
    });
  });

  it('should be created', inject([DockerTagDeletionService], (service: DockerTagDeletionService) => {
    expect(service).toBeTruthy();
  }));
});
