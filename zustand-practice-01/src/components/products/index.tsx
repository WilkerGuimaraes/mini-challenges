import { AvaliableProducts } from "../avaliableProducts";
import { Cart } from "../cart";
import { Total } from "../total";

import { ProductsListContainer } from "./styles";

export function ProductsList() {
  return (
    <ProductsListContainer>
      <Total />
      <AvaliableProducts />
      <Cart />
    </ProductsListContainer>
  );
}
