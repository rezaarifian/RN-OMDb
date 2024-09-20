import {Dimensions, PixelRatio} from 'react-native';
import dayjs, {Dayjs} from 'dayjs';
import Toast from 'react-native-simple-toast';
import {AxiosError} from 'axios';

import Colors from '@theme/Colors';

const toastStyle = {
  backgroundColor: Colors.ALMOST_BLACK,
  textColor: Colors.WHITE,
};

type ErrorResponseData = {
  error?: string;
};

export const DESIGN_WIDTH_POTRAIT = 393;
export const DESIGN_WIDTH_LANDSCAPE = 1080;
export const DESIGN_HEIGHT_LANDSCAPE = 800;

export const deviceWidth = () => Dimensions.get('window').width;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const scale = (size: number): number => {
  return Math.round(
    PixelRatio.roundToNearestPixel(
      (size * deviceWidth()) / DESIGN_WIDTH_POTRAIT,
    ),
  );
};

export const getCustomDate = (date: Dayjs | string, format: string) => {
  const result = dayjs(date).format(format);
  return result;
};

export const showToast = (message: string) => {
  Toast.show(message, Toast.SHORT);
};

export const handleAxiosError = (
  error: AxiosError<ErrorResponseData>,
): void => {
  if (!error.response) {
    Toast.show('Network Error', Toast.SHORT, toastStyle);
    return;
  }

  const {status, data} = error.response;

  switch (status) {
    case 401:
      Toast.show(
        data?.error || 'You are not authorized.',
        Toast.SHORT,
        toastStyle,
      );
      break;
    case 500:
      Toast.show(
        data?.error || 'Something went wrong.',
        Toast.SHORT,
        toastStyle,
      );
      break;
    case 502:
      Toast.show(
        data?.error || 'The server is down or being maintenance.',
        Toast.SHORT,
        toastStyle,
      );
      break;
    default:
      Toast.show(
        data?.error || 'An unexpected error occurred.',
        Toast.SHORT,
        toastStyle,
      );
  }
};
