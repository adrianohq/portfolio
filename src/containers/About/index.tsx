import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection, AboutSection } from './styles'

const About = () => (
  <AboutSection>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="primary">
      Lorem, iParagraphsum dolor sit amet consectetur adipisicing elit. Cum eum
      ducimus error magni debitis dicta facere voluptate labore culpa aut
      tempora alias, minus, necessitatibus quibusdam aspernatur corrupti ipsum,
      assumenda quidem?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=adrianohq&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=adrianohq&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </AboutSection>
)

export default About
