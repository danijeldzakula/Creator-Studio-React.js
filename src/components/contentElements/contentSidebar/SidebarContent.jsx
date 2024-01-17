import { Sidebar, Main, Header, Row, Col } from '../../content';
import { BsCodeSlash } from 'react-icons/bs';
import { RxComponentInstance } from 'react-icons/rx';
import { useApp } from '../../../context/useApp';
import { uuidv4 } from '../../../helpers';
import { menus } from '../../../widgets';
import { useCallback, useState } from 'react';

export default function SidebarContent() {
  const { handleWidgets } = useApp();

  const [search, setSearch] = useState('');
  const onChange = useCallback((event) => {
    const { value } = event.target;
    setSearch(value);
  }, []);

  const menuItems = menus.filter(({ label }) => label.toLowerCase().includes(search));

  return (
    <Sidebar className="sidebar__content hide-pdf">
      <Header>
        <Row>
          <Col>
            <h3 className="title">
              <span className="text text__hide">Widgets</span>
            </h3>
          </Col>
        </Row>
      </Header>

      <Main>
        <div className="search">
          <input value={search} onChange={onChange} type="text" placeholder="Live Search..." />
        </div>

        <ul className="list-items">
          {menuItems.map((menu) => {
            const { _id, name, label } = menu;

            return (
              <li key={_id} className="item">
                <button
                  onClick={() =>
                    handleWidgets({
                      action: {
                        type: 'add',
                        payload: {
                          _id: uuidv4(),
                          name: name,
                        },
                      },
                    })
                  }
                  type="button"
                  className="btn btn-widget"
                >
                  <span className="icon">
                    <BsCodeSlash fontSize={26} />
                  </span>
                  <span className="text">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </Main>
    </Sidebar>
  );
}
