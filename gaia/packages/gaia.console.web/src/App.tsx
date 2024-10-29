import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
  Link,
  SideNavigation,
} from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';
import { useState } from 'react';
import { Navbar } from './widgets/NavBar';

const LOCALE = 'en';

export default function AppLayoutPreview() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(true)
  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <Navbar />
      <AppLayout
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: 'Home', href: '#' },
            ]}
          />
        }
        navigationOpen={isNavigationOpen}
        onNavigationChange={() => setIsNavigationOpen((prev) => !prev)}
        navigation={
          <SideNavigation
            header={{
              href: '/',
              text: 'Functions',
            }}
            activeHref='/minerva'
            items={[
              { type: 'link', text: 'Minerva', href: '/minerva' },
              { type: 'link', text: 'Hades', href: '/hades' },
              { type: 'link', text: 'Apolo', href: '/apolo'},
            ]}
          />
        }
        toolsHide
        content={
          <ContentLayout
            header={
              <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Page header
              </Header>
            }
          >
            <Container
              header={
                <Header variant="h2" description="Container description">
                  Container header
                </Header>
              }
            >
              <div className="contentPlaceholder" />
            </Container>
          </ContentLayout>
        }
      />
    </I18nProvider>
  );
}
