declare module 'prerender-node' {
  import { RequestHandler } from 'express';
  interface PrerenderNode extends RequestHandler {
    set(key: string, value: string | boolean): PrerenderNode;
    whitelisted(paths: string[]): PrerenderNode;
    blacklisted(paths: string[]): PrerenderNode;
  }
  const prerenderNode: PrerenderNode;
  export default prerenderNode;
}
