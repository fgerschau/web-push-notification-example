import Subscription, { ISubscription } from '../models/SubscriptionModel';

export const create = async (subscription: ISubscription): Promise<ISubscription> => {
  const newSubscription = new Subscription(subscription);
  const savedSubscription = await newSubscription.save();
  return savedSubscription.toObject();
};
