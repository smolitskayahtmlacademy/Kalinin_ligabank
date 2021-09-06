import { format } from 'date-fns';
import { getExchangeRates } from './action';
import { toast } from 'react-toastify';
import { today as todayDate } from '../const';

const today = format(todayDate, 'yyyy-MM-dd');

const fetchExchangeRates = (date = today) => async (dispatch, _getState, api) => {
  const APIRoute = date === today ? 'latest.json' : `historical/${date}.json`;
  try {
    const {data: { rates }} = await api.get(APIRoute);
    await dispatch(getExchangeRates(rates));
  } catch(err) {
    toast.error(err.message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export {
  fetchExchangeRates
};
