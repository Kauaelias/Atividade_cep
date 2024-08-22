window.onload = function () {
  let bt = document.querySelector("button");
  let dados = document.querySelector("#json");

  let estado = document.getElementById("estado");
  let cidade = document.getElementById("cidade");
  let bairro = document.getElementById("bairro");
  let rua = document.getElementById("rua");
  let comp = document.getElementById("complemento");
  let numero = document.getElementById("numero");

  bt.addEventListener("click", () => {
    let cep = document.querySelector("#cep").value;
    let servidor = `https://viacep.com.br/ws/${cep}/json`;
    // let servidor = "https://viacep.com.br/ws/"+ cep +"/json";

    console.log(servidor);

    fetch(servidor)
      .then((resp) => {
        if (resp.ok) {
          // console.log(resp.status);
          return resp.json();
        }
        // resp.json();
      })
      .then((x) => {
        // Preencher campos de formulário
        
        // for (var key in x) {
        //   console.log(key, x[key])
        // }
        estado.value = x["uf"];
        cidade.value = x["localidade"];
        bairro.value = x["bairro"];
        rua.value = x["logradouro"];
        numero.value = x["logadouro"];
        comp.value = x["complemento"];



        // // criar elementos (nó)
        // let div = document.createElement("div");
        // for (var key in x) {
        //   // console.log(key , x[key])
        //   let p = document.createElement("p");

        //   let texto = document.createTextNode(`${key.toUpperCase()} : ${x[key]}`);
        //   p.appendChild(texto);
        //   div.appendChild(p);

        // }
        // dados.append(div)
      }
        //console.log(x['bairro'])
      ).catch((x) => console.error(x));
  });
};
