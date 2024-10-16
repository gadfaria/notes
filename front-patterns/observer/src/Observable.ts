class Observable {
  private observers: Function[] = [];

  subscribe(observer: Function) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Function) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data: string) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable();
