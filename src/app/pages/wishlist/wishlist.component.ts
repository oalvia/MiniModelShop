import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  brand,
  scale,
  tags,
  type,
} from '../../core/services/products/forms.data';
import { WishlistItem, Type, Scale, Brand, Tags } from './wishlist.models';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  public wishlistForm?: FormGroup;
  public type: Type[] = type;
  public scale: Scale[] = scale;
  public brand: Brand[] = brand;

  constructor(private fb: FormBuilder) {
    this.wishlistForm = this.fb.group({
      type: new FormControl('Base Kit', [Validators.requiredTrue]),
      scale: new FormControl('1:72', [Validators.requiredTrue]),
      brand: new FormControl('ANY', [Validators.requiredTrue]),
      description: new FormControl('', [Validators.required]),
    });
  }

  public createNewWish() {}
}
