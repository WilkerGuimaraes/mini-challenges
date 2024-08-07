import { useCartStore } from "../../store/CartStore";
import { AvaliableProductsContainer, Button, ProductsList } from "./styles";

export function AvaliableProducts() {
  const [items, addToCart] = useCartStore((state) => [
    state.avaliableItems,
    state.addToCart,
  ]);

  return (
    <AvaliableProductsContainer>
      <h1>Choose a product</h1>
      <ProductsList>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <Button
              type="button"
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to cart
            </Button>
          </li>
        ))}
      </ProductsList>
    </AvaliableProductsContainer>
  );
}
