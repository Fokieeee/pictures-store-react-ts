import { createContext, ReactElement, useReducer } from "react";

export type CartItemType = {
  url: string;
  id: string;
  isFavorite: boolean;
};

type CartStateType = { cart: CartItemType[] };

export const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  SUBMIT: "SUBMIT",
  FAVORITE: "FAVORITE",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }
      const { id, url, isFavorite } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredCart, { id, url, isFavorite }] };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== action.payload?.id
      );
      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      if (!action.payload) {
        throw new Error("action.payload missing in SUBMIT action");
      }
      return { ...state, cart: [] };
    }
    case REDUCER_ACTION_TYPE.FAVORITE: {
      if (!action.payload) {
        throw new Error("action.payload missing in FAVORITE action");
      }
      const { url, id, isFavorite } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );
      action.payload.isFavorite = !action.payload.isFavorite;

      return { ...state, cart: [...filteredCart, { url, id, isFavorite }] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = ({ cart: [] }: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  const totalItems = state.cart.length;

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(state.cart.length * 6.99);

  const REDUCER_ACTIONS = REDUCER_ACTION_TYPE;

  const cart = state.cart;

  return { dispatch, totalItems, totalPrice, cart, REDUCER_ACTIONS };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

const CartContext = createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartContextState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
