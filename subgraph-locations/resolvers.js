const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    // see return value of Reviews.location resolver in `subgraph-reviews/resolvers.js`
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
};

module.exports = resolvers;
