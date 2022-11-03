import { Task, Todo, Objective, userObject } from "../types/types";

export const tasks: Array<Task> = [
  {
    name: "LD Website",
    code: "LW",
    color: "#DB54FD",
  },
  {
    name: "LD Marketing",
    code: "LM",
    color: "#61D26F",
  },
  {
    name: "RoundRush",
    code: "R",
    color: "#1FAAE9",
  },
  {
    name: "RoundRush Website",
    code: "RW",
    color: "#4086E0",
  },
  {
    name: "DevOps",
    code: "DO",
    color: "#EEC301",
  },
  {
    name: "MicroServices",
    code: "MS",
    color: "#FD612C",
  },
  {
    name: "Deep Learning",
    code: "DL",
    color: "#FD612C",
  },
  {
    name: "SpringBoot",
    code: "SP",
    color: "#1FAAE9",
  },
  {
    name: "Java",
    code: "J",
    color: "#61D26F",
  },
];
export const todos: Array<Todo> = [
    {
        priorety: 4,
        type: "task",
        code: "VMS-20",
        title: "Certe, inquam, pertinax non intell...",
        parent: "LD Website",
        color: "#61D26F",
      },
      {
        priorety: 4,
        type: "task2",
        code: "VMS-11",
        title: "Ac hac et ac tristique luctus.",
        parent: "Roundrush",
        color: "#1FAAE9",
      },
      {
        priorety: 3,
        type: "macro",
        code: "VMS-28",
        title: "Magna bibendum nibh mi habitant.",
        parent: "Marketing",
        color: "#1FAAE9",
      },
      {
        priorety: 3,
        type: "task",
        code: "VMS-22",
        title: "Ac hac et ac tristique luctus.",
        parent: "LD Website",
        color: "#61D26F",
      },
      {
        priorety: 2,
        type: "task2",
        code: "VMS-11",
        title: "Varius ultricies vitae eget.",
        parent: "LD Website",
        color: "#7A6FEF",
      },
      {
        priorety: 1,
        type: "macro",
        code: "VMS-22",
        title: "Certe, inquam, pertinax non intell...",
        parent: "LD Website",
        color: "#7A6FEF",
      },
];
export const objs: Array<Objective> = [
    {
        name: "Notifications Center",
        priority: 4,
        status: false,
        date: "15/01/2020",
        check: "5/10",
      },
      {
        name: "App Mobile",
        priority: 3,
        status: false,
        date: "15/01/2020",
        check: "5/10",
      },
      {
        name: "DevOps",
        priority: 2,
        status: false,
        date: "15/01/2020",
        check: "5/10",
      },
      {
        name: "Kubernetes",
        priority: 1,
        status: false,
        date: "15/01/2020",
        check: "5/10",
      },
      {
        name: "Docker",
        priority: 4,
        status: false,
        date: "15/01/2020",
        check: "5/10",
      },
]

export const users: Array<userObject> = [
  {
    name: "Mario Panariello",
    owner: true,
    email: "mario.panariello@lastingdynamics.com",
    active: true,
  },
  {
    name: "Brandon Watson",
    owner: false,
    email: "mario.panariello@lastingdynamics.com",
    active: true,
  },
  {
    name: "Norma Copper",
    owner: false,
    email: "mario.panariello@lastingdynamics.com",
    active: false,
  },
  {
    name: "Mario Panariello",
    owner: false,
    email: "mario.panariello@lastingdynamics.com",
    active: false,
  },
  {
      name: "Mario Panariello",
      owner: true,
      email: "mario.panariello@lastingdynamics.com",
      active: true,
    }
]