import webshopdesktop from './../assets/webshop-desktop.svg';
import webshopmobile from './../assets/webshop-mobile.svg';

export interface IProject {
    id:number;
    title:string;
    imgDesktop:string;
    imgMobile:string;
    description:string;
    toggleProject():void;
};

export interface IProjects {
    projects:IProject[];
}

export const projects:IProjects = {
    projects: [{
        id: 1,
        title: "Webshop",
        imgDesktop: webshopdesktop,
        imgMobile: webshopmobile,
        description: "Lorem ipsum",
        toggleProject: () => { },
    }, {
        id: 2,
        title: "Todo",
        imgDesktop: webshopdesktop,
        imgMobile: webshopmobile,
        description: "Lorem ipsum",
        toggleProject: () => { },
    }, {
        id: 3,
        title: "Zoo",
        imgDesktop: webshopdesktop,
        imgMobile: webshopmobile,
        description: "Lorem ipsum",
        toggleProject: () => { },
    },],

}