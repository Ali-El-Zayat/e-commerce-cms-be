exports.respondWithSuccess = (message, data) => {
  return {
    success: true,
    message,
    data,
  };
};

exports.respondWithError = (message, data) => {
  return {
    success: false,
    message,
    data,
  };
};
