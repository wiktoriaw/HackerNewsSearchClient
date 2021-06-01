export interface IResponse {
    hits: IHit[],
    nbHits: number,
    nbPages: number
}

export interface IHit {
    title: string,
    url: string
}