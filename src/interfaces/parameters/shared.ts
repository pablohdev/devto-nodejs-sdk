export interface PageParam {
  page: number
  per_page: number
}

export enum StateTypes {
  FRESH = 'fresh',
  ALL = 'all',
  RISING = 'rising'
}

export interface CommentsQuery {
  a_id: number
}
