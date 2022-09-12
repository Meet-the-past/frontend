import { GET_EMAIL } from "../../utils/types";
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

    default:
      return state;
  }
};
