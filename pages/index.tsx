import TagList from 'components/home/TagList';
import Banner from 'components/home/Banner';
import MainView from 'components/home/MainView';

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <MainView />
          <TagList />
        </div>
      </div>
    </div>
  );
};

export default Home;
