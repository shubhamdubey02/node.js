export let card = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}
];

export function addtocard(productId) {
  let matchingItem;
  card.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    card.push({
      productId: productId,
      quantity: 1,
    });
  }
}

export function removeFromCard(productId) {
  const newCard = [];
  card.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCard.push(cartItem);
    }
  });
  card = newCard;
}
