import { creativeWorkType } from '@cinerino/factory';

export interface ICopyrightHolder {
    name: string;
}

export interface ICreativeWork {
    identifier: string;
    name: string;
    description?: string;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    license?: string;
    thumbnailUrl?: string;
    typeOf: creativeWorkType;
}

export function create(params: {
    identifier: string;
    name: string;
    description?: string;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    license?: URL;
    thumbnailUrl?: URL;
    typeOf: creativeWorkType;
}): ICreativeWork {
    return {
        identifier: params.identifier,
        name: params.name,
        description: params.description,
        copyrightHolder: params.copyrightHolder,
        copyrightYear: params.copyrightYear,
        datePublished: params.datePublished,
        license: (params.license !== undefined) ? params.license.toString() : undefined,
        thumbnailUrl: (params.thumbnailUrl !== undefined) ? params.thumbnailUrl.toString() : undefined,
        typeOf: params.typeOf
    };
}
