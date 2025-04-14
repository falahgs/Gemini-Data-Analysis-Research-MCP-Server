export interface DataRow {
  [key: string]: string | number;
}

export interface NumericStats {
  mean: number;
  median: number;
  std: number;
  min: number;
  max: number;
}

export interface Statistics {
  rowCount: number;
  columnCount: number;
  numericStats: {
    [key: string]: NumericStats;
  };
  categoricalStats: {
    [key: string]: {
      [value: string]: number;
    };
  };
} 