// RESOLVER FUNCTIONS FOR USER RESOURCE

import { User as UserType } from '../../typings/index';
import { User } from '../../models';

// Define Resolvers
const userResolver = {
  Mutation: {
    addUser: async (_root: any, args: UserType) => {
      const newUser = new User({
        firstName: args.firstName,
        password: args.password
      });
      const { id, firstName } = await newUser.save();
      return { id, firstName };
    }
  }
};

export default userResolver;
