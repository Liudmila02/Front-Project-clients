const axios = require('axios')
const qs = require('qs')

exports.handler = () =>
axios("/.netlify/functions/node-fetch", { headers: { accept: "Accept: application/json" } })
  .then((x) => x.json())
  .then(({ msg }) => setMsg(msg))
// handler = async function(event, context) {
//   // apply our function to the queryStringParameters and assign it to a variable
//   const API_PARAMS = qs.stringify(event.queryStringParameters)
//   console.log('API_PARAMS', API_PARAMS)
//   // Get env var values defined in our Netlify site UI

//   // TODO: customize your URL and API keys set in the Netlify Dashboard
//   // this is secret too, your frontend won't see this
//   const { API_SECRET = 'shiba' } = process.env
//   const URL = `https://dog.ceo/api/breed/${API_SECRET}/images`

//   console.log('Constructed URL is ...', URL)

//   try {
//     const { data } = await axios.get('/')
//     // refer to axios docs for other methods if you need them
//     // for example if you want to POST data:
//     //    axios.post('/user', { firstName: 'Fred' })
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data)
//     }
//   } catch (error) {
//     const { status, statusText, headers, data } = error.response
//     return {
//       statusCode: error.response.status,
//       body: JSON.stringify({ status, statusText, headers, data })
//     }
//   }
// }
