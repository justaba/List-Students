import mongoose from "mongoose";

const urlDB = 'localhost:27017/studentlist';

const db = {
  connect() {
    mongoose
      .connect(`mongodb://${urlDB}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log(`Database connection`);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default db;
