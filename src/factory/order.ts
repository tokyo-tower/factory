import { monetaryAmount, order, orderStatus, organizationType, personType, priceCurrency, propertyValue } from '@cinerino/factory';

import { IMultilingualString } from './multilingualString';
import { IOffer } from './offer';
import PaymentMethodType from './paymentMethodType';
import { IPerson, IProfile } from './person';
import { IReservation } from './reservation/event';

export type TypeOf = 'Order';

/**
 * 決済方法インターフェース
 */
export interface IPaymentMethod<T extends PaymentMethodType> {
    /**
     * 決済方法タイプ
     */
    typeOf: T;
    paymentMethod: T;
    /**
     * 決済方法名
     */
    name: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: monetaryAmount.IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty: propertyValue.IPropertyValue<any>[];
}

/**
 * 割引インターフェース
 */
export interface IDiscount {
    /**
     * 割引タイプ
     */
    typeOf: string;
    name: string;
    /**
     * Any discount applied.
     */
    discount: number;
    /**
     * Code used to redeem a discount.
     */
    discountCode: string;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the discount.
     */
    discountCurrency: string;
}

/**
 * 供給アイテムインターフェース
 */
export type IItemOffered = IReservation;

/**
 * offer interface
 * 供給インターフェース
 */
export interface IAcceptedOffer<T extends IItemOffered> extends IOffer {
    /**
     * オファー対象アイテム
     */
    itemOffered: T;
    /**
     * 販売者
     */
    seller: {
        typeOf: organizationType | personType;
        name: string;
    };
}

/**
 * 注文照会結果インターフェース
 */
export type IOrderInquiryResult = IOrder & {
    printToken: string;
};

/**
 * 販売者インターフェース
 */
export interface ISeller {
    id: string;
    identifier?: string;
    name: string;
    legalName?: IMultilingualString;
    typeOf: organizationType | personType;
    telephone?: string;
    url?: string;
}

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
