import Note from "../../models/Note.js";
import connectDb from '@/middleware/mongoose.js'

const handler = async (req, res) => {
    if(req.method == 'DELETE'){
        let n = await Note.findByIdAndDelete(req.body._id)
        res.status(200).json({success: "Success"})
    }
    else{
        res.status(400).json({error: "Bad Request"})
    }
}

export default connectDb(handler);