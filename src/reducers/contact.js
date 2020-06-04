import { SEND_QUERY } from '../actions';

const initialState = {
  data: null
};

const contact = (state = initialState, action) => {

  switch (action.type) {

    case SEND_QUERY:
      return action.payload;

    default:
      return state;
  }
};

export default contact;
