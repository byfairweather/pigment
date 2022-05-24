import { ref, watch, WatchStopHandle } from "vue";

export default class Dialog<T> {
  isOpen = ref(false);
  stopWatchingVisibility?: WatchStopHandle;
  resolve?: (value: T | undefined | PromiseLike<T | undefined>) => void;
  reject?: (reason?: string) => any;

  open(...args: any): Promise<T | undefined> {
    this.isOpen.value = true;

    return new Promise<T | undefined>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.stopWatchingVisibility = watch(
        () => this.isOpen.value,
        () => {
          if (!this.isOpen.value) this.close();
        }
      );
    });
  }

  close(result?: T): void {
    this.stopWatchingVisibility?.();
    this.isOpen.value = false;
    this.resolve?.(result);
  }

  error(message?: string) {
    this.stopWatchingVisibility?.();
    this.isOpen.value = false;
    this.reject?.(message);
  }
}
