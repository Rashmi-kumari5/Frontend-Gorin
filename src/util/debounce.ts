export const debounce = (fn: (_id: string, value: string) => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return (_id: string, value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(_id, value), delay);
  };
};