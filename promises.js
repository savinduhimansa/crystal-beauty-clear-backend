/*
const { resolve } = require("dns");

function saveStudent(){
  setTimeout(()=>{
    console.log("Student saved")
  }, 5000);
}

const connectionStatus = true;

const promise = new Promise((resolve, reject) => {
  console.log("connecting to database...");
  console.log("authenticating...");
  if(connectionStatus){
    setTimeout(()=> {
      console.log("Student saved");

      resolve("Savindu")
    }, 5000);
  }
  else{
    setTimeout(() => {
      console.log("Student could not be saved");

      reject("Connection status unsuccessful")
    },5000)
  }
})

promise.then(
  (res) => {
    console.log(res);
    console.log("Promise is fullfilled");
  }
).catch(
  (err) => {
    console.log(err);
    console.log("Promise is unfulfilled");
  }
)
*/

const { resolve } = require("dns");

function getAllStudents(password){
  const p = new Promise(
    (resolve, reject) => {
      if(password == "abc"){
        setTimeout(() => {
          resolve([
            {
              name: "Malith",
              age: 20
            },
            {
              name: "Saman",
              age: 21
            },
            {
              name: "Kamal",
              age: 22
            }
          ])
        }, 5000)
      }
      else{
        setTimeout(() => {
          reject("Invalid password");
        }, 5000);
      }
    }
  );
  return p;
}

/*
getAllStudents("abc").then(
  (res) => {
    console.log(res);
  }
).catch(
  (err) => {
    console.log(err);
  }
)
*/

async function run(){
  try{
    const data = await getAllStudents("abc");
    console.log(data)
  }catch(err){
    console.log(err);
  }
}

run();
