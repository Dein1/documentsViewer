export type IDocument = {
  Title: string;
  Version: string;
  Attachments?: string[];
  Contributors?: IContributor[];
  ID: string;
  CreatedAt: string;
  UpdatedAt?: string;
};

export type IContributor = {
  Name: string;
  ID: string;
};
