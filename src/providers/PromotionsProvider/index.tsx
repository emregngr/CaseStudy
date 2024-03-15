import React, {createContext, useReducer} from 'react';
import {combineReducers} from '../../utils/combineReducers';
import {axiosInstance} from '../../api/index';
import {
  PromotionsContextType,
  PromotionsProps,
  TagsResponse,
  PromotionsResponse,
  PromotionResponse,
} from './types';

const PromotionsContextDefaultValue = {
  state: {
    tagsLoading: false,
    promotionsLoading: false,
    promotionLoading: false,
    tags: [],
    promotions: [],
    promotion: {
      BrandIconColor: '',
      BrandIconUrl: '',
      BrandPromotionCardParticipationText: '',
      Contents: {},
      CountryTimeZone: 1,
      Description: '',
      DetailButtonText: '',
      EndDate: new Date(),
      GameWin: '',
      Id: 1,
      ImageUrl: '',
      IsMapAvailable: false,
      ListButtonText: '',
      LuckyDayBackgroundColor: '',
      LuckyDayText: '',
      LuckyDayTextColor: '',
      NextFlowConfigurations: {},
      PromotionDetailItemAreas: [
        {
          ClosedIconUrl: '',
          Description: '',
          OpenedIconUrl: '',
          PromotionDetailItems: [
            {
              Description: '',
              ImageUrl: '',
              Title: '',
            },
          ],
          Title: '',
          UseMapButton: false,
        },
      ],
      PromotionGalleries: [
        {
          CoverImageUrl: '',
          DocumentType: '',
          DocumentUrl: '',
        },
      ],
      PromotionTags: {},
      RemainingText: '',
      ScenarioType: '',
      SeoName: '',
      StartDate: new Date(),
      Title: '',
      Type: '',
      Unavailable: false,
      Unvisible: false,
    },
  },
  setState: () => {},
  getTags: async () => {},
  getPromotions: async () => {},
  getPromotion: async () => {},
};

const PromotionsContext = createContext<PromotionsContextType>(
  PromotionsContextDefaultValue,
);
const {Provider, Consumer: PromotionsConsumer} = PromotionsContext || {};

const PromotionsProvider: React.FC<PromotionsProps> = ({children}) => {
  const [state, setState] = useReducer(
    combineReducers,
    PromotionsContextDefaultValue?.state,
  );

  const getTags = async () => {
    try {
      setState({tagsLoading: true});
      const {data} = await axiosInstance.get<TagsResponse>('/tags/list');
      setState({tags: data, tagsLoading: false});
    } catch (error) {
      setState({tagsLoading: false});
      console.log('unexpected error: ', error);
    }
  };

  const getPromotions = async () => {
    try {
      setState({promotionsLoading: true});
      const {data} = await axiosInstance.get<PromotionsResponse>(
        'promotions/list?Channel=PWA',
      );
      setState({promotions: data, promotionsLoading: false});
    } catch (error) {
      setState({promotionsLoading: false});
      console.log('unexpected error: ', error);
    }
  };

  const getPromotion = async (id: string) => {
    try {
      setState({promotionLoading: true});
      const {data} = await axiosInstance.get<PromotionResponse>(
        `/promotions?Id=${id}`,
      );
      setState({promotion: data, promotionLoading: false});
    } catch (error) {
      setState({promotionLoading: false});
      console.log('unexpected error: ', error);
    }
  };

  const value = {
    state,
    setState,
    getTags,
    getPromotions,
    getPromotion,
  };

  return <Provider value={value}>{children}</Provider>;
};

export {PromotionsProvider, PromotionsContext, PromotionsConsumer};
