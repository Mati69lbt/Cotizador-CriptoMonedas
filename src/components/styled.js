import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

export const Imagen = styled.img`
  display: block;
  width: 120px;
  transform: translateX(0px);
  animation: float 6s ease-out infinite;
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-60px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
    display: block;
    text-align: end;
  }
`;

export const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
    display: block;
    text-align: end;
  }
`;
