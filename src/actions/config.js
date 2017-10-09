import { createClient } from 'contentful'

// creates client for Contentful API
const API_SPACE_ID = process.env.REACT_APP_CONTENTFUL_API_SPACE_ID
const API_TOKEN = process.env.REACT_APP_CONTENTFUL_API_TOKEN

export const client = createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
})

// to be used later with newest version of React-Snapshot v2,
// to dynamically sync layout and content before fetching data,
// since everything will be prerendered to static markup,
// during the build process.
// ------------------------------------------------------------

// client.sync({
//   initial: true,
//   content_type: 'page',
// })
// .then((response) => console.log({
//   entries: response.entries,
//   assets: response.assets,
//   nextSyncToken: response.nextSyncToken
// }))
// .catch(console.error)

// client.getEntries({
//   content_type: 'page',
//   include: 4,
//   'sys.id': '4OQitB7Enm466COeq0meCI',
// })
// .then((response) => console.log('getEntries', response.items))
// .catch(console.error)
