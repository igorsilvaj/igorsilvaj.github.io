import { constants } from "../GlobalStyle";

export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -constants.HEADER_HEIGHT_NUMBER;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const scrollByValue = (value: number) => {
  window.scrollTo({
    top: value,
    behavior: "smooth",
  })
};

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToBottom = (): void => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
