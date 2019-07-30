import { organizationType, seller } from '@cinerino/factory';
import PaymentMethodType from './paymentMethodType';

export type IPaymentAccepted<T extends PaymentMethodType> = seller.IPaymentAccepted<T>;

/**
 * 組織インターフェース
 */
export type IOrganization = seller.IOrganization<seller.IAttributes<organizationType>>;
