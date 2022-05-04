import { ref, watch, WatchStopHandle } from "vue";

export default class Dialog {
  isVisible = ref(false);
  stopWatchingVisibility?: WatchStopHandle;
  resolve?: (value: void | PromiseLike<any>) => any;
  reject?: (reason?: string) => any;

  open(data?: any): Promise<any> {
    this.isVisible.value = true;

    return new Promise<any>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.stopWatchingVisibility = watch(
        () => this.isVisible.value,
        () => {
          if (!this.isVisible.value) this.error("Dialog Closed");
        }
      );
    });
  }

  close(result?: any): void {
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
