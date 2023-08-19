// let promise = fetch(url,[options])

// let response = await fetch(url)

// if(response.ok){
//     // get the response body
//     let json = await response.json();
// } else {
//     console.log('HTTP-Error' + response.status)
// }

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = fetch(url);
// let commit = response.json()
// console.log(commit[0].author.login)

fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
)
  .then((response) => response.json())
  .then((commit) => console.log(commit[0].author.login));

// let user = {
//   name: "John",
//   surname: "Smith",
// };

// let response = fetch("/article/fetch/post/user", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8",
//   },
//   body: JSON.stringify(user),
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result.message));

// let result = response.json();
// console.log(result.message);

async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

getUsers('adetorodev')
