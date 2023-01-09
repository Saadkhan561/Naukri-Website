async function fetch() {
  let responseObject = { errorMessage: '', data: [] };
  try {
    const res = await fetch('https://localhost:3000/jobs');
    if (!res.ok) {
      throw new Error(`HTTP Error ${res.status} not found`);
    }
    const resData = await res.json();
    responseObject.errorMessage = '';
    responseObject.data = resData;
  } catch (err) {
    responseObject.errorMessage = err.message;
  }
  return responseObject;
}

export async function getJobs() {
  return fetch();
}
