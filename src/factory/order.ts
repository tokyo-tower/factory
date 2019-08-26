import { order } from '@cinerino/factory';

export import TypeOf = order.TypeOf;
export import IPaymentMethod = order.IPaymentMethod;
export import IDiscount = order.IDiscount;
export import IItemOffered = order.IReservation;
export import ISeller = order.ISeller;
export import ICustomer = order.ICustomer;
export import ISearchConditions = order.ISearchConditions;
export import IAcceptedOffer = order.IAcceptedOffer;

/**
 * 注文インターフェース
 */
export interface IOrder extends order.IOrder {
    acceptedOffers: IAcceptedOffer<IItemOffered>[];
}
