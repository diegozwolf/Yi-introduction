import { ClassScreenQuery, CourseScreenQuery, ArticleScreenQuery, MeditationScreenQuery } from "../graphql";

export * from './utils';

export interface Props {
    id: string;
}

export interface PropsClass {
    content: ClassScreenQuery["Class"];
}

export interface PropsCourses {
    content: CourseScreenQuery["Course"];
}
export interface PropsArticle {
    content: ArticleScreenQuery["Article"];
}

export interface PropsMeditation {
    content: MeditationScreenQuery["Meditation"];
  }