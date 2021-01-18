const apiUrl = "https://api.thecatapi.com/v1/";
const favouriteUrl = apiUrl + "favourites/";
const uploadUrl = apiUrl + "images/upload";
const votesUrl = apiUrl + "votes";
const listingUrl = apiUrl + "images?limit=10&order=desc";

export const upload = async (selectedFile) => {
  if (!selectedFile) return;
  const body = new FormData();
  body.append("file", selectedFile);

  try {
    const response = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
      body,
    });
    return await response.json();
  } catch (e) {
    return e.message;
  }
};

export const listImages = async (page) => {
  const response = await fetch(listingUrl, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });

  const result = await response.json();
  if (result.status && result.status !== "200") throw Error(result.message);
  return result;
};

export const listFavourites = async () => {
  const response = await fetch(favouriteUrl, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  const result = await response.json();
  if (result.status && result.status !== "200") throw Error(result.message);
  return result;
};

export const listVotes = async () => {
  const response = await fetch(votesUrl, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  const result = await response.json();
  if (result.status && result.status !== "200") throw Error(result.message);
  return result;
};

export const addFavourite = async (id) => {
  const response = await fetch(favouriteUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
    body: JSON.stringify({image_id: id}),
  });
  return await response.json();
};

export const unFavourite = async (id) => {
  const response = await fetch(favouriteUrl + id, {
    method: "DELETE",
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  return await response.json();
};

export const addVote = async (image_id, value) => {
  const response = await fetch(votesUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
    body: JSON.stringify({
      sub_id: "" + image_id,
      image_id: "" + Math.random(),
      value,
    }),
  });
  return await response.json();
};

export const deleteImage = async (id) => {
  try {
    const response = await fetch(apiUrl + "images/" + id, {
      method: "DELETE",
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    });
    return await response.json();
  } catch (e) {
    return e.message;
  }
};
