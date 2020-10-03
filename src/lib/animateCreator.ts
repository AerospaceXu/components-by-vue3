import { nextTick, Ref } from 'vue';

export const animateCreator = (
  animationTime: number,
  animationController: Ref<boolean>
) => {
  let timer: NodeJS.Timeout | null = null;
  return () => {
    if (timer) {
      animationController.value = false;
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      timer = null;
      animationController.value = false;
    }, animationTime + 300);
    nextTick(() => {
      animationController.value = true;
    }).catch((error) => console.log(error));
  };
};
