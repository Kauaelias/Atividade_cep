window.onload = function () {
  let bt = document.querySelector("button");
  let dados = document.querySelector("#json");
  let endereco = document.getElementById("endereco");

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
        endereco.value = x["logradouro"] || "";

        let par = document.createElement("p"); // receba
        let par1 = document.createElement("p"); //receba
        let par2 = document.createElement("p"); //receba
        let par3 = document.createElement("p"); //receba
        let par4 = document.createElement("p"); //receba
        let par5 = document.createElement("p"); //receba
        let par6 = document.createElement("p"); //receba
        let par7 = document.createElement("p"); //receba
        let par8 = document.createElement("p"); //receba
        let par9 = document.createElement("p"); //receba
        let par10 = document.createElement("p"); //receba

        let texto = document.createTextNode(`Cep: ${x['cep']}`)
        let texto1 = document.createTextNode(`Endereço: ${x['logradouro']}`)
        let texto2 = document.createTextNode(`Complemento: ${x['complemento']}`)
        let texto3 = document.createTextNode(`Unidade: ${x['unidade']}`)
        let texto4 = document.createTextNode(`Bairro: ${x['bairro']}`)
        let texto5 = document.createTextNode(`Localidade: ${x['localidade']}`)
        let texto6 = document.createTextNode(`UF: ${x['uf']}`)
        let texto7 = document.createTextNode(`IBGE: ${x['ibge']}`)
        let texto8 = document.createTextNode(`GIA: ${x['gia']}`)
        let texto9 = document.createTextNode(`DDD: ${x['ddd']}`)
        let texto10 = document.createTextNode(`Siafi: ${x['siafi']}`)

        par.appendChild(texto);
        par1.appendChild(texto1);
        par2.appendChild(texto2);
        par3.appendChild(texto3);
        par4.appendChild(texto4);
        par5.appendChild(texto5);
        par6.appendChild(texto6);
        par7.appendChild(texto7);
        par8.appendChild(texto8);
        par9.appendChild(texto9);
        par10.appendChild(texto10);

        dados.appendChild(par);
        dados.appendChild(par1);
        dados.appendChild(par2);
        dados.appendChild(par3);
        dados.appendChild(par4);
        dados.appendChild(par5);
        dados.appendChild(par6);
        dados.appendChild(par7);
        dados.appendChild(par8);
        dados.appendChild(par9);
        dados.appendChild(par10);

        console.log(x)
      }

      ).catch((x) => console.error(x));
  });
};
