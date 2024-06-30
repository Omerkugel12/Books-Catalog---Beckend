function buildCriteria(query) {
  const criteria = {};

  if (query.genres) {
    criteria.genres = { $regex: query.genres, $options: "i" };
  }

  if (query.title) {
    criteria.title = { $regex: query.title, $options: "i" };
  }

  return criteria;
}

module.exports = { buildCriteria };
