import Subscription, {ISubscription} from '../models/SubscriptionModel';
import {LeanDocument} from "mongoose";

export const create = async (subscription: ISubscription): Promise<LeanDocument<ISubscription>> => {
  const newSubscription = new Subscription(subscription);
  const savedSubscription = await newSubscription.save();
  return savedSubscription.toObject();
};

export const deleteByEndpoint = async (endpoint: string): Promise<boolean> => {
  const result = await Subscription.remove({ endpoint });
  return result.ok === 1 && result.deletedCount > 0;
};

export const getAll = async (): Promise<ISubscription[]> => {
  return Subscription.find();
};
