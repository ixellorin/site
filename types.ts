import { ReactElement, RefObject } from "react"

export interface IScrollerSection {
    label: string
    icon: string
    description: string
    target?: RefObject<HTMLDivElement>
  };

export interface IHackathon {
    name: string,
    role: string,
    img: string,
    imgWidth: number,
    imgHeight: number,
}

export interface IJob {
    // hooks: string[],
    company: string,
    date: string,
    hooks: ReactElement,
    img: string,
    imgHeight: number,
    imgWidth: number,
    techStack: string,
    title: string,
}

export interface IProject {
    title: string,
    languages: string,
    description: string,
    icon: string,
    gitHubURL?: string,
    externalURL?: string,
}