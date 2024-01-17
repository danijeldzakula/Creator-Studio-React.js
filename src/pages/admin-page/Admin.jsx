import { Section, Wrapper } from '../../components/content';
import Layout from '../../layouts';
import Content from '../../components/contentElements';

export default function Admin() {
  return (
    <Layout>
      <Section className="section__studio section__studio--admin">
        <Wrapper>
          <Content.Sidebar />
          <Content.Article />
        </Wrapper>

        <Content.Settings />
      </Section>
    </Layout>
  );
}
