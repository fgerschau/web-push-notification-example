import Subscription, { ISubscription } from '../models/SubscriptionModel';

export const create = async (subscription: ISubscription): Promise<ISubscription> => {
  const newSubscription = new Subscription(subscription);
  const savedSubscription = await newSubscription.save();
  return savedSubscription.toObject();
};

export const deleteByEndpoint = async (endpoint: string): Promise<boolean> => {
  const result = await Subscription.remove({ endpoint });
  return result.ok === 1 && result.deletedCount > 0;
};

export const getAll = async (): Promise<ISubscription[]> => {
  const subscriptions = await Subscription.find();
  return subscriptions;
};
