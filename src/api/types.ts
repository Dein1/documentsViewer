export type IDocument = {
  Title: string;
  Version: string;
  Attachments?: string[];
  Contributors?: IContributor[];
  ID: string;
  CreatedAt: Date;
  UpdatedAt?: Date;
};

export type IContributor = {
  Name: string;
  ID: string;
};
