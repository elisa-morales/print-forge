import type { ReactNode, TransitionStartFunction } from "react";

// Data Types
export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

export type GetModelsParams = {
  category?: string;
};

// Page Types

export type CategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
  searchParams: Promise<{ sort?: string; search?: string }>;
};

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Components Types
export type ModelCardProps = {
  model: Model;
};

export type ModelsGridProps = {
  categoryName?: string;
  search?: string;
  models: Model[];
  isPending: boolean;
  startTransition: TransitionStartFunction;
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  exact?: boolean;
};

export type ModelsPageProps = {
  searchParams: Promise<{ sort?: string; search?: string }>;
};

export type SearchFormProps = {
  search?: string;
  startTransition: TransitionStartFunction;
};

export type ButtonSortProps = {
  children: ReactNode;
  sort: string;
  startTransition: TransitionStartFunction;
};

export type ModelBrowserProps = {
  categoryName?: string;
  search?: string;
  models: Model[];
};

export type SortControlsProps = {
  startTransition: TransitionStartFunction;
};

export type NotFoundUIProps = {
  title: string;
  subtitle: string;
  link_text: string;
  link_href: string;
};

export type PaginationButtonProps = {
  page: number;
};

// export type PaginationControlsProps = {};
