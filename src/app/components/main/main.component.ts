import { Component, OnInit } from '@angular/core';
import {CacheService} from '../../services/cache.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private cacheService:CacheService) { }
  username='test';
  isNavbarCollapsed=true;
  ngOnInit() {
    let user = this.cacheService.getCurrentUser();
    this.username = user.username;
    
  }

}
