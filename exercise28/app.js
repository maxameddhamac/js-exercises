async function fetchDataAsync() {
  try {
    const message = await fetchDataWithPromise();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
