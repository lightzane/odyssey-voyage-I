const resolvers = {
  Query: {
    latestReviews: (_, __, {dataSources}) => {
      return dataSources.reviewsAPI.getLatestReviews();
    },
  },
  Mutation: {
    submitReview: (_, {locationReview}, {dataSources}) => {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {code: 200, success: true, message: 'success', locationReview: newReview};
    }
  },
  Review: {
    // see also Location resolveReference on `subgraphs-locations/resolver.js`
    location: ({ locationId }) => {
      return { id: locationId }
    }
  },
  Location: {
    overallRating: ({id}, _, {dataSources}) => {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviewsForLocation: ({id}, _, {dataSources}) => {
      return dataSources.reviewsAPI.getReviewsForLocation(id);
     },
  },
};

module.exports = resolvers;
