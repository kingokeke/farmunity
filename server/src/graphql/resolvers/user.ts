import { UserType } from './../../typings/index';
import User from '../../models/User';
// Define Resolvers
const userResolver = {
  Mutation: {
    addUser: async (_root: any, args: UserType) => {
      const newUser = new User({
        firstName: args.firstName
      });
      const savedUser = await newUser.save();
      const { id, firstName } = savedUser;
      return { id, firstName };
    }
  }
};

export default userResolver;
