// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
tests    
describe("Testing the submit functionality", () => {
    test('the fetch fails with an error', () => {
        expect.assertions(1);
        return fetchData().catch(e => expect(e).toMatch('error'));
})})