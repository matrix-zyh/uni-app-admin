const ENV = require('@/config/env.' + process.env.NODE_ENV)

let BASE_URL = ''
// #ifdef H5
BASE_URL = ENV.BASE_API_PROXY_PREFIX
// #endif
// #ifndef H5
BASE_URL = ENV.REQUEST_TYPE ? ENV.BASE_API_URL : ENV.BASE_IP_API_URL
// #endif

export { BASE_URL }
