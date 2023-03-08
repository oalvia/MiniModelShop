import { Component } from '@angular/core';

@Component({
  selector: 'app-ddmenu',
  templateUrl: './ddmenu.component.html',
  styleUrls: ['./ddmenu.component.scss']
})

  export class DdmenuComponent {
    pages = [
      "Login",
      "Shopping Cart",
      "Wishlist"
    ]
    
    selected = "----"

    update(sel:any){
      this.selected = sel.target.value
    }

}
