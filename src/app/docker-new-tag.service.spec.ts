import { TestBed, inject } from '@angular/core/testing';

import { DockerNewTagService } from './docker-new-tag.service';

describe('DockerNewTagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerNewTagService]
    });
  });

  it('should be created', inject([DockerNewTagService], (service: DockerNewTagService) => {
    expect(service).toBeTruthy();
  }));
});
