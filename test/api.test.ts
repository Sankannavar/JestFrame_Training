import request from "supertest";
import app from "../src/cartApi"


describe("cart API",()=>{
//reset cart before each testr
beforeEach(()=>{
    (global as any).cart=[];
});

    it("Should add item to cart",async()=>{
        const response =await request(app).post("/cart")
        .send({id:1,name:"PC",qty:2});
        expect(response.status).toBe(201);
        expect(response.body.cart).toHaveLength(1);
    });

     it("Should not add duplicate item to cart",async()=>{
        await request(app).post("/cart")
        .send({id:1,name:"PC",qty:2});
       const response =await request(app).post("/cart")
        .send({id:1,name:"PC",qty:2});
        expect(response.status).toBe(409);
    });

      it("Should update an item to cart",async()=>{
        await request(app).post("/cart").send({id:1,name:"PC",qty:2});
       const response =await request(app).put("/cart/1").send({qty:5});
        expect(response.status).toBe(200);
    });

     it("Should return 404 if updating non existing item to cart",async()=>{
       const response =await request(app).put("/cart/99").send({qty:5});
        expect(response.status).toBe(404);
    });

     it("Should return all item in cart",async()=>{
        const response =await request(app).get("/cart");
        expect(response.status).toBe(200);
        //expect(response.body.length).toBeGreaterThanOrEqual(0);
    });

    it("Should delete an item in cart",async()=>{
         await request(app).post("/cart").send({id:1,name:"PC",qty:2});
        const response =await request(app).delete("/cart");
        expect(response.status).toBe(200);
        //expect(response.body.cart).toHaveLength(0);
    });

     it("Should reject bad payload cart",async()=>{
        const response =await request(app).post("/cart").send({id:3});
        expect(response.status).toBe(400);
    });  

     it("Should clear entries cart",async()=>{
         await request(app).post("/cart").send({id:1,name:"PC",qty:2});
         await request(app).post("/cart").send({id:1,name:"mouse",qty:1});
        const response =await request(app).delete("/cart");
        expect(response.status).toBe(200);
        //expect(response.body.cart).toHaveLength(0);
    });   
    
     it("Should reject with negative  quantity cart",async()=>{
         const response =await request(app).post("/cart").send({id:1,name:"mouse",qty:-1});
         console.log(response.body.cart)
        expect(response.status).toBe(400);
    });   
    
     it("Should reject with non numeric  quantity cart",async()=>{
         const response =await request(app).post("/cart").send({id:1,name:"mouse",qty:"two"});
        expect(response.status).toBe(400);
    });  

     it("Should return empty array if cart is empty",async()=>{
         const response =await request(app).get("/cart");
        expect(response.body).toEqual([]);
    });  

    it("Should delete non existing item",async()=>{
         const response =await request(app).delete("/cart");
         console.log(response.body.cart);
        expect(response.body.cart).toEqual([]);
    });  

     it("Should allow same name with different id",async()=>{
         await request(app).post("/cart").send({id:1,name:"mouse",qty:1});
         await request(app).post("/cart").send({id:2,name:"mouse",qty:1});
         const response =await request(app).get("/cart");
        expect(response.body).toHaveLength(2);
    });   
});

