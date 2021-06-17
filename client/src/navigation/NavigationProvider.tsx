import {
  DownloadsScreen,
  HomeScreen,
  ClassScreen,
  MeditationScreen,
  CourseScreen,
  ArticleScreen,
  ClassPlayerScreen,
  CoursePlayerScreen,
  ArticlePlayerScreen,
  MeditationPlayerScreen
} from "../screens";
import { ErrorMessage } from "../components";
import React, { createContext, useState } from "react";
import {Props , PropsClass, PropsCourses,PropsArticle , PropsMeditation} from  "./../types";
import { type } from "os";

type TSFixMe = {
  HomeScreen: React.FC,
  DownloadsScreen: React.FC,
  ClassScreen: React.FC<Props>,
  MeditationScreen: React.FC<Props>,
  CourseScreen: React.FC<Props>,
  ArticleScreen: React.FC<Props>,
  ClassPlayerScreen: React.FC<PropsClass>,
  CoursePlayerScreen: React.FC<PropsCourses>,
  ArticlePlayerScreen: React.FC<PropsArticle>,
  MeditationPlayerScreen: React.FC<PropsMeditation>
}

type TSOptions = "HomeScreen" | "DownloadsScreen" | "ClassScreen" | "MeditationScreen" | "CourseScreen" | "ArticleScreen" | "ClassPlayerScreen" | "CoursePlayerScreen" | "ArticlePlayerScreen" | "MeditationPlayerScreen"  

type TSRoute = {
  route: TSOptions;
  params: {} |  Props |  PropsClass & PropsCourses & PropsArticle & PropsMeditation;
}

const routes: TSFixMe = {
  HomeScreen,
  DownloadsScreen,
  ClassScreen,
  MeditationScreen,
  CourseScreen,
  ArticleScreen,
  ClassPlayerScreen,
  CoursePlayerScreen,
  ArticlePlayerScreen,
  MeditationPlayerScreen
};

interface TSRoutes {
  page: string;
  component: React.FC;
};
enum Pages {
  HomeScreen  = "Homescreen",
}
const routesT :TSRoutes[] = [
  {
    page: Pages.HomeScreen,
    component: HomeScreen
  },
]

const initialRoute: TSRoute = { route: "HomeScreen", params: {} };

export const NavigationContext = createContext<{
  activeRoute: TSRoute
  setActiveRoute: (a: TSRoute) => void;
}>({
  activeRoute: initialRoute,
  setActiveRoute: () => console.warn("Missing navigation provider"),
});

export const NavigationProvider: React.FC = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState<TSRoute>(initialRoute); //convert to map
  routes
  const ScreenComponent = routes[activeRoute.route];
  if (!ScreenComponent) return <ErrorMessage msg="Missing ScreenComponent!" />;

  return (
    <NavigationContext.Provider
      value={{
        activeRoute,
        setActiveRoute
      }}
    >
      {children}
      <div style={{ padding: 30 }}>
        <ScreenComponent {...activeRoute.params} />
      </div>
    </NavigationContext.Provider>
  );
};
