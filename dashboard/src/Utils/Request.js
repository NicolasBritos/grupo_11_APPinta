const Request = async (url, cbSuccess, cbError = null) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        cbSuccess(data);
      });
}

export default Request;