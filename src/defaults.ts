import getUserAgent = require('universal-user-agent')

import version = require('./version')
const userAgent = `octokit-endpoint.js/${version} ${getUserAgent()}`

import { EndpointDefaultOptions } from './types'

export = {
  method: 'GET',
  baseUrl: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': userAgent
  },
  mediaType: {
    format: '',
    previews: [] as string[]
  }
} as EndpointDefaultOptions