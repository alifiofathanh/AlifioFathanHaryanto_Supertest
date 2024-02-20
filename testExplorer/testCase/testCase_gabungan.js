const { postMethod, putMethod, getMethod, patchMethod, deleteMethod } = require("../apiServer/apiObjects");

describe("Testing API restful", function () {
    it("Test POST", async function(){
        postMethod();
    });
    it("Test PUT", async function(){
        putMethod();
    });
    it("Test GET", async function(){
        getMethod();
    });
    it("Test PATCH", async function(){
        patchMethod();
    });
    it("Test DELETE", async function(){
        deleteMethod();
    });
})