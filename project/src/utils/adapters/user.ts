import { ApiUserInfoData } from '../../types/api';
import { UserData } from '../../types/user';

export const adaptUserDataToClient = (userData: ApiUserInfoData): UserData => ({
  avatarUrl: userData['avatar_url'],
  email: userData.email,
  id: userData.id,
  isPro: userData['is_pro'],
  name: userData.name,
  token: userData.token,
});

export const adaptAuthInfoToServer = (userInfo: UserData): ApiUserInfoData => ({
  'avatar_url': userInfo.avatarUrl,
  email: userInfo.email,
  id: userInfo.id,
  'is_pro': userInfo.isPro,
  name: userInfo.name,
  token: userInfo.token,
});
