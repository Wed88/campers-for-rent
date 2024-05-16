import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './thunk';
import { handlePending, handleRejected } from './handler';

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    campersrent: {
      campers: [],
      loading: false,
      error: null,
      loadMore: false,
      currentPage: 1,
      searchLocation: '',
    },
    currentCamper: null,
    favorites: [],
    locationFilter: '',
    toolsFilter: [],
    activeTab: 'Features',
    booked: [],
  },
  reducers: {
    updateBooked: (state, { payload }) => {
      state.booked = payload;
    },
    updateActiveTab: (state, { payload }) => {
      state.activeTab = payload;
    },
    updateCurrentCamper: (state, { payload }) => {
      state.currentCamper = payload;
    },
    updateFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    updateLocationFilter: (state, { payload }) => {
      state.locationFilter = payload;
    },
    addToolsFilter: (state, { payload }) => {
      state.toolsFilter = [...state.toolsFilter, payload];
    },
    removeToolsFilter: (state, { payload }) => {
      state.toolsFilter = state.toolsFilter.filter(tool => tool !== payload);
    },
    updateCurrentPage: ({ campersrent }, { payload }) => {
      campersrent.currentPage = payload;
    },
    updateSearchLocation: ({ campersrent }, { payload }) => {
      campersrent.searchLocation = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, ({ campersrent }, { payload }) => {
        campersrent.loading = false;
        campersrent.loadMore = payload.length === 4;
        if (campersrent.currentPage > 1) {
          campersrent.campers = [...campersrent.campers, ...payload];
        } else {
          campersrent.campers = payload;
        }
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const campersReducer = camperSlice.reducer;
export const {
  addToolsFilter,
  removeToolsFilter,
  updateCurrentPage,
  updateSearchLocation,
  updateLocationFilter,
  updateFavorites,
  updateCurrentCamper,
  updateActiveTab,
  updateBooked,
} = camperSlice.actions;
