import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  showInputSearch: boolean;

  ngOnInit() {
    this.showInputSearch = false;
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
        console.log('[logout] - Sign Out!');
      })
      .catch(err => {
        console.log('[logout] - Something went wrong:', err.message);
      });
  }

  showOrHideInputSearch() {
    if (!this.showInputSearch) {
      this.showInputSearch = true;
    } else {
      this.showInputSearch = false;
    }
  }

  setFocusOnSearchInput() {

  }
}
