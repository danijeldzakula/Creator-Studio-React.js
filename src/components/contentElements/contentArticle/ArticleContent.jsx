import { Suspense } from 'react';
import { Wrapper, Article, Main, Header, Button, Row, Col, Grid } from '../../content';
import { CgMenuGridR } from 'react-icons/cg';
import { MdContentPaste } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';
import { useApp } from '../../../context/useApp';
import DynamicComponent from '../../../widgets/DynamicComponent';

export default function ArticleContent() {
  const { widgets, handleToggle } = useApp();

  return (
    <Article className="article__content">
      <Header className="hide-pdf">
        <Row>
          <Col>
            <h1 className="title">
              <span className="text">Creator Studio</span>
            </h1>
          </Col>

          <Col>
            <Button className="btn-medium btn-primary" type="button" onClick={() => handleToggle((p) => !p)}>
              <span className="icon">
                <CgMenuGridR fontSize={24} />
              </span>
              <span className="text">Settings</span>
            </Button>
          </Col>
        </Row>
      </Header>

      <Main>
        <Wrapper>
          <Suspense fallback={<div>Loading...</div>}>
            {widgets.map((widget) => {
              return <DynamicComponent key={widget._id} componentName={widget.name} props={widget} />;
            })}
          </Suspense>

          <Grid className="add-new-content hide-pdf">
            {/* <Button onClick={() => console.log('click')} className="btn btn-large btn-add-new-content">
              <span className="icon">
                <IoCreateOutline fontSize={26} />
              </span>
              <span className="text">Add new content</span>
            </Button> */}
          </Grid>
        </Wrapper>
      </Main>
    </Article>
  );
}
