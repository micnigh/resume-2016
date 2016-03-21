interface ProjectNoRelations {
  id?: string;

  title: string;

  /** moment compatible date | hasStartTime */
  start: string | boolean;

  /** moment compatible date | hasEndTime */
  end: string | boolean;

  /** moment.duration().toJSON() */
  duration: string;

  icons: string[];

  /** html summary */
  summaryHtml: string;

  /** markdown summary */
  summaryMarkdown: string;

  portfolio?: {
    link: string,
    hoverTitle?: string,
  };
}

export interface Project extends ProjectNoRelations {
  tags: Tag[];
};

export interface Experience extends Project {
  projects: Project[];
};

export interface NormalizedProject extends ProjectNoRelations {
  /** ids of tags */
  tags: string[];
};

export interface NormalizedExperience extends NormalizedProject {
  /** ids of projects */
  projects: string[];
};

export interface Tag {
  id?: string;
  name: string;

  /** moment.duration().toJSON() */
  duration: string;
};
