import Header from './Header';
import Footer from './Footer';

interface Props {}

const LayoutTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutTemplate;
