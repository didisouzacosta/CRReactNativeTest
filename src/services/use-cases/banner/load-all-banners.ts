import {Banner} from '../../../domain/types';

const LoadAllBanners = async (): Promise<Banner[]> => {
  const banners: Banner[] = [
    {
      imageURL:
        'https://images.tcdn.com.br/img/img_prod/654759/1555707974_banner-cat-switch.png',
      url: 'https://www.nintendo.com/pt_BR/?cid=L001-01:ch=pmpd',
    },
    {
      imageURL:
        'https://pm1.narvii.com/6572/5df87ba23f32b6e901f5ee13427c2294f6d6a396_hq.jpg',
      url: 'https://www.apple.com/',
    },
    {
      imageURL:
        'https://switchplayer.net/wp-content/uploads/2017/03/Nintendo-Switch-List-Banner-1.png',
      url: 'https://consultaremedios.com.br/',
    },
  ];

  return Promise.resolve(banners);
};

export default LoadAllBanners;
