export const initialState = {
  filter: {
    searchValue: null,
    rating: null,
    price: null,
    selectedCategory: [],
    sort: null,
  },
  categories: [],
  products: [],
  cart: [],
  wishlist: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES":
      // console.log(state);
      return { ...state, categories: action.payload };
    case "SEARCH_PRODUCT":
      console.log(state.filter.searchValue);
      return {
        ...state,
        filter: { ...state.filter, searchValue: action.payload },
      };
    case "INITILIZE_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "`CLEAR_FILTER`":
      return {
        ...state,
        filter: {
          searchValue: null,
          rating: null,
          price: null,
          selectedCategory: [],
          sort: null,
        },
      };
    case "PRICE_BY_RANGE":
      return {
        ...state,
        filter: { ...state.filter, price: action.payload },
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.includes(action.payload)
          ? state.cart.filter((data) => data !== action.payload)
          : [...state.cart, action.payload],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.includes(action.payload)
          ? state.wishlist.filter((item) => item !== action.payload)
          : [...state.wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.includes(action.payload)
          ? state.wishlist.filter((data) => data !== action.payload)
          : [...state.wishlist, action.payload],
      };
    case "CATEGORY_FILTER":
      return {
        ...state,
        filter: {
          ...state.filter,
          selectedCategory: state.filter.selectedCategory.includes(
            action.payload
          )
            ? state.filter.selectedCategory.filter(
                (category) => category !== action.payload
              )
            : [...state.filter.selectedCategory, action.payload],
        },
      };

    case "FILTER_RATING":
      return {
        ...state,
        filter: {
          ...state.filter,
          rating: action.payload,
        },
      };
    case "FILTER_SORTBY":
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: action.payload,
        },
      };
    default:
      return state;
  }
};
