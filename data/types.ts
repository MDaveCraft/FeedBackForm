export interface Data {
  value: string;
  label: string;
}

export class ComboBoxData {
  private data: Data[];
  private label: string;
  private constructor(data: Data[], label: string) {
    this.data = data;
    this.label = label;
  }
  static init(data: Data[], label: string) {
    return new ComboBoxData(data, label);
  }
  get getData() {
    return this.data;
  }

  get getLabel() {
    return this.label;
  }
}