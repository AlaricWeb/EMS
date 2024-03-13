import path from 'node:path'
import { createDefineMock } from 'vite-plugin-mock-dev-server'
import { loadEnv } from "vite";
export const definePostMock = createDefineMock((mock) => {
 const env = loadEnv('mock','');
  mock.url = path.join(env.VITE_BASE_URL, mock.url)
})