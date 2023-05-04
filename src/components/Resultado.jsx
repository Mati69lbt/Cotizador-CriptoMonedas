import { Contenedor, Imagen, Precio, Texto } from "./styled";

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTHOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="Img Cripto"
      />
      <div>
        <Precio>
          El Precio es de: <br />
          <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio + Alto del Día: <br />
          <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio + Bajo del Día: <br />
          <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Var.24hs: <br />
          <span>{CHANGEPCTHOUR} %</span>
        </Texto>
        <Texto>
          Última Actualización: <br />
          <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
