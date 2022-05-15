export type Options = {
  duration?: number;
};

export const defaultOptions = {
  duration: 2000,
};

export type CopiedValue = string | null;
export type IsCopied = boolean;
export type CopyFn = (text: string) => boolean;
