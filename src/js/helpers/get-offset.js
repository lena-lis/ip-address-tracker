function getOffset(map) {
  const offsetY = map.getSize().y * 0.1;
  map.panBy([0, -offsetY], {animate: false});
}

export {getOffset};