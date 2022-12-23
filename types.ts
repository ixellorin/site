import { RefObject } from "react"

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
    company: string,
    title: string,
    date: string,
    hooks: string[],
    img: string,
    imgWidth: number,
    imgHeight: number,
}

export interface IProject {
    title: string,
    languages: string,
    description: string,
    icon: string,
    gitHubURL?: string,
    externalURL?: string,
}