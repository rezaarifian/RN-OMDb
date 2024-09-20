import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';

// service
import {get} from '@services';

// utils
import {showToast} from '@utils';

type PayloadProps = {
  payload: {
    movId: string;
  };
};

export const getMovieDetails = createAsyncThunk(
  'GET/MovieDetails',
  async ({payload}: PayloadProps, {rejectWithValue}) => {
    try {
      const response = await get('', {
        apikey: 'b5cb0fd',
        i: payload?.movId,
      });
      return response as MovieDetailProps;
    } catch (error) {
      showToast(error as string);
      return rejectWithValue({message: String((error as Error)?.message)});
    }
  },
);

type InitStateProps = {
  data: MovieDetailProps;
  isLoading: boolean;
  isError: boolean;
  error: SerializedError;
};

const initialState: InitStateProps = {
  data: {} as MovieDetailProps,
  isLoading: false,
  isError: false,
  error: {} as SerializedError,
};

export const movieDetailsSlice = createSlice({
  name: 'getMovieDetails',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
    });
  },
});

export const {reset} = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
