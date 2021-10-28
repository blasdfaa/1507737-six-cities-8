import { UserInfo } from '../../types/user';

export const adaptAuthInfoToClient = (userInfo: UserInfo): UserInfo => {
  const adaptedUerInfo = {
    avatarUrl: userInfo['avatar_url'],
    email: userInfo.email,
    id: userInfo.id,
    isPro: userInfo['is_pro'],
    name: userInfo.name,
    token: userInfo.token,
  };

  return adaptedUerInfo;
};
