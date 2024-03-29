// RESOLVER FUNCTIONS FOR USER RESOURCE

import { User as UserType } from '../../typings/index';
import Joi from '@hapi/joi';
import { User } from '../../models';
import { addUserSchema, updateUserSchema } from '../../validation/';

// Define Resolvers
const userResolver = {
  Query: {
    getAllUsers: async () => {
      return await User.find({});
    },
    getUserByID: async (_root: any, args: UserType) => {
      return await User.findById(args.id);
    },

    getUsersByRole: async (_root: any, args: UserType) => {
      return await User.find({ role: args.role });
    },

    getUsersByName: async (_root: any, args: UserType) => {
      const nameRegex = new RegExp('.*' + args.name + '.*', 'ig');
      return await User.find({
        $or: [{ lastName: nameRegex }, { firstName: nameRegex }]
      }).exec();
    },

    getBuyersByName: async (_root: any, args: UserType) => {
      const nameRegex = new RegExp('.*' + args.name + '.*', 'ig');
      return await User.find({
        role: 'buyer',
        $or: [{ lastName: nameRegex }, { firstName: nameRegex }]
      }).exec();
    },

    getFarmersByName: async (_root: any, args: UserType) => {
      const nameRegex = new RegExp('.*' + args.name + '.*', 'ig');
      return await User.find({
        role: 'farmer',
        $or: [{ lastName: nameRegex }, { firstName: nameRegex }]
      }).exec();
    }
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
    },

    updateUser: async (_root: any, args: any) => {
      try {
        const updateDetails: UserType = { ...args };
        delete updateDetails.id;

        const value = await Joi.validate(updateDetails, updateUserSchema, {
          abortEarly: false
        });

        const updatedUser = await User.findByIdAndUpdate(args.id, value, {
          new: true
        });
        return updatedUser;
      } catch (error) {
        return;
      }
    },

    deleteUser: async (_root: any, args: any) => {
      try {
        return await User.findByIdAndDelete(args.id);
      } catch (error) {
        return error;
      }
    }
  }
};

export default userResolver;
