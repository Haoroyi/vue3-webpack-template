const env = process.env.NODE_ENV || 'prod'
const config = {
  development: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/76ea7546667b6da1ed69d32764ad991b/api'
  },
  test: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/76ea7546667b6da1ed69d32764ad991b/api'
  },
  prod: {
    baseApi: '/',
    mockApi: ''
  }
}

export default {
  env,
  nameSpace: 'office',
  mock: true,
  ...config[env]
}
