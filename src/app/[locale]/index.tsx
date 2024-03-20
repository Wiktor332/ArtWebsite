import { useRouter } from 'next/router';
import Home from './Home/page';
import Gallery from './Gallery/page';
import Events from './Events/page';
import Contact from './Contact/page';

const LocalePage = () => {
  const router = useRouter();
  const { locale } = router.query;

  // Render the appropriate page based on the route segment
  switch (router.pathname) {
    case `/${locale}/Home`:
      return <Home />;
    case `/${locale}/Gallery`:
      return <Gallery />;
    case `/${locale}/Events`:
      return <Events />;
    case `/${locale}/Contact`:
      return <Contact />;
    default:
      return <div>404 - Page Not Found</div>;
  }
};

export default LocalePage;
