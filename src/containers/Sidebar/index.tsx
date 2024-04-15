import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, BtnTheme, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title type="primary" fontSize={20}>
        Adriano Henrique
      </Title>
      <Paragraph type="secondary" fontSize={16}>
        adrianohq
      </Paragraph>
      <Description type="primary" fontSize={12}>
        Dev Front-End
      </Description>
      <BtnTheme onClick={props.changeTheme}>Trocar tema</BtnTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
