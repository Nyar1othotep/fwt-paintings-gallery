declare module "*.module.scss" {
  const value: Record<string, string>;
  export default value;
}

declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
