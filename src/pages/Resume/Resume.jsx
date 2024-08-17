import PageContainer from '../../components/PageContainer';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Training from './components/Training';

const Resume = () => {
  return (
    <PageContainer>
      <Experience />
      <Education />
      <Training />
      <Skills />
    </PageContainer>
  );
};
export default Resume;
