import { Component, OnInit,Input,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DockerImageDetailFetchServiceService } from '../docker-image-detail-fetch-service.service';
import { DockerNewTagService } from '../docker-new-tag.service'
import { DockerTagDeletionService } from '../docker-tag-deletion.service'
import { DockerImageDeletionService } from '../docker-image-deletion.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {trigger, transition, style, animate, state} from '@angular/animations'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(500, style({opacity:1})) 
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(700, style({opacity:0})) 
    ])
  ])
  ],
})
export class CardsComponent implements OnInit {
  private _readyForSource = new BehaviorSubject(null);
  public readyForHit$ = this._readyForSource.asObservable();
  private dockerImagesInfo: any;
  private tagSelected:String;
  private newTagName:String;
  //private showProgressSpinner:boolean;
  constructor(private dockerDetailsService:DockerImageDetailFetchServiceService,private dockerImageDeletionService:DockerImageDeletionService,private dockerTagDeletionService: DockerTagDeletionService,private dockerNewTagService:DockerNewTagService) {  
  }



  ngOnInit() {
      this.fetchData();
  }
  public fetchData(): any {
    console.log("--------Fetching images information--------");
     this.dockerDetailsService.getTestData().subscribe(data => {
        console.log("Information fetched");
          this._readyForSource.next(data);
     });
     this.readyForHit$.subscribe(data => {
        this.setDockerImagesData(data);
     });
  }

  public resetTagSelected(){
    //console.log("Inside resetTagSelected")
    this.tagSelected = null;
  }

  public resetNewTagName(){
    this.newTagName = null;
  }

  @Input('dockerData')
  public get dockerData(): String {
    
    return this.dockerImagesInfo;
  }

  public setDockerImagesData(result: any): void {
    this.dockerImagesInfo = result;
  }

   public deleteImage(i,commitId) {
    
    
    console.log(i+" tile is getting deleted");
    
    this.dockerImageDeletionService.removeImage(commitId).subscribe(data =>{
      console.log(commitId+" removed");
      console.log(data);
      this.dockerImagesInfo.splice(i,1);
    });
    
  }
  public tagImage(imageName,tagName) {
    //this.showProgressSpinner = true;
      this.dockerNewTagService.tagImage(imageName,tagName).subscribe(data =>{
      console.log(imageName+" tagged with "+tagName);
      console.log(data);
      this.fetchData();

    });
  }
  public removeTag(tagName){
        this.dockerTagDeletionService.removeTag(tagName).subscribe(data =>{
        console.log(tagName+" removed");
        console.log(data);
        this.fetchData();
      });
  }
}

