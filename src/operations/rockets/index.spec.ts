import {Route} from 'OpenApiRouter'
import {handleRockets} from '.'

describe("Rockets Operation", () => {
    it("should return a 200 response", async() => {
        const route: Route = {
            route: "/rockets/{rocket-id}",
            operation: {
                "operationId": "rockets",
                responses: {}
            },
            pathParameters: {
                "rocketId": "5e9d0d95eda69974db09d1ed"
            }
        }
        const response = await handleRockets(route)

        expect(response).toMatchSnapshot(`Promise {}`);
    })
})