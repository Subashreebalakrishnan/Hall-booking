const express= require("express")

const app = express ()

const rooms=[]
const bookings =[]

app.use(express.json())





app.post("/createroom",function(req,res){

   
    rooms.push(req.body);
    res.json ({Message:"Room Created"})

});


app.get("/getallrooms",function(req,res){

   res.json(rooms)

});



app.post("/createbooking",function(req,res){

    roomid=rooms.length+1
    bookings.push(req.body);
    res.json ({Message : "Booking confirmed" })

});


app.get("/getallbookings",function(req,res){

   res.json(bookings)

});




app.listen(3000)