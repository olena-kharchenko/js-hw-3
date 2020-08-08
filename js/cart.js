/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
    product.quantity = 1;
  },
  // remove(productName) {
  //   for (let i = 0; i < this.items.length; i += 1) {
  //     if (this.items[i].name === productName) {
  //       this.items.splice(i, 1);
  //     }
  //   }
  // },
  remove(productName) {
    const arrayOfIndex = [];
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === productName) {
        arrayOfIndex.push(i);
      }
    }

    for (let i = arrayOfIndex.length - 1; i >= 0; i -= 1) {
      this.items.splice(arrayOfIndex[i], 1);
    }

    return this.items;
  },
  clear() {
    this.items = [];
    return this.items;
  },
  countTotalPrice() {},
  increaseQuantity(productName) {
    this.items.push(productName);
  },
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

// cart.remove('🍎');

// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
