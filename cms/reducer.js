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
        userCard: addingProduct(state.userCard, action.product),
      };
    case "EMPTY_CARD":
      return {
        ...state,
        userCard: [],
      };
    case "REMOVE_A_PRODUCT":
      return {
        ...state,
        userCard: removingProduct(state.userCard, action.product),
      };
  }
};

const addingProduct = (userCard, product) => {
  const _product = userCard.find((item) => item.id === product.id);
  if (!_product) return [...userCard, { ...product, amount: 1 }];
  else
    return [
      ...userCard.filter((item) => item.id !== product.id),
      { ...product, amount: _product.amount + 1 },
    ];
};

const removingProduct = (userCard, product) => {
  const _product = userCard.find((item) => item.id === product.id);
  if (_product.amount === 1)
    return [...userCard.filter((item) => item.id !== product.id)];
  else
    return [
      ...userCard.filter((item) => item.id !== product.id),
      { ...product, amount: _product.amount - 1 },
    ];
};