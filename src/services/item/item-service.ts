export const fetchItem = async (text: string) => {
  const requestOptions = {
    method: 'GET',
  };
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${text}`,
    requestOptions,
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return response;
  }
};
