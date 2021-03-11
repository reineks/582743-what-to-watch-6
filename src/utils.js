

export const getRankLabel = (rank) => {

  if (rank <= 3) {
    return `Bad`;
  } else if (rank <= 5) {
    return `Normal`;
  } else if (rank <= 8) {
    return `Good`;
  } else if (rank <= 8) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};
