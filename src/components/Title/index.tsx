import { Title as TitleStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
  type?: 'primary'
}

const Title = (props: Props) => (
  <TitleStyle type={props.type} fontSize={props.fontSize}>
    {props.children}
  </TitleStyle>
)

export default Title
