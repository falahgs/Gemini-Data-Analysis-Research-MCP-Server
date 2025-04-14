declare module 'plotly' {
  function plotly(username: string, apiKey: string): {
    getImage(figure: any, opts: any, callback: (error: Error | null, imageStream: any) => void): void;
  };
  export = plotly;
} 