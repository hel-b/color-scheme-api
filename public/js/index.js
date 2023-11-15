document.querySelector('button').addEventListener('click', apiReq)
async function apiReq() {
  let hexIn = document.querySelector('input').value
  if (hexIn[0] == '#') hexIn = hexIn.slice(1)
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
    changeColor(key)
  }
  document.querySelector('.output').classList.remove('hidden')
  document.querySelector('.colorValue').classList.remove('hidden')
  function changeColor(scheme) {
    const colors = data[scheme]
    const ul = document.querySelector(`.${scheme} ul`)
    while (ul.firstChild) ul.removeChild(ul.firstChild)
    colors.forEach(v => {
      const li = document.createElement('li')
      li.textContent = `#${v}`
      li.style.backgroundColor = `#${v}`
      ul.appendChild(li)
    })
  }
}
