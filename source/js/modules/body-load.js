export default () => {
  const BODY = document.body;
  window.addEventListener(`load`, () => {
    BODY.classList.add(`body--loaded`);
  });
};
