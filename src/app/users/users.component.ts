import { Component, OnInit } from '@angular/core';
import {MiningService} from '../mining.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public twitterHandle:string;
  public pieChartLabels:string[] = ['A'];
  public pieChartData:number[]=[94];  
  public pieCharType:string = 'pie';
  public showChart:boolean = false;
  public showTA:boolean = false;
  public textAreaValue: string;
  

  constructor( private miningService: MiningService) { }

  ngOnInit() {
  }
  
  public callMoodStatusService():void{
  
    console.log("Mood Status Service is Called");
    
    this.miningService.GetUserInfo(this.twitterHandle).subscribe((data)=>{
        
        if(data && data.hasOwnProperty('personality'))
        {
            let labels = (data as any).personality.map(a => a.name);
            let percentile = (data as any).personality.map(a => a.percentile);        
            this.pieChartLabels = labels;
            this.pieChartData = percentile;
            this.showChart = true; 
        }
           
    });  
  }
  
  
public callFinancialPatternService():void{
  
    console.log("Financial Pattern Service is Called");
    
    this.miningService.GetFinancialInfo(this.twitterHandle).subscribe((data)=>{
        
        if(data && data.hasOwnProperty('finPercent'))
        {
            console.log(data);
            //let labels = (data as any).map(a => a.mergedFinTweetCounts);
            let labels = (data as any).mergedFinTweetCounts;
            //let percentile = (data as any).map(a => a.finPercent);        
            let percentile = (data as any).finPercent;        
            this.pieChartLabels = labels;
            this.pieChartData = percentile;
            this.showChart = true; 
        }
           
    });  
  }
  
  public viewJSON():void{
  
    this.showTA = true;
    
    this.miningService.GetUserInfo(this.twitterHandle).subscribe((data)=>{
        var jsonString = JSON.stringify(data);
        this.textAreaValue = jsonString;
    
    });    
    
  }
  
  
  //
  public chartClicked(e:any):void{
    console.log(e);
  
  }

    public chartHovered(e:any):void{

        console.log(e);
    }
}
