import { order } from '@cinerino/factory';

import PaymentMethodType from './paymentMethodType';

export import TypeOf = order.TypeOf;
export import IPaymentMethod = order.IPaymentMethod;
export import IDiscount = order.IDiscount;
export import IItemOffered = order.IReservation;
export import ISeller = order.ISeller;
export import ICustomer = order.ICustomer;
export import ISearchConditions = order.ISearchConditions;
export type IAcceptedOffer<T extends IItemOffered> = order.IAcceptedOffer<T>;

/**
 * 注文インターフェース
 */
export interface IOrder extends order.IOrder {
    acceptedOffers: IAcceptedOffer<IItemOffered>[];
    paymentMethods: IPaymentMethod<PaymentMethodType>[];
}
