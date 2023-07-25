
import Directory from '../../components/directory/directory.component';


const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Accessories',
      imageUrl: 'https://i.imgur.com/6C7Eo4C.jpg',
    },
    {
      id: 2,
      title: 'Apparel',
      imageUrl: 'https://img.freepik.com/premium-vector/t-shirt-pixel-art-isolated-white-background_744913-347.jpg',
    },
    {
      id: 3,
      title: 'Collectibles',
      imageUrl: 'https://assets1.ignimgs.com/2015/06/16/amiibomario30thmodern02png-0e2483.png',
    },
    {
      id: 4,
      title: 'Retro Games',
      imageUrl: 'https://i.redd.it/2spgvscgdrg51.png',
    },
    {
      id: 5,
      title: 'Retro Systems',
      imageUrl: 'https://img.freepik.com/premium-vector/pixel-art-old-video-game-console-vector-icon-8bit-game-white-background_360488-403.jpg',
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;