import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, of, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { scale, type } from 'src/app/core/services/products/forms.data';
import { Scale, Type, WishlistItem } from './services/wishlist.models';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  public wishlistForm?: FormGroup;
  public typeArray?: Type[] = type;
  public scaleArray?: Scale[] = scale;
  public wishlistArray: WishlistItem[] = [];

  constructor(
    private wishlistService: WishlistService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {


    this.wishlistForm = this.fb.group({
      type: new FormControl('', [Validators.requiredTrue]),
      scale: new FormControl('', [Validators.requiredTrue]),
      description: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  public ngOnInit(): void {
    this.wishlistService.getWishlistItems().subscribe((wishesFromApi) => {
      this.wishlistArray = wishesFromApi;
    });
  }

  public insertId() {
    const tempArrayCopy = [...this.wishlistArray];
    const greaterId = tempArrayCopy.sort((a, b) => {
      return parseInt(b.id, 10) - parseInt(a.id, 10);
    })[0].id;
    const newId = (parseInt(greaterId, 10) + 1).toString();
    this.wishlistArray.push({
      ...this.wishlistForm?.value,
      id: newId,
    });
    this.wishlistForm?.reset();
    console.log(this.wishlistForm);
  }

  public deleteWishlistItem(id?: string) {
    if (!id) {
      return;
    }
    this.wishlistService
      .deleteWishlistItem(id)
      .pipe(
        switchMap((deletedItem) => {
          return this.wishlistService.getWishlistItems();
        })
      )
      .subscribe((wishesFromApi) => {
        this.wishlistArray = wishesFromApi;
      });
  }

  public createWishlistItem(body: WishlistItem): Observable<WishlistItem> {
    return this.wishlistService.createWishlistItem(body);
  }

  public editWishlistItem(
    id: string,
    body: WishlistItem
  ): Observable<WishlistItem> {
    return this.wishlistService.editWishlistItem(id, body);
  }
}
