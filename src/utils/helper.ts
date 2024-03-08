export const stripHtmlFromContent = (content: string) => {
  return content.replace(/(<([^>]+)>)/gi, "") || "";
};
