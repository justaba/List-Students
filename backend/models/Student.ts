import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {
      name: {
          type: String,
          required: true
      },
      date: {
          type: String,
          required: true
      },
      estimate: {
          type: String,
          required: true
      }  
    }
);

const Student = mongoose.model('Student', studentSchema);

export default Student;