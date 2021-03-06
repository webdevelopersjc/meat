import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";
import { NotificationService } from "../../shared/messages/notification.service";
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

constructor(private notificationService: NotificationService) {

}

  clear() {
    this.items = [];
  }
  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id);
    if (!foundItem) {
      this.items.push(new CartItem(item));
    } else {
      this.increaseQty(foundItem);
    }
    this.notificationService.notify(`Você adcionou o item ${item.name}`)
  }
  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
  }
  increaseQty(item: CartItem) {
    item.quantity++;
  }
  decreaseQty(item: CartItem) {
    item.quantity--;
    if (item.quantity === 0 ) {
      this.removeItem(item);
    }
  }
}
