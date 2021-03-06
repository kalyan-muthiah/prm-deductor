const given = require("./given");
const orchestrator = require("../src/orchestrator");

describe('When extracting all files', () => {
    let result;

    beforeAll(async () => {
        let masterFileContent = given.fragmentContent;

        result = await orchestrator.doSomething(masterFileContent);
    })

    test("it should return the number of files extracted", async () => {
        expect(result).toBe(6);
    });

});