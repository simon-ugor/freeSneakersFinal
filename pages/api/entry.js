
import dbConnect from "../../utils/dbConnect"
import Note from "../../models/Note"

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch(method) {
        case "GET":
            try {
                const notes = await Note.find({})

                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case "POST":
            try {

                const exists = await Note.findOne({ "email": req.body.email })

                if (exists) {
                    const time_now = Date.now()
                    const time_diff_seconds = (time_now - exists.time)*0.001
                    console.log(time_diff_seconds)
                    var time_remaining = 300-time_diff_seconds
                    var minutes = (Math.floor(time_remaining/60)).toString()
                    var seconds = (Math.floor(time_remaining-minutes*60)).toString()
                    if (time_diff_seconds < 300) {
                        res.status(201).json({ success: true, msg: "You have to wait " + minutes + " minutes and " + seconds + " seconds." })
                    } else if (time_diff_seconds > 300) {
                        const new_number = Math.floor(Math.random() * 10000);

                        console.log(exists.lucky_number)
                        console.log(new_number)
                        
                        if (new_number > exists.lucky_number) {
                            let update = await Note.findOneAndUpdate({ "email": exists.email }, { lucky_number: new_number, time: Date.now() }, {new: true, useFindAndModify: false})
                            res.status(201).json({ success: true, msg: "New number is bigger than your previous number " + exists.lucky_number + " and was sent it.", data: new_number })
                        } else if (new_number <= exists.lucky_number) {
                            res.status(201).json({ success: true, msg: "New number is smaller than your previous number " + exists.lucky_number + " and wasn't sent in.", data: new_number })
                        }
                        
                        
                    }
                    
                } else if (!exists) {
                    const timestamp = Date.now()
                    const lucky_nr = Math.floor(Math.random() * 10000);
                    const post = { email: req.body.email, time: timestamp, lucky_number: lucky_nr }
                    const note = await Note.create(post)
                    res.status(201).json({ success:true, msg: "Your number has been sent in!", data: lucky_nr })
                }

            } catch (error) {
                res.status(400).json({ success:false })
            }
            break
        default:
            res.status(400).json({ success:false })
            break
    }
}