import mongoose, { Schema } from "mongoose";

interface IStudent {
  _id?: string;
  name: string;
  age: number;
  ra: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true, maxLength: 256 },
  age: { type: Number, required: true },
  ra: { type: String, required: true, maxLength: 7 },
  cpf: { type: String, required: true, maxLength: 11 },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;
