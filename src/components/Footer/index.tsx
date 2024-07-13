// src/components/Footer/index.tsx
import React, { useState, useEffect } from 'react'
import * as S from './styles'

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000) // Atualiza a cada segundo

    return () => clearInterval(timer)
  }, [])

  const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`

  return (
    <S.FooterContainer>
      <S.Texto>
        © Desenvolvido por Deive Silva. Todos os direitos reservados.
      </S.Texto>
      <S.Data>{formattedDateTime}</S.Data>
    </S.FooterContainer>
  )
}

export default Footer
