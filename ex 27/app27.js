function fetchuserdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success = true;
      if (success) {
        resolve({ name: "John Doe", age: 30 });
      } else {
        reject("Error fetching user data");
      }
    }, 2000);
  });
}
fetchuserdata()
  .then((data) => {
    console.log("User data fetched:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
