var retrieveJSON = url => {
  return fetch(url).then(response => {
    return response.json()
  }).then(json => {
    return json
  })
}


export default retrieveJSON;
