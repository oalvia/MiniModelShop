import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistItem } from 'src/app/pages/wishlist/services/wishlist.models';

const WISHLIST_URL = 'http://localhost:3300';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  
  public getWishlistItems(): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(`${WISHLIST_URL}/wishlist`);
  }

   public deleteWishlistItem(id: string): Observable<WishlistItem> {
    return this.http.delete<WishlistItem>(`${WISHLIST_URL}/wishlist/${id}`);
  }

  public getSingleWishlistItem(id: string): Observable<WishlistItem> {
    return this.http.get<WishlistItem>(`${WISHLIST_URL}/wishlist/${id}`);
  }

  public createWishlistItem(body: WishlistItem): Observable<WishlistItem>{
    return this.http.post<WishlistItem>(`${WISHLIST_URL}/wishlist`,body);
  }

  public editWishlistItem(id: string, body: WishlistItem): Observable<WishlistItem>{
    return this.http.put<WishlistItem>(`${WISHLIST_URL}/wishlist/${id}`,body);
  }

}
