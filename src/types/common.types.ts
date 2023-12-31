import { User, Session } from 'next-auth'
import { MouseEventHandler } from 'react';

export type ButtonProps = {
  title: string;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: 'button' | 'submit';
  bgColor?: string;
  textColor?: string;
}

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
    id: string;
    createdBy: {
      name: string;
      email: string;
      avatarUrl: string;
      id: string;
    };
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string | null;
    linkedinUrl: string | null;
    projects: {
      edges: { node: ProjectInterface }[];
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor: string;
        endCursor: string;
      };
    };
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface Form {
  title: string;
  placeholder: string,
  state: string,
  setState: (value : string) => void,
}

export interface ElementProps {
    className?: string;
}

export interface ExpertProps {
    image?: string,
    name: string,
    degree?: string,
    speciality: string,
    experience?: string,
    description?: string,
    reversed: boolean,
}