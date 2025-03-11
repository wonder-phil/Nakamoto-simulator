
export default class RoutesAndEndpoints {

  static LOCAL_PROXY_URL = "http://127.0.0.1:5000";

  static ROUTE_LAST_BURN_BLOCK = `${RoutesAndEndpoints.LOCAL_PROXY_URL}/burn-blocks/last`;
  static ROUTE_ONE_BURN_BLOCK = (bb_id) => `${RoutesAndEndpoints.LOCAL_PROXY_URL}/burn-blocks/${bb_id}`;

  static ROUTE_LAST_POX_CYCLE = `${RoutesAndEndpoints.LOCAL_PROXY_URL}/pox/cycles/last`;

  static ROUTE_LAST_STACKS_BLOCK = `${RoutesAndEndpoints.LOCAL_PROXY_URL}/blocks/last`;
 
  static ROUTE_LAST_TENURE_TX = `${RoutesAndEndpoints.LOCAL_PROXY_URL}/tenure-tx/last`;

 
  
}