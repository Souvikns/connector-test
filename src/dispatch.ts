import { Route } from "OpenApiRouter";
import { handleHello } from "operations/hello";
import { handleRockets } from "operations/rockets";

export interface Result {
  body?: any;
  status: number;
  headers?: Record<string, string>;
}

export const dispatch = async (route: Route): Promise<Result | null> => {
  switch (route.operation.operationId) {
    case "hello":
      return await handleHello(route);
    case "rockets":
        return await handleRockets(route)
    default:
      return null;
  }
};
