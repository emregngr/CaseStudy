import {useContext} from 'react';
import {PromotionsContext} from '../providers/PromotionsProvider';

export const usePromotions = () => {
  const {state, setState, getTags, getPromotions, getPromotion} =
    useContext(PromotionsContext) || {};
  return {
    state,
    setState,
    getTags,
    getPromotions,
    getPromotion,
  };
};
