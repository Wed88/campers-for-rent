export const selectCampers = state => state.campers.campersrent.items;
export const selectLoading = state => state.campers.campersrent.loading;
export const selectError = state => state.campers.campersrent.error;
export const selectLoadMore = state => state.campers.campersrent.loadMore;
export const selectCurrentPage = state => state.campers.campersrent.currentPage;
export const selectSearchLocation = state =>
  state.campers.campersrent.searchLocation;
export const selectFavorites = state => state.campers.favorites;
export const selectLocationFilter = state => state.campers.locationFilter;
export const selectToolsFilter = state => state.campers.toolsFilter;
export const selectCurrentCamper = state => state.campers.currentCamper;
export const selectActiveTab = state => state.campers.activeTab;
export const selectBooked = state => state.campers.booked;
