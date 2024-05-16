import axios from 'axios';

axios.defaults.baseURL = 'https://661abc1c65444945d04e6304.mockapi.io';

const getParametersString = params => {
  const urlSearchParams = new URLSearchParams(params);
  return `?${urlSearchParams}`;
};

export const findAll = async (page = 1, limit = 20, locationValue) => {
  const url =
    '/advert' +
    getParametersString({
      page,
      limit,
      ...(locationValue && { location: locationValue }),
    });
  const response = await axios.get(url);
  return response;
};
