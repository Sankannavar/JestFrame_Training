import request from "supertest";
import app from "../src/cartApi"


describe("cart API",()=>{
    it("Should add item to cart",async()=>{
        const response =await request(app).post("/cart")
        .send({id:1,name:"PC",qty:2});
        expect(response.status).toBe(201);
        expect(response.body.cart).toHaveLength(1);
    });

     it("Should return all item in cart",async()=>{
        const response =await request(app).get("/cart");
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0);
    });

    it("Should delete an item in cart",async()=>{
        const response =await request(app).delete("/cart/1");
        expect(response.status).toBe(200);
        expect(response.body.cart).toHaveLength(0);
    });
})

