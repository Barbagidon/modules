const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });
        return await res.text();
    };



///get request:



getData = async (url, data) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}. Error: ${res.status}`);
    }
    return await res.text();
  };
