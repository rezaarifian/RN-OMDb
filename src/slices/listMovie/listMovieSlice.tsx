import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';

// service
import {get} from '@services';

// utils
import {showToast} from '@utils';

export const getListMovie = createAsyncThunk<MovieListProps[]>(
  'GET/ListMovie',
  async (_, {rejectWithValue}) => {
    try {
      const response = await get('', {
        apikey: 'b5cb0fd',
        s: 'movie',
        y: 2024,
      });
      return response?.Search as MovieListProps[];
    } catch (error) {
      showToast(error as string);
      return rejectWithValue({message: String((error as Error)?.message)});
    }
  },
);

type InitStateProps = {
  data: MovieListProps[];
  isLoading: boolean;
  isError: boolean;
  error: SerializedError;
};

const initialState: InitStateProps = {
  data: [],
  isLoading: false,
  isError: false,
  error: {} as SerializedError,
};

export const listMovieSlice = createSlice({
  name: 'getListMovie',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getListMovie.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getListMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getListMovie.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
    });
  },
});

export const {reset} = listMovieSlice.actions;
export default listMovieSlice.reducer;
