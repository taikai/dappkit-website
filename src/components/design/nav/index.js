import ButtonLink from '../button-link';
import { DappKit, DappKitComic } from '../../../utils/brands';
import * as Styles from './styles';

function Nav(props) {
  const {
    banner,
    menu,
    heroIsVisible = true,
    actionButtonValue,
    actionButtonUrl,
    github,
    drawerOpened = false,
    drawerOnClick,
    comicTheme = false,
  } = props;

  return (
    <>
      <Styles.Wrapper>
        {banner && <div>{banner}</div>}
        <Styles.Nav>
          <Styles.HamburgerButton
            className={drawerOpened ? 'opened' : undefined}
            onClick={drawerOnClick}
            aria-label="Menu"
          />
          {comicTheme ? <DappKitComic /> : <DappKit />}
          <Styles.Menu>
            <ul>
              {menu &&
                Array.isArray(menu) &&
                menu.map((item, index) => (
                  <li key={index}>
                    {item.external ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <a href={item.url}>{item.value}</a>
                    )}
                  </li>
                ))}
            </ul>
            <ButtonLink
              className="get-started--button"
              color={heroIsVisible ? 'light' : 'dark'}
              url={actionButtonUrl}
              value={actionButtonValue}
              external
            />
            <ButtonLink className="github--button" url={github} icon="github" external />
          </Styles.Menu>
        </Styles.Nav>
      </Styles.Wrapper>
      <Styles.Drawer className={drawerOpened ? 'opened' : undefined}>
        <ul>
          {menu &&
            Array.isArray(menu) &&
            menu.map((item, index) => (
              <li key={index}>
                {item.external ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={drawerOnClick}>
                    {item.value}
                  </a>
                ) : (
                  <a href={item.url} onClick={drawerOnClick}>
                  {item.value}
                </a>
              </li>
            ))}
        </ul>
        <div>
          <ButtonLink
            color="dark"
            url="https://docs.dappkit.dev/start-building"
            value={actionButtonValue}
            external
          />
          <ButtonLink url="https://github.com/taikai/dappkit" value="GitHub" external />
        </div>
      </Styles.Drawer>
    </>
  );
}

export default Nav;
