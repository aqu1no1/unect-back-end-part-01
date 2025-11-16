import mongoose, { Schema } from "mongoose";
import IStudent from "../models/student.models";

const studentSchema = new Schema<IStudent>(
  {
    name: { type: String, required: true, maxLength: 256 },
    age: { type: Number, required: true },
    ra: { type: String, required: true, maxLength: 7 },
    cpf: { type: String, required: true, maxLength: 11 },
  },
  { timestamps: true }
);

export const Student = mongoose.model<IStudent>("Student", studentSchema);
