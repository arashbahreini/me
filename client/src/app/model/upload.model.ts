export class UploadModel {
  $key?: string;
  file: File;
  name?: string;
  progress?: number;
  createdAt?: Date = new Date();
  url?: string;
  errorMessage: string;
  // constructor(file: File) {
  //   this.file = file;
  // }
}
