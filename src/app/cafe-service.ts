import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  coffee = signal([
    { id: 1, name: 'Salted Caramel Sunset', description: 'Rich espresso blended with sweet caramel and a hint of sea salt.', price: 250 },
    { id: 2, name: 'Cappuccino Harmony', description: 'Perfectly balanced espresso, steamed milk, and a layer of velvety foam.', price: 220 },
    { id: 3, name: 'Amber Spanish Latte', description: 'Smooth espresso with sweetened condensed milk for a warm, creamy finish.', price: 260 },
    { id: 4, name: 'Daybreak Americano', description: 'Bold, crisp espresso shots topped with hot water to kickstart your morning.', price: 190 }
  ]);
  
  noncoffee = signal([
    { id: 5, name: 'Sunrise Matcha', description: 'Premium stone-ground matcha layered over refreshing milk and vanilla syrup.', price: 280 },
    { id: 6, name: 'Afterglow Chocolate', description: 'Indulgent, decadent dark hot chocolate topped with a light dusting of cocoa.', price: 240 },
    { id: 7, name: 'Cloud Matcha', description: 'Earthy matcha latte topped with a thick, sweet cold foam layer.', price: 300 },
    { id: 8, name: 'Chai Sunrise', description: 'Spiced black tea blend with steamed milk and a hint of sweet orange blossom.', price: 260 }
  ]);
  
  fruitdrink = signal([
    { id: 9, name: 'Strawberry Skies', description: 'Fresh, vibrant strawberry puree blended with ice and a splash of lemonade.', price: 250 },
    { id: 10, name: 'Peach Horizon', description: 'Sweet peach nectar infused with green tea and served chilled over ice.', price: 240 },
    { id: 11, name: 'Mango Craze', description: 'Tropical mango blend mixed with creamy coconut milk and crushed ice.', price: 260 },
    { id: 12, name: 'Berry Blast', description: 'A refreshing explosion of mixed blackberries, blueberries, and raspberries.', price: 250 }
  ]);
  
  snack = signal([
    { id: 13, name: 'Truffle Fries', description: 'Crispy golden fries tossed in aromatic truffle oil and grated parmesan cheese.', price: 300 },
    { id: 14, name: 'Avocado Toast', description: 'Toasted sourdough topped with smashed avocado, cherry tomatoes, and feta.', price: 360 },
    { id: 15, name: 'Glazed Cinnamon Roll', description: 'Warm, gooey pastry swirled with cinnamon and topped with sweet cream cheese icing.', price: 200 },
    { id: 16, name: 'Smoked Salmon Croissant', description: 'Flaky buttery croissant filled with cream cheese, smoked salmon, and fresh dill.', price: 390 }
  ]);
  
  mart = signal([
    { id: 17, name: 'Roasted Almonds Mix', price: 140 },
    { id: 18, name: 'Dark Chocolate Sea Salt Bar', price: 170 },
    { id: 19, name: 'House Blend Coffee Beans', price: 690 },
    { id: 20, name: 'Organic Energy Bar', price: 130 },
    { id: 21, name: 'Gourmet Potato Chips', price: 115 },
    { id: 22, name: 'Cold Brew Bottled Coffee', price: 180 },
    { id: 23, name: 'Mixed Berry Granola', price: 210 },
    { id: 24, name: 'Premium Green Tea Bags', price: 245 },
    { id: 25, name: 'Baked Cheese Crackers', price: 95 }
  ]);
  cartItemsSignal = signal<any[]>([]);

  get cartItems(): any[] {
    return this.cartItemsSignal();
  }

  get totalAmount(): number {
    return this.totalPrice();
  }

  totalPrice = computed(() => 
    this.cartItemsSignal().reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );

  trackByItemId(index: number, item: any): any {
    return item.id || index;
  }

  getItemSubtotal(item: any): number {
    return item.price * item.quantity;
  }

  addToCart(product: any): void {
    this.cartItemsSignal.update(current => {
      const existing = current.find(item => item.id === product.id);
      if (existing) {
        return current.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  }

  incrementQuantity(item: any): void {
    this.cartItemsSignal.update(current =>
      current.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
    );
  }

  decrementQuantity(item: any): void {
    this.cartItemsSignal.update(current =>
      current.map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i)
             .filter(i => i.quantity > 0)
    );
  }

  clearCart(): void {
    this.cartItemsSignal.set([]);
  }

  checkout(): void {
    console.log('Purchased items:', this.cartItems);
    this.clearCart();
  }

}
