import { GET_EMAIL, RESET_USER_INFO } from "../../utils/types";
const UserInfoInitialState = {
  email: null,
};

export const UserInfoReducer = (state = UserInfoInitialState, action: any) => {
  switch (action.type) {
    case GET_EMAIL:
      return {
        ...state,
        email: action.data,
      };

    case RESET_USER_INFO:
      return { state: UserInfoInitialState };

    default:
      return state;
  }
};
