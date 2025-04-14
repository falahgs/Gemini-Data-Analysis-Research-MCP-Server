declare module 'csv-parser' {
  import { Transform } from 'stream';
  
  interface CSVParserOptions {
    separator?: string;
    headers?: string[] | boolean;
    skipLines?: number;
    strict?: boolean;
    maxRows?: number;
    escape?: string;
    quote?: string | null;
  }

  function csvParser(options?: CSVParserOptions): Transform;
  export = csvParser;
} 