import { organizationType } from '@cinerino/factory';

import { IBilingualString } from './multilingualString';

/**
 * 組織インターフェース
 */
export interface IOrganization {
    id: string;
    identifier?: string;
    name: IBilingualString;
    legalName?: IBilingualString;
    typeOf: organizationType;
    location?: any;
    telephone?: string;
    url?: string;
}
