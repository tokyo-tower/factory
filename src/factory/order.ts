import { order, orderStatus, priceCurrency } from '@cinerino/factory';

import PaymentMethodType from './paymentMethodType';
import { IPerson, IProfile } from './person';
import { IReservation } from './reservation/event';

export type TypeOf = order.TypeOf;
export type IPaymentMethod<T extends PaymentMethodType> = order.IPaymentMethod<T>;
export type IDiscount = order.IDiscount;

/**
 * 供給アイテムインターフェース
 */
export type IItemOffered = IReservation;

export type IAcceptedOffer<T extends IItemOffered> = order.IAcceptedOffer<T>;

export type ISeller = order.ISeller;

/**
 * 購入者インターフェース
 */
export type ICustomer = IPerson & IProfile & {
    name: string;
};

/**
 * 注文インターフェース
 * @see https://schema.org/Order
 */
export interface IOrder {
    /**
     * object type
     */
    typeOf: TypeOf;
    /**
     * Organization or Person
     * The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com").
     */
    seller: ISeller;
    /**
     * Person or Organization
     * Party placing the order.
     */
    customer: ICustomer;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber: string;
    /**
     * The merchant- specific identifier for the transaction.
     */
    orderNumber: string;
    /**
     * The total price of the entire transaction.
     */
    price: number;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the order price.
     */
    priceCurrency: priceCurrency;
    /**
     * Offer
     * The offers included in the order.Also accepts an array of objects.
     */
    acceptedOffers: IAcceptedOffer<IItemOffered>[];
    /**
     * payment methods
     */
    paymentMethods: IPaymentMethod<PaymentMethodType>[];
    /**
     * discount infos
     */
    discounts: IDiscount[];
    /**
     * URL	(recommended for confirmation cards/ Search Answers)
     * URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order.
     */
    url: string;
    /**
     * OrderStatus	(recommended for confirmation cards/ Search Answers)
     * The current status of the order.
     */
    orderStatus: orderStatus;
    /**
     * Date order was placed.
     */
    orderDate: Date;
    /**
     * Was the offer accepted as a gift for someone other than the buyer.
     */
    isGift: boolean;
    /**
     * Date order was returned.
     */
    dateReturned?: Date;
}

/**
 * 注文検索条件インターフェース
 */
export type ISearchConditions = order.ISearchConditions;
