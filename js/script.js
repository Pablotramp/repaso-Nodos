const addArticle = (nombre,precio) => {

  const articuloEl = document.querySelector('#nombre')
  let expRegArt = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  
  const precioEl = document.querySelector('#precio')
  let expRegPre = /^\d*\.?\d{0,2}€$/

  
  if (!expRegArt.test(articuloEl.value) || !expRegPre.test(precioEl.value)) {

    if (!document.querySelector(".miError")) { 
      let liEl = document.createElement("li");
      let errorEl = document.querySelector(".campos");
      liEl.classList.add("miError")
      liEl.innerHTML=`<p> el artículo o el precio "NO" son válidos</p>`;
      errorEl.append(liEl);
    } else {
      return
    }

  } else {

    if (document.querySelector(".miError")) { 
      let errorEl = document.querySelector(".miError");
      errorEl.remove();
    } 

    var nombre = articuloEl.value
    var precio = precioEl.value

    let tbodyEl=document.querySelector("#tbody");
    let trEl=document.createElement("tr");
    trEl.innerHTML=`<td>${nombre}</td><td>${precio}</td>`;
    tbodyEl.append(trEl);
  }
}

document.querySelector('#formulario').addEventListener('submit', (e) => {
  e.preventDefault()
})

document.querySelector('#cargar')
.addEventListener('click', addArticle)
