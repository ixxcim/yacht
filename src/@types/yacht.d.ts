export interface IYacht {
    id: number;
    boatName: string;
    buildingYear: number;
    price: string;
    publishing: Publishing;
    Brand: IBrand;
    hullMaterial: HullMaterial;
    accomodation: IAccomodation;
    Generic: IGeneric;
    primaryPhoto: PrimaryPhoto;
}

export interface IBrand {
    id: number;
    model: string;
    brand: IBrandClass;
}

export interface IBrandClass {
    id: number;
    name?: string;
    createdAt: string;
    updatedAt: string;
    type?: string;
    material?: string;
    system?: string;
}

export interface IGeneric {
    id: number;
    lengthOverAll: number;
    draft: number;
    variableDraft: boolean;
    draftUp: null;
    draftDown: null;
    beam: number;
    shipType: IBrandClass;
    shipyardCountry: IFlag;
    designer: IBrandClass;
    classification: null;
    classification2: null;
    interiorDesigner: null;
    flag: IFlag;
    shipyard: IBrandClass;
}

export interface IFlag {
    id: number;
    nationality?: string;
    alpha2: string;
    alpha3: string;
    createdAt: null;
    updatedAt: null;
    locale: string;
    name?: string;
}

export interface IAccomodation {
    id: number;
    introAccomodation: string;
    pilotHouse: null;
    areasSummary: AreasSummary;
}

export interface AreasSummary {
    id: number;
    cabinsInTotal: number;
    berthsInTotal: number;
}

export interface HullMaterial {
    id: number;
    hullMaterial: IBrandClass;
    paintSystem: IBrandClass;
    sStructureFinish: IBrandClass;
    deckFinish: IBrandClass;
    cockpitFinish: IBrandClass;
    deckLayout: null;
    sStructuralmaterial: IBrandClass;
    hullShape: IBrandClass;
    keelType: IBrandClass;
    sideView: null;
}

export interface PrimaryPhoto {
    id: number;
    photo: Photo;
}

export interface Photo {
    id: number;
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    folderPath: string;
}

export interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    xlarge: Large;
    thumbnail: Large;
}

export interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}

export interface Publishing {
    id: number;
    usedBoat: boolean;
    comingSoon: boolean;
    priceVisible: string;
    sale_status: SaleStatus;
}

export interface SaleStatus {
    id: number;
    type: string;
}
