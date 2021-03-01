

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://restcountries.eu/rest/v2/name/${choice}`
fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#flag1').src = data[0].flag

    })

    .catch(err => {
      console.log(`error ${err}`)
    })
  }




