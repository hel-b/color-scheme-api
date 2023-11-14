document.querySelector('button').addEventListener('click', apiReq)
async function apiReq() {
  const hexIn = document.querySelector('input').value
  try {
    const res = await fetch(`/api/${hexIn}`)
    const data = await res.json()
    showColors(data)
  } catch (error) {
    console.log(error)
  }
}

function showColors(data) {
  for (const key in data) {
    if (key == 'color') {
      const span = document.querySelector('span.colorValue')
      span.textContent = `#${data[key]}`
      span.style.backgroundColor = `#${data[key]}`
    } else {
      changeColor(key)
    }
  }
  function changeColor(scheme) {
    const colors = data[scheme]
    const ul = document.querySelector(`.${scheme} ul`)
    colors.forEach(v => {
      const li = document.createElement('li')
      li.textContent = `#${v}`
      li.style.backgroundColor = `#${v}`
      ul.appendChild(li)
    })
  }
}
