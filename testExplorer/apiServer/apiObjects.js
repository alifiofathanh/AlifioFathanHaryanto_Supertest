const request = require("supertest"); 
const { expect } = require("chai"); 
const baseUrl = require("../globalVariable/baseUrl");

async function postMethod() {
    const response = await request(baseUrl).post("/objects").send({
        name: "Apple Vision Pro",
        data: {
            Generation: "2023",
            Price: "55000000",
            Capacity: "256 GB"
        },
    }); 
    expect(response.status).to.equal(200); 
    const id = response.body.id;
    console.log("This is the id after POST:", id);
}

async function putMethod(id){
    const response = await request(baseUrl)
        .put(`/objects/${id}`)
        .send({
            name: "Apple Vision Pro PUT",
            data: {
                Generation: "2024",
                Price: "60000000",
                Capacity: "512 GB"
            },
        })
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Apple Vision Pro PUT");
    expect(response.body.data.Generation).to.equal("2024");
    expect(response.body.data.Price).to.equal("60000000");
    expect(response.body.data.Capacity).to.equal("512 GB");
}

async function getMethod(id) {
    const response = await request(baseUrl).get(`/object/${id}`)
    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(id);
    expect(response.body.name).to.equal("Apple Vision Pro PUT");
    expect(response.body.data.Generation).to.equal("2024");
    expect(response.body.data.Price).to.equal("60000000");
    expect(response.body.data.Capacity).to.equal("512 GB");
    console.log(response.body);
}

async function patchMethod(id){
    const response = await request(baseUrl).patch(`/objects/${id}`).send({
        "name": "Apple Vision Pro (PATCH Name)"
    })
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Apple Vision Pro (PATCH Name)");
}

async function deleteMethod(id){
    const response = await request(baseUrl).delete(`/objects/${id}`)
    expect(response.body.message).to.equal(
        `The object with specified id = ${id} has been removed`
    )
    expect(response.body.error).to.equal(`The object with specified id = ${id} was not found`);
}

module.exports = { postMethod, putMethod, getMethod, patchMethod, deleteMethod };