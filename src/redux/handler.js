export const handlePending = ({ campersrent }) => {
  campersrent.loading = true;
  campersrent.error = null;
};

export const handleRejected = ({ campersrent }, { payload }) => {
  campersrent.loading = false;
  campersrent.error = payload;
};
