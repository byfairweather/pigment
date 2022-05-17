import { ref, watch, WatchStopHandle } from "vue";

export default class Dialog<T> {
  isVisible = ref(false);
  stopWatchingVisibility?: WatchStopHandle;
  resolve?: (value: T | PromiseLike<T | undefined> | undefined) => void;
  reject?: (reason?: string) => any;

  open(parameters?: any): Promise<T | undefined> {
    this.isVisible.value = true;

    return new Promise<T | undefined>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.stopWatchingVisibility = watch(
        () => this.isVisible.value,
        () => {
          if (!this.isVisible.value) this.close();
        }
      );
    });
  }

  close(result?: T): void {
    this.stopWatchingVisibility?.();
    this.isVisible.value = false;
    this.resolve?.(result);
  }

  error(message?: string) {
    this.stopWatchingVisibility?.();
    this.isVisible.value = false;
    this.reject?.(message);
  }
}
