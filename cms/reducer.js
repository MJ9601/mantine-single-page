export const initState = {
  user: null,
  userCard: [],
  openedDrawer: false,
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "TOGGOLE":
      return {
        ...state,
        openedDrawer: !state.openedDrawer,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "ADD_PRODUCT_TO_CARD":
      return {
        ...state,
        userCard: () => {
          const product = userCard.find(
            (_product) => _product.id === action?.payload.id
          );
          if (!product)
            return userCard.push({ ...product, amount: (product.amount = 1) });
          if (product)
            return userCard
              .filter((_product) => _product.id !== product.id)
              .push({ ...product, amount: product.amount + 1 });
        },
      };
    case "REMOVE_ALL_PRODUCTS_FROM_CARD":
      return {
        ...state,
        userCard: [],
      };
    case "REMOVE_A_PRODUCT":
      return {
        ...state,
        userCard: () => {
          const product = userCard.filter(
            (_product) => _product.id === action?.payload.id
          );
          if (product.amount == 1)
            return userCard.filter((_product) => _product.id !== product.id);
          if (product.amount > 1)
            return userCard
              .filter((_product) => _product.id !== product.id)
              .push({ ...product, amount: product.amount - 1 });
        },
      };
  }
};
