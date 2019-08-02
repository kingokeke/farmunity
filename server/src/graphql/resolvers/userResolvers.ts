// RESOLVER FUNCTIONS FOR USER RESOURCE

import { User as UserType } from '../../typings/index';
import Joi from '@hapi/joi';
import { User } from '../../models';
import { addUserSchema } from '../../validation/';

// Define Resolvers
const userResolver = {
  Query: {
    getAllUsers: async () => User.find({}),
    getUserByID: async (_root: any, args: UserType) => User.findById(args.id)
  },

  Mutation: {
    addUser: async (_root: any, args: UserType) => {
      try {
        const value = await Joi.validate(args, addUserSchema, {
          abortEarly: false
        });

        const userExists = await User.exists({ email: value.email });
        if (userExists) throw Error('Email already exists in database');

        const newUser = new User({
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          phone: value.phone,
          password: value.password,
          role: value.role,
          streetAddress: value.streetAddress,
          localGovt: value.localGovt,
          state: value.state,
          profilePic: value.profilePic
        });

        const {
          id,
          firstName,
          lastName,
          email,
          phone,
          role,
          streetAddress,
          localGovt,
          state,
          profilePic
        } = await newUser.save();

        return {
          id,
          firstName,
          lastName,
          email,
          phone,
          role,
          streetAddress,
          localGovt,
          state,
          profilePic
        };
      } catch (err) {
        return err;
      }
    }
  }
};

export default userResolver;
