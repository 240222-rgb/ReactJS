const CARTS_KEY = 'localCarts';

const readStoredCarts = () => {
  try {
    const storedCarts = localStorage.getItem(CARTS_KEY);
    return storedCarts ? JSON.parse(storedCarts) : [];
  } catch (error) {
    console.error('No se pudieron leer los carritos locales:', error);
    return [];
  }
};

const writeStoredCarts = (carts) => {
  localStorage.setItem(CARTS_KEY, JSON.stringify(carts));
};

export const getLocalCarts = () => readStoredCarts();

export const addProductToLocalCart = ({ userId, productId }) => {
  if (!userId || !productId) return readStoredCarts();

  const carts = readStoredCarts();
  const normalizedUserId = String(userId);
  const normalizedProductId = Number(productId);
  const existingCartIndex = carts.findIndex(
    (cart) => String(cart.userId) === normalizedUserId
  );

  if (existingCartIndex >= 0) {
    const existingProductIndex = carts[existingCartIndex].products.findIndex(
      (product) => Number(product.productId) === normalizedProductId
    );

    if (existingProductIndex >= 0) {
      carts[existingCartIndex].products[existingProductIndex].quantity += 1;
    } else {
      carts[existingCartIndex].products.push({
        productId: normalizedProductId,
        quantity: 1,
      });
    }

    carts[existingCartIndex].date = new Date().toISOString();
  } else {
    carts.push({
      id: `local-${normalizedUserId}`,
      userId: normalizedUserId,
      date: new Date().toISOString(),
      products: [
        {
          productId: normalizedProductId,
          quantity: 1,
        },
      ],
    });
  }

  writeStoredCarts(carts);
  return carts;
};

export const removeLocalCart = (cartId) => {
  const carts = readStoredCarts().filter((cart) => cart.id !== cartId);
  writeStoredCarts(carts);
  return carts;
};

export const removeProductFromLocalCart = (cartId, productId) => {
  const normalizedProductId = Number(productId);
  const carts = readStoredCarts()
    .map((cart) => {
      if (cart.id !== cartId) return cart;

      return {
        ...cart,
        products: cart.products
          .map((product) =>
            Number(product.productId) === normalizedProductId
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };
    })
    .filter((cart) => cart.products.length > 0);

  writeStoredCarts(carts);
  return carts;
};
