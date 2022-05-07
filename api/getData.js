export const getAllProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

export const getProduct = async (id) =>
  await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();
