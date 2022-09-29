const Request = async (url, cb, opt = {}) => {
    await fetch(url, opt)
      .then(response => response.json())
      .then(data => {
        cb(data);
      });
}

export default Request;