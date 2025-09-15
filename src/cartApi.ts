import express, {Request, Response} from "express";

const app=express();
app.use(express.json());

let cart:{id:number;name:string; qty:number}[]=[];

///Add item to cart
app.post("/cart",(req:Request,res:Response)=>{
    const{id,name,qty}=req.body;
    cart.push({id,name,qty});
    res.status(201).json({message:"Item added",cart});
});

//Get all items
app.get("/cart",(req:Request,res:Response)=>{
   res.json(cart);
});

//Delete item
app.delete("/cart",(req:Request,res:Response)=>{
    const id=parseInt(req.params.id);
    cart=cart.filter((item)=>item.id!==id);
    res.json({message:"Item removed",cart});
});
export default app;