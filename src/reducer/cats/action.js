import { ALL_CATS_START, ALL_CATS_SUCCESS, ALL_CATS_ERROR } from './constants';

export const getCats =
  (typeCats, limit) =>
  async (dispatch, _getState, { CatsApi }) => {
    try {
      dispatch({ type: ALL_CATS_START, typeCats, limit });
      const { data } = await CatsApi.getAllCats(typeCats, limit);
      setTimeout(() => {
        dispatch({
          type: ALL_CATS_SUCCESS,
          payload: data,
        });
      }, 0);
    } catch (e) {
      dispatch({
        type: ALL_CATS_ERROR,
        payload: e,
      });
    }
  };
