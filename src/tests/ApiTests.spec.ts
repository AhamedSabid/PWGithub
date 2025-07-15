import { test, expect } from "@playwright/test";
import createUserBody from "../data/CreateUserPOSTReq.json"

//update createUserBody email id with random email id
createUserBody.email = `test.${Math.floor(Math.random() * 10000)}@example.com`;
var userId:any;

test("Get users", async ({ request }) => {

    const respone = await request.get("https://gorest.co.in/public/v2/users")
    console.log(await respone.json());
    expect(respone.status()).toBe(200);

});

test("Create user POST request", async ({ request }) => {
    const respone = await request.post("https://gorest.co.in/public/v2/users", {
        data: createUserBody,
        headers: {
            'Authorization': 'Bearer 40d9845447f11f649bcc09530837f5f57e1355ec87517de519b34022b744a468',
            'Content-Type': 'application/json'
        }
    });
    console.log(await respone.json());
    expect(respone.status()).toBe(201);
    expect(await respone.json()).toHaveProperty("id");
    expect(await respone.json()).toHaveProperty("name", createUserBody.name);
  //extract id from response
    var user = (await respone.json()).id;
    userId = user;
    expect(userId).toBeDefined();
    console.log("Inside POST Test"+userId);

});

test("Get user specific", async ({ request }) => {

    console.log("Inside GET user"+userId);
    const respone = await request.get('https://gorest.co.in/public/v2/users/'+userId);

    expect(respone.status()).toBe(200);
    expect(await respone.json()).toHaveProperty("id");
    expect(await respone.json()).toHaveProperty("name", createUserBody.name);

});