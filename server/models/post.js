import mongoose from 'mongoose';

let PostSchema = new mongoose.Schema({
  title: {type: String, required: true}
});

export default mongoose.model('Post', PostSchema);
