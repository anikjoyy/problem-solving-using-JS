function getStatus(isBusy) {
  var msg = isBusy ? 'busy' : 'available';
  var status = { msg };
  return {
    status: msg,
  };
}
