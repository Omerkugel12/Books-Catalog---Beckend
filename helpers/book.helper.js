function buildCriteria(query) {
  const criteria = {};

  if (query.genres) {
    criteria.genres = { $regex: query.genres, $options: "i" };
  }
  return criteria;
}

module.exports = { buildCriteria };
