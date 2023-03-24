import restaurantdesktop from "./../assets/laptop-restaurant-app.jpg";
import webshopdesktop from "./../assets/laptop-webshop-app.jpg";
import weatherapp from "./../assets/weather-mob.svg";

export interface IProject {
  id: number;
  title: string;
  imgMobile: string;
  description: string;
}

export interface IProjects {
  projects: IProject[];
}

export const projects: IProjects = {
  projects: [
    {
      id: 1,
      title: "Restaurant",
      imgMobile: restaurantdesktop,
      description:
        "A restaurant application built as a group assignment in the course system development using react and typescript. Includes an admin page that can manage guests' bookings. ",
    },
    {
      id: 2,
      title: "Webshop",
      imgMobile: webshopdesktop,
      description:
        "A webshop application with skincare products. Built as a group assignment in the course front-end development using HTML, scss, typescript, and local storage. ",
    },
    {
      id: 3,
      title: "Weather app",
      imgMobile: weatherapp,
      description:
        "A weather application with Visual crossing API. The application displays the current temperature in celsius based on geolocation search. It was built using react and typescript.",
    },
  ],
};
