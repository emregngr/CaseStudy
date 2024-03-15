import {ComponentState, Dispatch} from 'react';

export type StateType = {
  tagsLoading: boolean;
  promotionsLoading: boolean;
  promotionLoading: boolean;
  tags: TagType[];
  promotions: PromotionType[];
  promotion: PromotionDetailType;
};

export type PromotionsContextType = {
  state: StateType;
  setState: Dispatch<ComponentState>;
  getTags: () => Promise<void>;
  getPromotions: () => Promise<void>;
  getPromotion: (id: string) => Promise<void>;
};

export type PromotionsProps = {
  children: JSX.Element;
};

export type TagType = {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: string;
};

export type TagsResponse = {
  data: TagType[];
};

export type PromotionType = {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  CardType: string;
  ExternalUrl: string;
  Id: number;
  ImageUrl: string;
  IsLuckyDay: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  LuckyDayBackgroundColor: string | null;
  LuckyDayText: string | null;
  LuckyDayTextColor: string | null;
  PromotionCardColor: string;
  RemainingText: string;
  ScenarioType: string;
  SeoName: string;
  Title: string;
  Unavailable: boolean;
  Unvisible: boolean;
};

export type PromotionsResponse = {
  data: PromotionType[];
};

export type PromotionDetailItemType = {
  Description: string;
  ImageUrl: string;
  Title: string;
};

export type PromotionDetailItemAreaType = {
  ClosedIconUrl: string;
  Description: string;
  OpenedIconUrl: string;
  PromotionDetailItems: PromotionDetailItemType[];
  Title: string;
  UseMapButton: boolean;
};

export type PromotionGalleryType = {
  CoverImageUrl: string;
  DocumentType: string;
  DocumentUrl: string;
};

export type PromotionDetailType = {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Contents: object;
  CountryTimeZone: number;
  Description: string;
  DetailButtonText: string;
  EndDate: Date;
  GameWin: string | null;
  Id: number;
  ImageUrl: string;
  IsMapAvailable: boolean;
  ListButtonText: string | null;
  LuckyDayBackgroundColor: string | null;
  LuckyDayText: string;
  LuckyDayTextColor: string | null;
  NextFlowConfigurations: object;
  PromotionDetailItemAreas: PromotionDetailItemAreaType[];
  PromotionGalleries: PromotionGalleryType[];
  PromotionTags: object;
  RemainingText: string;
  ScenarioType: string;
  SeoName: string;
  StartDate: Date;
  Title: string;
  Type: string;
  Unavailable: boolean;
  Unvisible: boolean;
};

export type PromotionResponse = {
  data: PromotionDetailType;
};
