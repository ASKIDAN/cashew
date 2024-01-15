import { TOKEN_KEY } from '../constants'

export const validateToken: () => Promise<boolean> = async () => {
  const token = localStorage.getItem(TOKEN_KEY)
  // prefer store token in cookies(httpOnly)
  if (token) {
    // make request to /me
    return await Promise.resolve(true)
  }
  return await Promise.resolve(false)
}
