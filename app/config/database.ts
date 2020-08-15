import mongoose from 'mongoose';

export default async () => {
  // Connect to the database
  try {
    await mongoose.connect('mongodb://localhost/web-push-notifications', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.set('useCreateIndex', true);
  } catch (e) {
    console.error(`Couldn't connect to the database: ${e}`);
    process.exit(1);
  }
};
