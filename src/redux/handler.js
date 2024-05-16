export const handlePending = ({ campers }) => {
  campers.loading = true;
  campers.error = null;
};

export const handleRejected = ({ campers }, { payload }) => {
  campers.loading = false;
  campers.error = payload;
};
