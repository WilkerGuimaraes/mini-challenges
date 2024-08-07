import { useCartStore } from "../../store/CartStore";
import { Button, CartContainer, CartList } from "./styles";

export function Cart() {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartList>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <Button
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Remove to cart
            </Button>
          </li>
        ))}
      </CartList>
    </CartContainer>
  );
}
