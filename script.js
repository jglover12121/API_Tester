//url sets
const urlInput = document.getElementById("url")
const urlSetButton = document.getElementById("setURL")
//Specific apidata sets
const specificDataInput = document.getElementById("specificData")
const specificDataSetButton = document.getElementById("setData")
//Data to retreieve setter
const retrievedData = document.getElementById("retrievedData")
const getDataButton = document.getElementById("getData")
//send data
const dataToSend = document.getElementById("setDataToSend")
const sendDataButton = document.getElementById("sendData");

/*
setURL
setDataToGrab
getData
sendData
*/
var url = '';

function setURL() {
  url = urlInput.value;
}
function setDataToGrab() {
  url = `${url}${specificDataInput.value}`;
}
async function getData() {
  getDataButton.innerHTML = "getting...";
  try {
    const response = await fetch(url);
    const data = await response.text();
    console.log(data);
    retrievedData.innerHTML = data;
    getDataButton.innerHTML = "gotten";
  } catch (err) {
    console.error(err);
    getDataButton.innerHTML = "error";
  } finally {
    setTimeout(() => {
      getDataButton.innerHTML = "get";
    }, 3000)
  }
}
async function sendData(){
  sendDataButton.innerHTML = "sending...";
  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: dataToSend.value
    })
    const data = await response.text();
    console.log(data);
    dataToSend.value = "";
    sendDataButton.innerHTML = "sent";
  } catch(err) {
    console.log(err);
    sendDataButton.innerHTML = "error";
  } finally {
    setTimeout(() => {
      sendDataButton.innerHTML = "send";
    }, 3000)
  }
}


urlSetButton.addEventListener('click', setURL);
specificDataSetButton.addEventListener('click', setDataToGrab);
getDataButton.addEventListener('click', getData)
sendDataButton.addEventListener('click', sendData)