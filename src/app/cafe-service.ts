import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  coffee = signal([
    { id: 1, name: '☕ Salted Caramel Sunset', description: 'Rich espresso blended with sweet caramel and a hint of sea salt.', price: 250 },
    { id: 2, name: '🥛 Cappuccino Harmony', description: 'Perfectly balanced espresso, steamed milk, and a layer of velvety foam.', price: 220 },
    { id: 3, name: '🍯 Amber Spanish Latte', description: 'Smooth espresso with sweetened condensed milk for a warm, creamy finish.', price: 260 },
    { id: 4, name: '🌅 Daybreak Americano', description: 'Bold, crisp espresso shots topped with hot water to kickstart your morning.', price: 190 }
  ]);
  
  noncoffee = signal([
    { id: 5, name: '🍵 Sunrise Matcha', description: 'Premium stone-ground matcha layered over refreshing milk and vanilla syrup.', price: 280 },
    { id: 6, name: '🍫 Afterglow Chocolate', description: 'Indulgent, decadent dark hot chocolate topped with a light dusting of cocoa.', price: 240 },
    { id: 7, name: '☁️ Cloud Matcha', description: 'Earthy matcha latte topped with a thick, sweet cold foam layer.', price: 300 },
    { id: 8, name: '🍂 Chai Sunrise', description: 'Spiced black tea blend with steamed milk and a hint of sweet orange blossom.', price: 260 }
  ]);
  
  fruitdrink = signal([
    { id: 9, name: '🍓 Strawberry Skies', description: 'Fresh, vibrant strawberry puree blended with ice and a splash of lemonade.', price: 250 },
    { id: 10, name: '🍑 Peach Horizon', description: 'Sweet peach nectar infused with green tea and served chilled over ice.', price: 240 },
    { id: 11, name: '🥭 Mango Craze', description: 'Tropical mango blend mixed with creamy coconut milk and crushed ice.', price: 260 },
    { id: 12, name: '💥 Berry Blast', description: 'A refreshing explosion of mixed blackberries, blueberries, and raspberries.', price: 250 }
  ]);
  
  snack = signal([
    { id: 13, name: '🥑 Avocado Toast', description: 'Toasted sourdough topped with smashed avocado, cherry tomatoes, and feta.', price: 360 },
    { id: 14, name: '🌀 Glazed Cinnamon Roll', description: 'Warm, gooey pastry swirled with cinnamon and topped with sweet cream cheese icing.', price: 200 },
    { id: 15, name: '🥐 Smoked Salmon Croissant', description: 'Flaky buttery croissant filled with cream cheese, smoked salmon, and fresh dill.', price: 390 },
    { id: 16, name: '🍪 Classic Choco Chip Cookie', description: 'Soft-baked cookie packed with rich, melting dark chocolate chunks.', price: 120 },
    { id: 17, name: '🥯 New York Style Bagel', description: 'Toasted plain bagel served with a generous side of smooth cream cheese.', price: 180 },
    { id: 18, name: '🍰 Velvet Red Velvet Slice', description: 'Moist red velvet cake layered with signature sweet cream cheese frosting.', price: 240 },
    { id: 19, name: '🥧 Warm Apple Tart', description: 'Flaky pastry crust filled with spiced apples and a drizzle of caramel syrup.', price: 210 },
    { id: 20, name: '🥪 Classic Grilled Cheese', description: 'Melted cheddar and mozzarella sandwiched between crispy buttered brioche toast.', price: 280 },
    { id: 21, name: '🧁 Blueberry Blast Muffin', description: 'Fluffy, golden muffin bursting with fresh blueberries and a streusel crumb topping.', price: 140 },
    { id: 23, name: '🥗 Caesar Salad Cup', description: 'Crisp romaine lettuce, crunchy croutons, and parmesan tossed in creamy Caesar dressing.', price: 220 },
    { id: 24, name: '🥨 Salted Pretzel Bites', description: 'Warm, soft pretzel nuggets sprinkled with coarse sea salt and served with cheese dip.', price: 190 },
    { id: 25, name: '🍫 Fudgy Walnut Brownie', description: 'Rich, dense chocolate brownie packed with crunchy walnuts and a glossy crust.', price: 150 },
    { id: 26, name: '🌮 Crispy Nacho Platter', description: 'Tortilla chips loaded with warm cheese sauce, fresh tomato salsa, and jalapeños.', price: 290 }
  ]);
  
  
  mart = signal([
    { id: 27, name: '🥜 Roasted Almonds Mix', price: 140 },
    { id: 28, name: '🍫 Dark Chocolate Sea Salt Bar', price: 170 },
    { id: 29, name: '☕ House Blend Coffee Beans', price: 690 },
    { id: 30, name: '⚡ Organic Energy Bar', price: 130 },
    { id: 31, name: '🥔 Gourmet Potato Chips', price: 115 },
    { id: 32, name: '🧊 Cold Brew Bottled Coffee', price: 180 },
    { id: 33, name: '🥣 Mixed Berry Granola', price: 210 },
    { id: 34, name: '🍃 Premium Green Tea Bags', price: 245 },
    { id: 35, name: '🧀 Baked Cheese Crackers', price: 95 }
  ]);

  private cartItemsSignal = signal<any[]>([]); 
cart = this.cartItemsSignal.asReadonly(); 

totalPrice = computed(() => 
  this.cartItemsSignal().reduce((sum, item) => sum + (item.price * item.quantity), 0)
);

addToCart(product: any): void {
  this.cartItemsSignal.update(current => {
    const existing = current.find(item => item.id === product.id);
    return existing 
      ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { ...product, quantity: 1 }];
  });
}

incrementQuantity(itemId: any): void {
  this.cartItemsSignal.update(current =>
    current.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)
  );
}

decrementQuantity(itemId: any): void {
  this.cartItemsSignal.update(current =>
    current.map(item => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item)
           .filter(item => item.quantity > 0)
  );
}

clearCart(): void {
  this.cartItemsSignal.set([]);
}

checkout(): void {
  console.log('Purchased items:', this.cartItemsSignal());
  this.clearCart();
}

}
