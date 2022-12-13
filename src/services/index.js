import hyRequest from './request'

/**
 * @returns 
 */
export function getPowerScreenData() {
  return hyRequest.get({
    url: "/powerscreen"
  })
}
