import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { User } from '../../_model';
import { UserProfile } from '../../_helper/profile-user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers:[UserProfile]
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public userdetail:User;
  constructor(private userprofile:UserProfile) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.userdetail=JSON.parse(localStorage.getItem('currentUser'));
    }
  }
}
