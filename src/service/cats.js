import { api } from './api';

export const getAllCats = async (typeCats, limit) => {
  try {
    const result = await api.get(
      `/random?animal_type=${typeCats}&amount=${limit}`
    );
    return {
      data: result,
    };
  } catch (e) {
    throw e;
  }
};
