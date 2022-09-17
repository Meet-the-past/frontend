import { GET_TASK_ID, DELETE_TASK_ID } from "../../utils/types";

const TaskInitialState = {
  task_id: null,
};

export const TaskReducer = (state = TaskInitialState, action: any) => {
  switch (action.type) {
    case GET_TASK_ID:
      return {
        ...state,
        task_id: action.data,
      };

    case DELETE_TASK_ID:
      return { task_id: TaskInitialState };

    default:
      return state;
  }
};
