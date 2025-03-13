export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface GlobalContent {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  navbar: NavBarLink[];
  footer: {
    id: number;
    name: string;
    description: string;
  };
}

export interface NavBarLink {
  id: number;
  name: string;
  link: string;
}
