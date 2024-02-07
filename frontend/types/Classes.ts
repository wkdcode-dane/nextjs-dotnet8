export interface ClassListingItem {
    index: string;
    name: string;
    url: string;
}

export interface ClassPath {
    path: string;
}

export interface ClassesResponse {
    results: [ClassListingItem];
}