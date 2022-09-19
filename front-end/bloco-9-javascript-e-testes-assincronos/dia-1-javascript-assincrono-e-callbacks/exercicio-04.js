const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();

  setTimeout(() => console.log(`A temperatura de Marte é: ${currentTemperature} graus celsius`), messageDelay());
};

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
// Solução:
// Criamos a função sendMarsTemperature;
// Dentro da função sendMarsTemperature, recebemos a temperatura pela função getMarsTemperature e armazenamos seu retorno na variável currentTemperature;
// Fazemos um setTimeout colocando a função messageDelay como o tempo de espera; e
// Colocamos um console.log() dentro de nosso setTimeout com a mensagem esperada.



