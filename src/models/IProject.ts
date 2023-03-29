import restaurantdesktop from "./../assets/laptop-restaurant-app.jpg";
import webshopdesktop from "./../assets/laptop-webshop-app.jpg";
import weatherapp from "./../assets/weatherapp-mob.png";

export interface IProject {
  id: number;
  title: string;
  img: string;
  description: string;
  href: string;
}

export interface IProjects {
  projects: IProject[];
}

export const projects: IProjects = {
  projects: [
    {
      id: 1,
      title: "Restaurant",
      img: restaurantdesktop,
      description:
        "A restaurant application built as a group assignment in the course system development using react and typescript. Includes an admin page that can manage guests' bookings. ",
      href: "https://github.com/idadanielsson/Restaurant.git",
    },
    {
      id: 2,
      title: "Webshop",
      img: webshopdesktop,
      description:
        "A webshop application with skincare products. Built as a group assignment in the course front-end development using HTML, scss, typescript, and local storage. ",
      href: "https://github.com/idadanielsson/Grupparbete.git",
    },
    {
      id: 3,
      title: "Weather app",
      img: weatherapp,
      description:
        "A weather application with Visual crossing API. The application displays the current temperature in celsius based on geolocation search. It was built using react and typescript.",
      href: "https://github.com/idadanielsson/weather-application.git",
    },
  ],
};
