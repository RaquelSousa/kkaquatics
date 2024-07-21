export async function sendEmail(data: any) {
  const apiEndpoint = "/api/email";

  return await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
