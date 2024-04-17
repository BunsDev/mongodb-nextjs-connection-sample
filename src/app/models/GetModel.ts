import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const getSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
});
// how our get request looks like
interface IGet {
  name: string;
  type: string;
}

interface IGetDocument extends IGet, Document {}
interface IGetModel extends Model<IGetDocument> {}

//getSchema->Document->Model

// const GetModel: IGetModel = Mongoose.model<IGetDocument>("get", getSchema);

const GetModel: IGetModel =
  Mongoose.models.get || Mongoose.model<IGetDocument>("get", getSchema);

export default GetModel;
