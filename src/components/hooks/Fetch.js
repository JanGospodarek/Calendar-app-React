export default async function Fetch(path, data) {
  return new Promise((resolve, reject) => {
    try {
      fetch(path, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
}
