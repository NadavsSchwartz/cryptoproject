/* eslint-disable no-debugger */
import axios from 'axios';
import { getAxiosConfig, API } from 'consts';

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL';
export const USER_DETAILS_RESET = 'USER_DETAILS_RESET';

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `${API.BASE}${API.UserDetails}`,
      getAxiosConfig(),
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });

    dispatch(getUserStats());
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      console.log(error);
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const USER_STATS_REQUEST = 'USER_STATS_REQUEST';
export const USER_STATS_SUCCESS = 'USER_STATS_SUCCESS';
export const USER_STATS_FAIL = 'USER_STATS_FAIL';

export const getUserStats = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_STATS_REQUEST,
    });

    const { data } = await axios.get(
      `${API.BASE}${API.UserStats}`,
      getAxiosConfig(),
    );

    dispatch({
      type: USER_STATS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      console.log(error);
    }
    dispatch({
      type: USER_STATS_FAIL,
      payload: message,
    });
  }
};

export const USER_LOG_OUT_REQUEST = 'USER_LOG_OUT_REQUEST';
export const USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS';
export const USER_LOG_OUT_FAIL = 'USER_LOG_OUT_FAIL';

export const userLogOut = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOG_OUT_REQUEST,
    });

    const { data } = await axios.get(
      `${API.BASE}${API.LogoutUser}`,
      getAxiosConfig(),
    );

    window.location.href = '/';
    dispatch({
      type: USER_LOG_OUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: USER_LOG_OUT_FAIL,
      payload: message,
    });
  }
};

export const USER_LOG_IN_FAIL = 'USER_LOG_IN_FAIL';

const checkIfWindowOpensCorrectly = async (url) => {
  const didWindowOpen = window.open(
    url,
    '_self',
    'toolbar=0,location=0,directories=0,status=1,menubar=0,titlebar=0,scrollbars=1,resizable=1',
  );
  if (didWindowOpen == null) {
    return true;
  } else {
    document.location.href = url;
  }

  return false;
};

export const SocialAuth = (strategy) => async (dispatch) => {
  try {
    await checkIfWindowOpensCorrectly(`${API.BASE}${API[strategy]}`);
    if (!checkIfWindowOpensCorrectly)
      dispatch({
        type: USER_LOG_IN_FAIL,
        payload: 'please turn of ad block',
      });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: USER_LOG_IN_FAIL,
      payload: message,
    });
  }
};
