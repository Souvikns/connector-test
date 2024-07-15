import { Result } from 'dispatch'
import { Route } from 'OpenApiRouter'
import { SpaceXService } from '../../services/spaceX'

const spaceXService = new SpaceXService()

export const handleRockets = async (_route: Route): Promise<Result | null> => {
  try {
    const rocket = await spaceXService.getRocketById(
      _route.pathParameters?.rocketId
    )
    return {
      status: 200,
      body: rocket,
    }
  } catch (error) {
    return {
      status: 400,
      body: 'Error',
    }
  }
}
