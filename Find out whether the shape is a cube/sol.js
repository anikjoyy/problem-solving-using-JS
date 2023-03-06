var cubeChecker = function (volume, side) {
  if (Math.cbrt(volume) % side === 0 && volume > 0 && side > 0) {
    return true;
  } else {
    return false;
  }
};
