import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscription extends Document {
  endpoint: string;
  expirationTime?: number;
  keys: {
    auth: string;
    p256dh: string;
  }
}

const SubscriptionModel = new Schema({
  endpoint: { type: String, unique: true, required: true },
  expirationTime: { type: Number, required: false },
  keys: {
    auth: String,
    p256dh: String,
  },
});

export default mongoose.model<ISubscription>('Subscription', SubscriptionModel);
