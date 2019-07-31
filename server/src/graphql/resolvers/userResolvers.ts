// RESOLVER FUNCTIONS FOR USER RESOURCE

import { User as UserType } from '../../typings/index';
import Joi from '@hapi/joi';
import { User } from '../../models';
import { addUserSchema } from '../../validation/';

// Define Resolvers
const userResolver = {
  Mutation: {
    addUser: async (_root: any, args: UserType) => {
      try {
        const value = await Joi.validate(args, addUserSchema, {
          abortEarly: false
        });

        const newUser = new User({
          firstName: value.firstName,
          password: value.password
        });

        const { id, firstName } = await newUser.save();

        return { id, firstName };
      } catch (err) {
        console.log(err);
        return;
      }
    }
  }
};

export default userResolver;
