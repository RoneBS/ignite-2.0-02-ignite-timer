import * as S from './Button.styles'

type ButtonProps = {
  variant? : S.ButtonVariant
}


export const Button = ({ variant = 'primary'}: ButtonProps) => {
  return (
    <S.ButtonContainer variant={variant}>Enviar</S.ButtonContainer>
  )
}